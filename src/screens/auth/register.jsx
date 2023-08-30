import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
// import {CustomButton, CustomInput, Text} from '../../components';
import {TouchableRipple} from 'react-native-paper';
// import {AuthStyle} from './authStyle.style';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {AuthStyle} from './authStyle.style';
import {CustomButton, CustomInput, Text} from '../../components';
import {userRegisterAction} from '../../redux';
import {Image} from 'react-native';
import {COLORS, ImagesPath} from '../../constant';
import authStyles from '../../components/auth/auth-styles';
const RegisterScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state?.userRegister);

  const onSubmit = data => {
    dispatch(userRegisterAction(data, navigation));
  };
  useEffect(() => {
    return () => {
      reset();
      console.log('register cleared');
      dispatch({type: 'CLEAR_ERROR'});
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
          Sign up to join
        </Text>
      </View>
      <ScrollView>
        <View style={AuthStyle.container}>
          <View style={{paddingHorizontal: '7%'}}>
            {/* <Text variant="displaySmall" fontWeight="bold">
            Welcome
          </Text>
          <Text variant="displaySmall" fontWeight="bold">
            user
          </Text>
          <Text variant="bodyLarge" style={{marginTop: '4%'}}>
            Sign up to join
          </Text> */}
            <CustomInput
              control={control}
              errors={errors}
              label="Name"
              name="name"
            />
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
                {error.error}
              </Text>
            )}
            <CustomButton
              title={loading ? 'loading...' : 'Sign Up'}
              style={{marginTop: '8%'}}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
          <View style={AuthStyle.bottom}>
            {/* <Text>Have an account?</Text> */}
            <TouchableRipple onPress={() => navigation.navigate('login')}>
              <Text
                fontWeight="bold"
                variant="bodyMedium"
                color={COLORS.purple}>
                Sign IN
              </Text>
            </TouchableRipple>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default RegisterScreen;
