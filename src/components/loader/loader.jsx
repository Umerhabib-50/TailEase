import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const CustomLoader = () => {
  return (
    <SkeletonPlaceholder>
      {[1, 2, 3].map((value, ind) => {
        return (
          <View
            key={ind}
            style={{
              marginTop: '2%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 7,
              borderRadius: 10,
              marginBottom: 15,
              borderColor: '#E3EBF0',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{width: 50, height: 60, borderRadius: 20}} />
              <View style={{marginLeft: 17}}>
                <View
                  style={{
                    width: 70,
                    height: 10,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
                <View
                  style={{
                    width: 120,
                    height: 10,
                    borderRadius: 10,
                    margin: 3,
                  }}
                />
              </View>
            </View>
            <View style={{width: 20, height: 20, borderRadius: 5}} />
          </View>
        );
      })}
    </SkeletonPlaceholder>
  );
};
