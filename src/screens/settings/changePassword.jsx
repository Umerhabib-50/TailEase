import React, {useEffect} from 'react';
import {View} from 'react-native';
import {CustomButton, CustomInput, Text} from '../../components';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {changePasswordAction} from '../../redux';
import LottieView from 'lottie-react-native';
const ChangePassword = ({navigation}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();
  // const {_id: userId} = GetUserId();
  const dispatch = useDispatch();
  // const userId = useSelector(state => state?.userLogin?.userLogin?.User?._id);
  const userId = useSelector(state => state?.userLogin?.userLogin?.User?._id);
  // const passwordData = useSelector(state => state?.changePassword);
  console.log(
    'password Change ',
    useSelector(state => state?.changePassword),
  );
  const changePasswordSubmit = data => {
    let obj = {
      ...data,
      userId,
    };
    dispatch(changePasswordAction(obj, navigation));
  };
  // useEffect(() => {
  //   return () => {
  //     reset();
  //     dispatch({type: 'CLEAR_ERROR'});
  //   };
  // }, []);
  // dispatch({type: 'CLEAR_ERROR'});
  return (
    <View style={{flex: 1}}>
      {/* <LottieView
        style={{height: 300, width: 300}}
        source={require('../../assets/wellcome.json')}
        autoPlay
      /> */}
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
        <CustomButton
          style={{marginTop: '3%'}}
          title={'Change Password'}
          onPress={handleSubmit(changePasswordSubmit)}
        />
      </View>
    </View>
  );
};
export default ChangePassword;
