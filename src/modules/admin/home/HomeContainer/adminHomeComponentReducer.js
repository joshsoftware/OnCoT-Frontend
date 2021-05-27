import produce from 'immer';
import local from 'utils/local';

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
        local.setItem('editDriveId', payload.id);
        break;

      case 'EDIT_PROBLEM':
        state.currentScreen = payload.currentScreen;
        state.id = payload.id;
        local.setItem('editProblemId', payload.id);
        break;

      case 'DRIVE_RESULT':
        state.currentScreen = payload.currentScreen;
        state.id = payload.id;
        local.setItem('driveResultId', payload.id);
        break;

      case 'SHOW_CANDIDATES':
        state.currentScreen = payload.currentScreen;
        state.id = payload.id;
        local.setItem('showCandidatesId', payload.id);
        break;

      case 'INVITE_CANDIDATES':
        state.currentScreen = payload.currentScreen;
        state.id = payload.id;
        local.setItem('inviteCandidatesId', payload.id);
        break;

      case 'CREATE_PROBLEM':
        state.currentScreen = payload;
        break;

      case 'PROBLEMS':
        state.currentScreen = payload;
        break;

      case 'PROBLEM_DETAILS':
        state.currentScreen = payload.currentScreen;
        state.id = payload.id;
        local.setItem('problemDetailId', payload.id);
        break;

      case 'DEFAULT_RULES':
        state.currentScreen = payload;
        break;

      case 'USER_PROFILE':
        state.currentScreen = payload;
        break;

      case 'INVITE_USER':
        state.currentScreen = payload;
        break;

      default:
        return state;
    }
  },
);

export default adminHomeComponentReducer;
