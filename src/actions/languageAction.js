import { LANGUAGE } from 'constants/actionConstants';

export const fetchLanguages = () => ({
  type: LANGUAGE.FETCH_ACTION,
});

export const setLanguages = (languages) => ({
  type: LANGUAGE.RESET_ACTION,
  payload: { languages },
});

export const setLanguageSelected = (languageSelected) => ({
  type: LANGUAGE.SET_LANGUAGE_SELECTED,
  payload: {
    languageSelected,
  },
});

export const setCode = (code) => ({
  type: LANGUAGE.SET_CODE,
  payload: { code },
});
