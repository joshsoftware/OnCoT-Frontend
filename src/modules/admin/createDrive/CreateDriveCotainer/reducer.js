const initialProblemsState = {
  currentProblems: [],
};

export const reducer = (state = initialProblemsState, action) => {
  const { payload } = action;
  return ({ ...state, currentScreen: payload });
};

export default reducer;
