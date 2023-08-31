import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';

export const Header = ({img, navigation, bgClr}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
      }}>
      <View
        style={{
          width: 30,
          height: 30,
          backgroundColor: bgClr,
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
