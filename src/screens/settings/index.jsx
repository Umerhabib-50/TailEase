import React from 'react';
import {View, Image, Alert} from 'react-native';
import {ProfileStyle} from './profile.style';
import {Text} from '../../components';
import {ImagesPath} from '../../constant';
import {accout} from '../../json';
import {TouchableRipple} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {logOutAction} from '../../redux';

const UserProfileScreen = ({navigation}) => {
  // const token = useSelector(state => state?.userLogin?.userLogin?.Token);
  const dispatch = useDispatch();

  const showAlert = () => {
    Alert.alert(
      'Log Out',
      'Are you sure?',
      [
        {
          text: 'OK',
          onPress: () => dispatch(logOutAction(navigation)),
        },
        {
          text: 'CANCEL',
          onPress: () => console.log('OK PRESS'),
        },
      ],
      {cancelable: false},
    );
  };
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
                  ind == 1 && showAlert();
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
