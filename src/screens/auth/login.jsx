import React, {useEffect, useRef, useState} from 'react';
import {Animated, Image, View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {AuthStyle} from './authStyle.style';
import {CustomButton, CustomInput, Text} from '../../components';
import {COLORS, ImagesPath} from '../../constant';
import {userLoginAction} from '../../redux';
import {useFocusEffect} from '@react-navigation/native';
const LoginScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();
  const dispatch = useDispatch();
  const {error, loading} = useSelector(state => state?.userLogin);
  const translateX = useRef(new Animated.Value(100)).current;
  const loginSubmit = data => {
    dispatch(userLoginAction(data));
  };
  useEffect(() => {
    return () => {
      reset();
      dispatch({type: 'CLEAR_ERROR'});
    };
  }, []);

  useFocusEffect(() => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  });
  return (
    <>
      <View style={AuthStyle.imageParent}>
        <View style={AuthStyle.imageBackground} />
        <Image source={ImagesPath.walkImage} style={AuthStyle.image} />
      </View>

      <Animated.View style={[{transform: [{translateX}]}, AuthStyle.text]}>
        <Text variant="displaySmall" fontWeight="bold" color={COLORS.white}>
          Welcome
        </Text>
        <Text variant="bodyLarge" color={COLORS.white}>
          Sign in to continue
        </Text>
      </Animated.View>
      <Animated.ScrollView style={{transform: [{translateX}]}}>
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
      </Animated.ScrollView>
    </>
  );
};

export default LoginScreen;
