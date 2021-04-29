import produce from 'immer';

const initialState = {
  isUnauthorized: true,
};

const unauthorizedUserReducer = produce((state = initialState, action = {}) => {
  console.log('in state', state);
  const { type, payload } = action;
  switch (type) {
    case 'setUnauthorized':
      state.isUnauthorized = payload;
      break;
    case 'clearUnauthorized':
      state.isUnauthorized = payload;
      break;
    default:
      return state;
  }
});

export default unauthorizedUserReducer;
