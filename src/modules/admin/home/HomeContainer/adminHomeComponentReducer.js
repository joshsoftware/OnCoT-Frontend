export const initialHomeState = {
  currentScreen: 'HOME',
  id: '',
};

export const adminHomeComponentReducer = (
  state = initialHomeState,
  action = {},
) => {
  console.log('homecomponentreducer', state);
  const { type, payload } = action;
  switch (type) {
    case 'HOME':
      return { ...state, currentScreen: payload };

    case 'CREATE_DRIVE':
      return { ...state, currentScreen: payload };

    case 'EDIT_DRIVE':
      return { ...state, currentScreen: payload.currentScreen, id: payload.id };

    case 'INVITE_CANDIDATES':
      return { ...state, currentScreen: payload.currentScreen, id: payload.id };

    case 'PROBLEMS':
      return { ...state, currentScreen: payload };
    default:
      return state;
  }
};

export default adminHomeComponentReducer;
