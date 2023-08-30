import React, {useEffect} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {AuthStyle} from './authStyle.style';
import {CustomButton, CustomInput, Text} from '../../components';
import {COLORS, ImagesPath} from '../../constant';
import {userLoginAction} from '../../redux';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
  // const isFocused = useIsFocused();
  // console.log('isFocused', isFocused);
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const dispatch = useDispatch();
  const {error, loading} = useSelector(state => state?.userLogin);

  const loginSubmit = data => {
    dispatch(userLoginAction(data));
  };

  useEffect(() => {
    return () => {
      console.log('cleared');
      reset();
    };
  }, []);

  return (
    <>
      <View style={AuthStyle.imageParent}>
        <View style={AuthStyle.imageBackground} />
        <Image source={ImagesPath.walkImage} style={AuthStyle.image} />
      </View>

      <View style={AuthStyle.text}>
        <Text variant="displaySmall" fontWeight="bold" color={COLORS.white}>
          Welcome
        </Text>
        <Text variant="bodyLarge" color={COLORS.white}>
          Sign in to continue
        </Text>
      </View>
      <ScrollView>
        <View style={AuthStyle.container}>
          <View style={{paddingHorizontal: '7%'}}>
            <CustomInput
              control={control}
              errors={errors}
              label="Phone"
              name="phoneNo"
              keyboardType={'numeric'}
            />
            <CustomInput
              password
              control={control}
              errors={errors}
              label="Password"
              name="password"
            />
            {error && (
              <Text color="red" style={{textAlign: 'center'}}>
                Wrong Credentials
              </Text>
            )}
            <CustomButton
              title={loading ? 'loading...' : 'Sign In'}
              style={{marginTop: '8%'}}
              onPress={handleSubmit(loginSubmit)}
            />
          </View>
          <View style={AuthStyle.bottom}>
            <TouchableRipple onPress={() => navigation.navigate('register')}>
              <Text
                fontWeight="bold"
                variant="bodyMedium"
                color={COLORS.purple}>
                Sign Up
              </Text>
            </TouchableRipple>
            <Text color={COLORS.purple}>Forgot password?</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default LoginScreen;
