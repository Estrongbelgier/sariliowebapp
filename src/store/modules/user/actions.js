export function getUsuarioInformationRequest() {
  return {
    type: '@user/GET_USER_INFORMATION',
  };
}

export function getUsuarioInformationSucess(data) {
  return {
    type: '@user/GET_USER_INFORMATION_SUCCESS',
    payload: { data },
  };
}

export function getUsuarioInformationFailure() {
  return {
    type: '@user/GET_USER_INFORMATION_FAILURE',
  };
}

export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}

// REDUX - user - action
