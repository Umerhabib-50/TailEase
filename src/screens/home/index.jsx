import React from 'react';
import {Text} from '../../components';
import {View, ScrollView, Image} from 'react-native';
import LottieView from 'lottie-react-native';
import {COLORS, ImagesPath} from '../../constant';
import {service} from '../../json';

const services = [
  {img: ImagesPath.post, service: 'Posts', bgColor: COLORS.lightGreen},
  {img: ImagesPath.food, service: 'Food', bgColor: COLORS.lightBlue},
  {img: ImagesPath.melatonin, service: 'Medicine', bgColor: COLORS.lightBrown},
  {img: ImagesPath.vet, service: 'Vetenary', bgColor: COLORS.lightPurple},
  {img: ImagesPath.grooming, service: 'Grooming', bgColor: COLORS.lightYellow},
  {img: ImagesPath.food, service: 'Food', bgColor: COLORS.lightBlue},
  {img: ImagesPath.melatonin, service: 'Medicine', bgColor: COLORS.lightGreen},
  {img: ImagesPath.vet, service: 'Vetenary', bgColor: COLORS.lightBrown},
];

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 25,
      }}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LottieView
          style={{height: 250, width: 300}}
          source={require('../../assets/wellcome.json')}
          autoPlay
        />
      </View>

      <View style={{flex: 1}}>
        <Text style={{marginBottom: 5}} variant="titleLarge">
          Services
        </Text>
        <ScrollView
          contentContainerStyle={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}>
          {services.map((item, i) => {
            const {img, service, bgColor} = item;
            return (
              <View
                key={i}
                style={{
                  backgroundColor: bgColor,
                  width: 160,
                  height: 160,
                  marginVertical: 10,
                  padding: 10,
                  borderRadius: 10,
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <Image style={{width: 80, height: 80}} source={img} />
                <Text>{service}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
