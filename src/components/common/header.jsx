import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {COLORS} from '../../constant';

export const Header = ({img, navigation}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: COLORS.lightPurple,
        padding: 15,
      }}>
      <View
        style={{
          width: 30,
          height: 30,
          backgroundColor: COLORS.linearPurple,
          borderRadius: 5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image style={{width: 16, height: 16}} source={img} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
