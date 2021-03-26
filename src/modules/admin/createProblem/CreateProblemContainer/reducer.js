import produce from 'immer';

export const reducer = produce((state, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case 'title':
      state.title = payload;
      break;
    case 'description':
      state.description = payload;
      break;
    case 'submissionCount':
      state.submissionCount = payload;
      break;
    default: return state;
  }
});
