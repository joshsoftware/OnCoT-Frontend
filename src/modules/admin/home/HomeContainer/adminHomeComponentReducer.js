import produce from 'immer';
import local from 'utils/local';

export const initialHomeState = {
  currentScreen: 'HOME',
  id: '',
};

export const adminHomeComponentReducer = produce(
  (state = initialHomeState, action = {}) => {
    console.log(state);
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
        local.setItem('editDriveId', payload.id);
        break;
      case 'DRIVE_RESULT':
        state.currentScreen = payload.currentScreen;
        state.id = payload.id;
        local.setItem('driveResultId', payload.id);
        break;

      case 'INVITE_CANDIDATES':
        state.currentScreen = payload.currentScreen;
        state.id = payload.id;
        local.setItem('inviteCandidatesId', payload.id);
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
