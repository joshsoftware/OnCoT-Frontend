export const initialHomeState = {
  currentScreen:'HOME',
};

export const adminHomeComponentReducer = (state = initialHomeState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case 'HOME':
      return ({ ...state, currentScreen: payload });

    case 'CREATE_DRIVE':
      return ({ ...state, currentScreen: payload });

    case 'PROBLEMS':
      return ({ ...state, currentScreen: payload });
    default:
      return state;
  }
};

export default adminHomeComponentReducer;
