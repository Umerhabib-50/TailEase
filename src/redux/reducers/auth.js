import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants';

// USER REGISTER REDUCER
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {loading: true};
    case USER_REGISTER_SUCCESS:
      return {loading: false, userRegister: action.payload};
    case USER_REGISTER_FAIL:
      return {loading: false, error: action.payload};
    case 'CLEAR_ERROR':
      return {};
    default:
      return state;
  }
};
// USER LOGIN REDUCER

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {loading: true};
    case USER_LOGIN_SUCCESS:
      return {loading: false, userLogin: action.payload};
    case USER_LOGIN_FAIL:
      return {loading: false, error: action.payload};
    case 'CLEAR_ERROR':
      return {...state, error: ''};
    default:
      return state;
  }
};
