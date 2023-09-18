import {combineReducers} from 'redux';

import {userLoginReducer, userRegisterReducer} from '../reducers/auth';
import {
  changePasswordReducer,
  deletePostReducer,
  woundedAnimalReducer,
} from './main';

export default combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  changePassword: changePasswordReducer,
  woundedAnimal: woundedAnimalReducer,
  deletePost: deletePostReducer,
});
