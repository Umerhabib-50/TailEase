import axios from 'axios';

import {SERVER_IP} from '../../config';
import {
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  DELETE_POST_REQUEST,
  WOUNDED_ANIMAL_FAIL,
  WOUNDED_ANIMAL_REQUEST,
  WOUNDED_ANIMAL_SUCCESS,
} from '../constants';
//CHANGE PASSWORD
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
// SEND POST
export const woundedAnimalAction =
  (animalData, id, navigation) => async dispatch => {
    try {
      dispatch({
        type: WOUNDED_ANIMAL_REQUEST,
      });
      const {data} = await axios.post(
        `${SERVER_IP}/WoundedAnimals/Post/${id}`,
        animalData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      navigation.navigate('home');
      dispatch({
        type: WOUNDED_ANIMAL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: WOUNDED_ANIMAL_FAIL,
        payload: error?.response && error?.response?.data,
      });
    }
  };
//    DELETE POST

export const deletePostAction = () => async dispatch => {
  try {
    dispatch({
      type: DELETE_POST_REQUEST,
    });
    const {data} = await axios.delete(`${SERVER_IP}/`);
  } catch (error) {}
};
