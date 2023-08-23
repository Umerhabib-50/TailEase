import React from 'react';
import {FlatList, Image, ScrollView, View} from 'react-native';
import {CustomButton, CustomCard, Text} from '../../components';
import {COLORS, ImagesPath} from '../../constant';
import {dcList, service} from '../../json';
import {HomeStyle} from './homeStyle/home.style';
export const HomeScreen = () => {
  return (
    <>
      <View style={HomeStyle.container}>
        <View style={HomeStyle.cardTop}>
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
        </View>

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
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dcList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <CustomCard title={item.title} description={item.address} />
            )}
            style={{marginTop: 6}}
          />
        </View>
      </View>
    </>
  );
};
