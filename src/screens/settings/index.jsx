import React from 'react';
import {View, Image} from 'react-native';
// import {accout} from '../../../json';
import {ProfileStyle} from './profile.style';
import {Text} from '../../components';
import {ImagesPath} from '../../constant';

const UserProfileScreen = () => {
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
        {/* <View>{accout.map}</View> */}
      </View>
    </View>
  );
};

export default UserProfileScreen;
