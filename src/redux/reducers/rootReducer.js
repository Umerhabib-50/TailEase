import {combineReducers} from 'redux';

import {userLoginReducer, userRegisterReducer} from '../reducers/auth';
import {changePasswordReducer} from './main';

export default combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  changePassword: changePasswordReducer,
});
