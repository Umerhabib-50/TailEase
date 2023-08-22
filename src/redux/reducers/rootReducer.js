import {combineReducers} from 'redux';

import {userLoginReducer, userRegisterReducer} from '../reducers/auth';

export default combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
});
