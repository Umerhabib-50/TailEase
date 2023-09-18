import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {ImagesPath} from '../../constant';

export const Header = ({img, navigation, bgClr, setting, onPress}) => {
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
      {setting && (
        <TouchableOpacity onPress={onPress}>
          <Image style={{width: 25, height: 25}} source={ImagesPath.setting} />
        </TouchableOpacity>
      )}
    </View>
  );
};
