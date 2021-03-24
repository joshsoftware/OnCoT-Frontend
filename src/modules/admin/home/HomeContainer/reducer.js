const initialHomeState = {
  currentScreen:'CREATE_DRIVE',
};

export const reducer = (state = initialHomeState, action) => {
  const { payload } = action;
  return ({ ...state, currentScreen: payload });
};

export default reducer;
