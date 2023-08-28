import {
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
} from '../actions';

export const changePasswordReducer = (state = {}, action) => {
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
