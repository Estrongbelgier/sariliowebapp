import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, senha } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      senha,
    });

    const { token, usuario } = response.data;

    if (!usuario) {
      toast.error('Não tem cadastro?');
      return;
    }

    yield put(signInSuccess(token, usuario));

    history.push('/app');

    toast.success('Seja bem vindo!', {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  } catch (err) {
    yield put(signFailure());
    toast.error('Problema na autenticação !');
  }
}

export function* singUp({ payload }) {
  try {
    const { email, senha } = payload;
    const res = yield call(api.post, 'usuario', {
      email,
      senha,
    });
    const { message } = res;
    history.push('/login');
    toast.success(message);
  } catch (err) {
    toast.error('Please put all information needed.');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function singOut() {
  window.localStorage.clear();
  history.push('/');
  window.location.reload();
  toast.success('LOGADO OUT!!');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', singUp),
  takeLatest('@auth/SIGN_OUT', singOut),
]);
// REDUX auth sagas
