import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {AuthStyle} from './authStyle.style';
import {CustomButton, CustomInput, Text} from '../../components';
import {ImagesPath} from '../../constant';
import {userLoginAction} from '../../redux';

const LoginScreen = ({navigation}) => {
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
      reset();
      dispatch({type: 'CLEAR_ERROR'});
    };
  }, []);
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
          title={loading ? 'loading...' : 'Sign In'}
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

export default LoginScreen;
