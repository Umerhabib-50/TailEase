import axios from 'axios';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants';
import {SERVER_IP} from '../../config';
//USER REGISTER
export const userRegisterAction =
  (register_data, navigation) => async dispatch => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
      const {data} = await axios.post(
        `${SERVER_IP}/user/register`,
        register_data,
      );
      data?.message && navigation.navigate('login');
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error?.response && error?.response?.data,
      });
    }
  };
//USER LOGIN
export const userLoginAction = loginData => async dispatch => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const {data} = await axios.post(`${SERVER_IP}/user/login`, loginData);
    // data?.message && navigation.navigate('mainStack', {screen: 'home'});
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
