import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  updateProfileSuccess,
  updateProfileFailure,
  getUsuarioInformationSucess,
  getUsuarioInformationFailure,
} from './actions';

export function* getUsuario() {
  try {
    const { data } = yield call(api.get, 'usuario');

    yield put(getUsuarioInformationSucess(data));
  } catch (error) {
    toast.error('Algo deu errado, talvez a ondas se perderam no espaço!');
    console.tron.log(error);
    yield put(getUsuarioInformationFailure());
  }
}

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,

      ...(rest.oldPassword ? rest : {}),
    };

    /* const response = yield call(api.put, 'users', profile); */

    toast.success('Success', {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    /* yield put(updateProfileSuccess(response.data)); */
  } catch (err) {
    toast.error('Error to update your profile', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/GET_USER_INFORMATION', getUsuario),
]);
// REDUX user sagas
