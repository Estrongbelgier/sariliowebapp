import { all } from 'redux-saga/effects';

import conn from './connection/sagas';
import auth from './auth/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  return yield all([conn, auth, user]);
}

// REDUX modulos de sagas
