import { LANGUAGE } from 'constants/actionConstants';

const initialState = {
  languages: [],
  languageSelected: {},
  code: '// write your code',
};

const languageReducer = (action, state = initialState) => {
  switch (action.type) {
    case LANGUAGE.RESET_ACTION:
      return {
        languages: action.payload.languages,
        languageSelected: action.payload.languages[0],
      };
    case LANGUAGE.SET_LANGUAGE_SELECTED:
      return { ...state, languageSelected: action.payload.languageSelected };
    case LANGUAGE.SET_CODE:
      return { ...state, code: action.payload.code };
    default:
      return state;
  }
};

export default languageReducer;
