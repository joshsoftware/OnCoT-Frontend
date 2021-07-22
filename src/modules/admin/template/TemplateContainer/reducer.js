import produce from 'immer';

export const reducer = produce((state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'templates':
      state.templates = [...payload];
      break;
    case 'language':
      state.language = payload.language;
      state.languageId = payload.language_id;
      break;
    case 'updateTemplate':
      state.templates[payload.index].code = payload.code;
      state.templates[payload.index].language = payload.language;
      state.templates[payload.index].languageId = payload.languageId;
      break;
    case 'updateTemplateCode':
      state.templates[payload.index].code = payload.code;
      break;
    default: return state;
  }
});
