import React from 'react';
import {View, Image} from 'react-native';
import {ProfileStyle} from './profile.style';
import {Text} from '../../components';
import {ImagesPath} from '../../constant';
import {accout} from '../../json';
import {TouchableRipple} from 'react-native-paper';

const UserProfileScreen = ({navigation}) => {
  return (
    <View style={ProfileStyle.container}>
      <Image
        source={ImagesPath.profileImg}
        style={{
          height: '50%',
          width: '100%',
        }}
      />
      <View style={{paddingHorizontal: '7%'}}>
        <Text
          style={{marginTop: '10%'}}
          variant="titleMedium"
          fontWeight="bold">
          Account
        </Text>
        <View>
          {accout.map((item, ind) => {
            const {image, title} = item;
            return (
              <TouchableRipple
                key={ind}
                onPress={() => {
                  ind == 0 && navigation.navigate('changePasswordScreen');
                }}>
                <>
                  <View
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      marginTop: 7,
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image source={image} style={{height: 30, width: 30}} />
                      <Text style={{marginLeft: 20}}>{title}</Text>
                    </View>
                    <Image
                      source={ImagesPath.nextArrow}
                      style={{height: 20, width: 20}}
                    />
                  </View>
                  <View
                    style={{
                      borderBottomWidth: 0.5,
                      borderBottomColor: 'black',
                      paddingVertical: 6,
                    }}
                  />
                </>
              </TouchableRipple>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default UserProfileScreen;
