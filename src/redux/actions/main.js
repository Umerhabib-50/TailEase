import axios from 'axios';

import {SERVER_IP} from '../../config';
import {
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
} from '../constants';

export const changePasswordAction =
  (changePasswordObj, navigation) => async dispatch => {
    try {
      dispatch({
        type: CHANGE_PASSWORD_REQUEST,
      });
      const {data} = await axios.post(
        `${SERVER_IP}/user/change-password`,
        changePasswordObj,
      );
      // navigation.navigate('homeScreen');

      dispatch({
        type: CHANGE_PASSWORD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CHANGE_PASSWORD_FAIL,
        payload: error?.response && error?.response?.data,
      });
    }
  };
