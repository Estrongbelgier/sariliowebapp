export function viewConnectionRequest() {
  return {
    type: '@connection/VIEW_REQUEST',
  };
}

export function viewConnectionSucess(obj) {
  return {
    type: '@connection/VIEW_SUCESS',
    payload: obj,
  };
}

export function outraFuncaoParaOutraAction(params) {
  return true;
}
