import produce from 'immer';

export const initialHomeState = {
  currentScreen: 'HOME',
  id: '',
};

export const adminHomeComponentReducer = produce(
  (state = initialHomeState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
      case 'HOME':
        state.currentScreen = payload;
        break;

      case 'CREATE_DRIVE':
        state.currentScreen = payload;
        break;

      case 'EDIT_DRIVE':
        state.currentScreen = payload.currentScreen;
        state.id = payload.id;
        break;

      case 'INVITE_CANDIDATES':
        state.currentScreen = payload.currentScreen;
        state.id = payload.id;
        break;

      case 'PROBLEMS':
        state.currentScreen = payload;
        break;
      default:
        return state;
    }
  },
);

export default adminHomeComponentReducer;
