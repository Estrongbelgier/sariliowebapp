import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '~/services/api';

import { viewConnectionSucess } from './actions';

function* getConnectionStatus(action) {
  const response = yield call(api.get, '/');

  yield put(viewConnectionSucess(response));
}

export default all([
  takeLatest('@connection/VIEW_REQUEST', getConnectionStatus),
]);
