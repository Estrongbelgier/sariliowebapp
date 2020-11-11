import { combineReducers } from 'redux';

import conn from './connection/reducer';
import auth from './auth/reducer';
import user from './user/reducer';

export default combineReducers({
  conn,
  auth,
  user,
});
// REDUX - sagas Novo reducer eu coloco aqui
