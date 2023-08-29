import React, {useEffect} from 'react';
import {FlatList, Image, View, Animated, ScrollView} from 'react-native';
import {COLORS, ImagesPath} from '../../constant';
import {service} from '../../json';
import {HomeStyle} from './home.style';
import {CustomCard, CustomLoader, Text} from '../../components';
import LottieView from 'lottie-react-native';
import useSWR from 'swr';
import {SERVER_IP} from '../../config';
import {SafeAreaView} from 'react-native-safe-area-context';
const HomeScreen = ({navigation}) => {
  const scrollY = new Animated.Value(0);

  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const {data, mutate, error, isLoading} = useSWR(
    `${SERVER_IP}/WoundedAnimals/All`,
    fetcher,
  );

  const animatedStyles = {
    headerHeight: scrollY.interpolate({
      inputRange: [0, 20],
      outputRange: [200, 0],
      extrapolate: 'clamp',
    }),
    servicesPosition: scrollY.interpolate({
      inputRange: [0, 20],
      outputRange: [200, 0],
      extrapolate: 'clamp',
    }),
    scrollPadding: scrollY.interpolate({
      inputRange: [0, 20],
      outputRange: [350, 200],
      extrapolate: 'clamp',
    }),
    opacity: scrollY.interpolate({
      inputRange: [0, 20],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };

  const handleScrollEnd = event => {
    const offsetY = event.nativeEvent.contentOffset.y;

    if (offsetY >= 15) {
      Animated.timing(scrollY, {
        toValue: 30,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(scrollY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      mutate();
    });
    return () => {
      unsubscribe();
    };
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 20, paddingVertical: 10}}>
      <Animated.View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          height: animatedStyles.headerHeight,
          opacity: animatedStyles.opacity,
          zIndex: 1,
        }}>
        <LottieView
          style={{height: 300, width: 300}}
          source={require('../../assets/wellcome.json')}
          autoPlay
        />
      </Animated.View>
      <Animated.View
        style={{
          width: '100%',
          position: 'absolute',
          top: animatedStyles.servicesPosition,
          right: 20,
          zIndex: 1,
          backgroundColor: '#F0F0F0',
          paddingVertical: 10,
        }}>
        <View>
          <Text variant="titleMedium" fontWeight="bold">
            Services
          </Text>
          <View style={HomeStyle.serviceSection}>
            {service.map((item, ind) => {
              const {image, title} = item;
              return (
                <View key={ind} style={HomeStyle.mapTop}>
                  <View style={HomeStyle.mapImage}>
                    <Image
                      source={image}
                      style={{width: 30, height: 30, marginTop: '14%'}}
                    />
                  </View>

                  <Text style={{marginTop: '9%'}} fontWeight="bold">
                    {title}
                  </Text>
                </View>
              );
            })}
          </View>
          <Text style={{marginTop: 20}} variant="titleMedium" fontWeight="bold">
            Nearby Veterinary
          </Text>
        </View>
      </Animated.View>

      <Animated.FlatList
        style={{paddingTop: animatedStyles.scrollPadding}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        onScrollEndDrag={handleScrollEnd}
        showsVerticalScrollIndicator={false}
        data={data?.woundedAnimals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          const {description, imageUrl, woundedAnimal} = item;
          const name = item?.user.name;
          return (
            <CustomCard
              title={name}
              imageUrl={imageUrl}
              description={description}
              onNavigatePress={() =>
                navigation.navigate('wildLifeDetails', {item})
              }
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
