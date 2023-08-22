import React from 'react';
import {Image, Keyboard, View} from 'react-native';
import {CustomButton, CustomInput, Text} from '../../components';
import {ImagesPath} from '../../constant';
import {TextInput, TouchableRipple} from 'react-native-paper';
import {AuthStyle} from './authStyle.style';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {userLoginAction} from '../../redux';
export const LoginScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const dispatch = useDispatch();
  const {error, loading} = useSelector(state => state?.userLogin);

  const loginSubmit = data => {
    Keyboard.dismiss();
    dispatch(userLoginAction(data, navigation));
  };
  return (
    <View style={AuthStyle.container}>
      <View>
        <Text variant="displaySmall" fontWeight="bold">
          Welcome
        </Text>
        <Text variant="displaySmall" fontWeight="bold">
          back
        </Text>
        <Text variant="bodyLarge" style={{marginTop: '4%'}}>
          Sign in to continue
        </Text>
        <CustomInput
          control={control}
          errors={errors}
          label="Phone"
          name="phoneNo"
        />
        <CustomInput
          control={control}
          errors={errors}
          label="Password"
          name="password"
        />

        <View style={AuthStyle.forgot}>
          <View style={AuthStyle.check}>
            <Image
              source={ImagesPath.checkImage}
              style={{width: 15, height: 15, marginTop: '3%'}}
            />
            <Text style={{marginLeft: '3%'}}>Remember me</Text>
          </View>
          <TouchableRipple onPress={() => navigation.navigate('forgot')}>
            <Text>Forgot password?</Text>
          </TouchableRipple>
        </View>
        <CustomButton
          title="Sign In"
          style={{marginTop: '8%'}}
          onPress={handleSubmit(loginSubmit)}
        />
      </View>
      <View style={AuthStyle.bottom}>
        <Text>Don't have an account?</Text>
        <TouchableRipple onPress={() => navigation.navigate('register')}>
          <Text fontWeight="bold" variant="bodyMedium">
            Sign Up
          </Text>
        </TouchableRipple>
      </View>
    </View>
  );
};
