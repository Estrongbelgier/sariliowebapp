import { all } from 'redux-saga/effects';

import conn from './connection/sagas';

export default function* rootSaga() {
  return yield all([conn]);
}
