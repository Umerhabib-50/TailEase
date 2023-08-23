import React from 'react';
import {FlatList, Image, View} from 'react-native';
import {CustomButton, CustomCard, Text} from '../../components';
import {COLORS, ImagesPath} from '../../constant';
import {dcList, service} from '../../json';

export const HomeScreen = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          padding: '7%',
        }}>
        <View
          style={{
            backgroundColor: COLORS.purple,
            height: '25%', // Adjust the height as needed
            borderRadius: 20,
            flexDirection: 'row',
            padding: 20,
          }}>
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '4%',
              justifyContent: 'space-between',
            }}>
            {service.map((item, ind) => {
              const {image, title} = item;
              return (
                <View
                  key={ind}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '3%',
                  }}>
                  <View
                    style={{
                      backgroundColor: COLORS.lightPurple,
                      alignItems: 'center',
                      width: 50,
                      height: 45,
                      borderRadius: 9,
                    }}>
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
        <View style={{marginTop: '10%', width: '100%'}}>
          <Text variant="titleMedium" fontWeight="bold">
            Nearby Veterinary
          </Text>

          <View style={{display: 'flex'}}>
            <FlatList
              data={dcList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <CustomCard title={item.title} description={item.address} />
              )}
              style={{marginTop: 6}}
            />
          </View>
        </View>
      </View>
    </>
  );
};
