const INITIAL_STATE = {
  connectionStatus: false,
};

export default function conn(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@connection/VIEW_SUCESS':
      return action.payload;
    default:
      return state;
  }
}
