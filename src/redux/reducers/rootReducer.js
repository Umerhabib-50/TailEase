import {combineReducers} from 'redux';

import {userLoginReducer} from '../reducers/auth';

export default combineReducers({
  userLogin: userLoginReducer,
});
