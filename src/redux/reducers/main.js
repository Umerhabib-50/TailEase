import {
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  WOUNDED_ANIMAL_FAIL,
  WOUNDED_ANIMAL_REQUEST,
  WOUNDED_ANIMAL_SUCCESS,
} from '../constants';

export const changePasswordReducer = (
  state = {name: 'changePasswordReducer'},
  action,
) => {
  switch (action.type) {
    case CHANGE_PASSWORD_REQUEST:
      return {loading: true};
    case CHANGE_PASSWORD_SUCCESS:
      return {loading: false, changePassword: action.payload};
    case CHANGE_PASSWORD_FAIL:
      return {loading: false, error: action.payload};
    // case 'CLEAR_ERROR':
    //   return {...state, error: ''};
    default:
      return state;
  }
};

export const woundedAnimalReducer = (state = {}, action) => {
  switch (action.type) {
    case WOUNDED_ANIMAL_REQUEST:
      return {loading: true};
    case WOUNDED_ANIMAL_SUCCESS:
      return {
        loading: false,
        woundedAnimal: {...action.payload, success: true},
      };
    case WOUNDED_ANIMAL_FAIL:
      return {loading: false, error: action.payload};
    // case 'CLEAR_ERROR':
    //   return {...state, error: ''};
    default:
      return state;
  }
};
