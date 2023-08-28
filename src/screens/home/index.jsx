import React from 'react';
import {FlatList, Image, View} from 'react-native';
import {COLORS, ImagesPath} from '../../constant';
import {service} from '../../json';
import {HomeStyle} from './home.style';
import {CustomCard, CustomLoader, Text} from '../../components';
import LottieView from 'lottie-react-native';
import useSWR from 'swr';
import {SERVER_IP} from '../../config';
const HomeScreen = ({navigation}) => {
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const {data, mutate, error, isLoading} = useSWR(
    `${SERVER_IP}/WoundedAnimals/All`,
    fetcher,
  );
  const loading = true;
  return (
    <>
      <View style={HomeStyle.container}>
        {/* <View style={HomeStyle.cardTop}>
          <View style={{flex: 1}}>
            <Text color={COLORS.white}>
              Street animals need our protection, help them today
            </Text>
            <CustomButton
              color={COLORS.white}
              title="Send Image"
              textColor={COLORS.purple}
              style={{marginTop: '7%'}}
            />
          </View>
          <View style={{flex: 1}}>
            <Image
              source={ImagesPath.homeImage}
              style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            />
          </View>
        </View> */}
        <LottieView
          style={{height: 300, width: 300}}
          source={require('../../assets/wellcome.json')}
          autoPlay
        />
        <View style={{marginTop: '10%'}}>
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
        </View>
        <View style={{marginTop: '10%', flex: 1}}>
          <Text variant="titleMedium" fontWeight="bold">
            Nearby Veterinary
          </Text>
          {isLoading ? (
            <CustomLoader />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data?.woundedAnimals}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => {
                const {description, imageUrl, woundedAnimal} = item;
                const name = item?.user[0]?.name;
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
              style={{marginTop: 6}}
            />
          )}
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
