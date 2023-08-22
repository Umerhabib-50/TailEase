import React from 'react';
import {View} from 'react-native';
import {CustomInput, Text} from '../../components';
import {useForm} from 'react-hook-form';
import {Button} from 'react-native-paper';

export const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    // console.log('onsubmit data', data);
  };

  console.log('errors', errors);
  return (
    <View>
      <Text>LoginScreen</Text>
      <CustomInput
        control={control}
        errors={errors}
        label="Phone"
        name="phone"
        keyboardType="numeric"
      />

      <CustomInput
        password
        control={control}
        errors={errors}
        label="password"
        name="password"
      />
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Press me
      </Button>
    </View>
  );
};
