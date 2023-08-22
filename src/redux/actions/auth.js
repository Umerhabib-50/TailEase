import axios from 'axios';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants';
//USER REGISTER
export const userRegisterAction =
  (register_data, navigation) => async dispatch => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
      const {data} = await axios.post(
        `http://192.168.1.215:5000/user/register`,
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
export const userLoginAction = (loginData, navigation) => async dispatch => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const {data} = await axios.post(
      `http://192.168.1.215:5000/user/login`,
      loginData,
    );
    // data?.loginData && navigation.navigate('home');
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
