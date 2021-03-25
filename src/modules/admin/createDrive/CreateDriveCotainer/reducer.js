const initialProblemsState = {
  currentProblems: [],
};

export const reducer = (state = initialProblemsState, action) => {
  console.log('state', state);
  const { payload } = action;
  return ({ ...state, currentScreen: payload });
};

export default reducer;
