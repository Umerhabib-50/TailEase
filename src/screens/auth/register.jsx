import React from 'react';
import {ScrollView, View} from 'react-native';
import {CustomButton, CustomInput, Text} from '../../components';
import {TouchableRipple} from 'react-native-paper';
import {AuthStyle} from './authStyle.style';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {userRegisterAction} from '../../redux';
export const RegisterScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state?.userRegister);
  const onSubmit = data => {
    dispatch(userRegisterAction(data, navigation));
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}>
      <View style={AuthStyle.container}>
        <View>
          <Text variant="displaySmall" fontWeight="bold">
            Welcome
          </Text>
          <Text variant="displaySmall" fontWeight="bold">
            user
          </Text>
          <Text variant="bodyLarge" style={{marginTop: '4%'}}>
            Sign up to join
          </Text>
          <CustomInput
            control={control}
            errors={errors}
            label="Name"
            name="name"
          />
          <CustomInput
            control={control}
            errors={errors}
            label="Password"
            name="password"
          />
          <CustomInput
            control={control}
            errors={errors}
            label="Phone"
            name="phoneNo"
          />
          <CustomButton
            title={loading ? 'loading...' : 'Sign Up'}
            style={{marginTop: '8%'}}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
        <View style={AuthStyle.bottom}>
          <Text>Don't have an account?</Text>
          <TouchableRipple onPress={() => navigation.navigate('login')}>
            <Text fontWeight="bold" variant="bodyMedium">
              Sign IN
            </Text>
          </TouchableRipple>
        </View>
      </View>
    </ScrollView>
  );
};
