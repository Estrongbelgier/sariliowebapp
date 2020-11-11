export function singInRequest(email, senha) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, senha },
  };
}

export function signInSuccess(token, usuario) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, usuario },
  };
}

export function signUpRequest(email, senha) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { email, senha },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

// REDUX - auth: actions
