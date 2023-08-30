import React, {useEffect, useRef} from 'react';
import {Text} from '../../components';
import {View, ScrollView, Image, Animated} from 'react-native';
import LottieView from 'lottie-react-native';
import {COLORS, ImagesPath} from '../../constant';

const services = [
  {
    img: ImagesPath.post,
    service: 'Posts',
    bgColor: COLORS.lightGreen,
  },
  {
    img: ImagesPath.food,
    service: 'Food',
    bgColor: COLORS.lightBlue,
  },
  {
    img: ImagesPath.melatonin,
    service: 'Medicine',
    bgColor: COLORS.lightBrown,
  },
  {img: ImagesPath.vet, service: 'Vetenary', bgColor: COLORS.lightPurple},
  {img: ImagesPath.grooming, service: 'Grooming', bgColor: COLORS.lightYellow},
  {img: ImagesPath.food, service: 'Food', bgColor: COLORS.lightBlue},
  {img: ImagesPath.melatonin, service: 'Medicine', bgColor: COLORS.lightGreen},
  {img: ImagesPath.vet, service: 'Vetenary', bgColor: COLORS.lightBrown},
];

const HomeScreen = ({navigation}) => {
  // const translateY = useRef(new Animated.Value(-100)).current;
  const arrtranslateY = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    // Animated.spring(translateY, {
    //   toValue: 0,
    //   stiffness: 150, // Adjust the stiffness of the spring
    //   damping: 15, // Adjust the damping of the spring
    //   useNativeDriver: true,
    // }).start();
    Animated.spring(arrtranslateY, {
      toValue: 0,
      stiffness: 150, // Adjust the stiffness of the spring
      damping: 15, // Adjust the damping of the spring
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 25,
        // transform: [{translateY}],
      }}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LottieView
          style={{height: 250, width: 300}}
          source={require('../../assets/animations/wellcome.json')}
          autoPlay
        />
      </View>

      <View
        style={{
          flex: 1,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <Text style={{marginBottom: 5}} variant="titleLarge">
          Services
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}>
          {services.map((item, i) => {
            const {img, service, bgColor, animation} = item;
            return (
              <Animated.View
                key={i}
                style={{
                  backgroundColor: bgColor,
                  width: '45%',
                  height: 160,
                  marginVertical: 10,
                  padding: 10,
                  borderRadius: 10,
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  transform: [{translateY: arrtranslateY}],
                }}>
                <Image style={{height: 90, width: 90}} source={img} />

                <Text>{service}</Text>
              </Animated.View>
            );
          })}
        </ScrollView>
      </View>
    </Animated.View>
  );
};

export default HomeScreen;
