import { LANGUAGE } from 'constants/actionConstants';
import local from 'utils/local';

const initialState = {
  languages: [],
  languageSelected: {},
  code: '# Write your code here (Accept input from stdin using gets and print output using puts)',
  problemId: parseInt(local.getItem('problemId'), 10) || '',
  languageCode: null,
};

const languageReducer = (state = initialState, action = {}) => {
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
