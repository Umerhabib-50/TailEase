import React, {useEffect} from 'react';
import {View, Alert} from 'react-native';
import {CustomButton, CustomInput, Text} from '../../components';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {changePasswordAction} from '../../redux';

const ChangePassword = ({navigation}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();
  // const {_id: userId} = GetUserId();
  const dispatch = useDispatch();
  const userId = useSelector(state => state?.userLogin?.userLogin?.User?._id);
  const {error, loading, success, changePassword} = useSelector(
    state => state?.changePassword,
  );
  const changePasswordSubmit = data => {
    let obj = {
      ...data,
      userId,
    };
    dispatch(changePasswordAction(obj, navigation));
    reset();
  };
  const showAlert = () => {
    Alert.alert(
      'Change Pawword',
      changePassword?.message,
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('homeScreen'),
        },
      ],
      {cancelable: false},
    );
  };
  useEffect(() => {
    return () => {
      reset();
      dispatch({type: 'CLEAR_ERROR'});
    };
  }, []);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text variant="titleLarge" fontWeight="900">
          Change Password
        </Text>
      </View>
      <View
        style={{
          borderBottomWidth: 0.5,
          borderBottomColor: 'black',
          paddingVertical: 5,
        }}
      />
      <View style={{padding: '7%'}}>
        <CustomInput
          password
          control={control}
          errors={errors}
          label="Write Old Password"
          name="currentPassword"
          keyboardType={'numeric'}
        />
        <CustomInput
          password
          control={control}
          errors={errors}
          label="Write New Password"
          name="newPassword"
          keyboardType={'numeric'}
        />
        {error && <Text color="red">{error?.message}</Text>}
        <CustomButton
          style={{marginTop: '3%'}}
          title={loading ? 'Loading...' : 'Change Password'}
          onPress={handleSubmit(changePasswordSubmit)}
        />
        {success == true && showAlert()}
      </View>
    </View>
  );
};
export default ChangePassword;
