import axios from 'axios';
import {
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
} from '../constants';
import {SERVER_IP} from '../../config';

export const changePasswordAction = changePasswordObj => async dispatch => {
  try {
    dispatch({
      type: CHANGE_PASSWORD_REQUEST,
    });
    const {data} = await axios.put(
      `${SERVER_IP}/user/change-password`,
      changePasswordObj,
    );
    console.log('data from backend', data);
    //   data?.message && navigation.navigate('login');
    // dispatch({
    //   type: CHANGE_PASSWORD_SUCCESS,
    //   payload: data,
    // });
  } catch (error) {
    dispatch({
      type: CHANGE_PASSWORD_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
