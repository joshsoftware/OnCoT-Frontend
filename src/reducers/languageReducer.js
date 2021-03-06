import { LANGUAGE } from 'constants/actionConstants';

const initialState = {
  languages: [],
  languageSelected: {},
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGE.RESET_ACTION:
      return {
        languages: action.payload.languages,
        languageSelected: action.payload.languages[0],
      };
    case LANGUAGE.SET_LANGUAGE_SELECTED:
      return { ...state, languageSelected: action.payload.languageSelected };
    default:
      return state;
  }
};

export default languageReducer;
