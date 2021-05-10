import produce from 'immer';

export const reducer = produce((state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'title':
      state.title = payload;
      break;
    case 'description':
      state.description = payload;
      break;
    case 'submissionCount':
      state.submissionCount = payload;
      break;
    case 'timeInMinutes':
      state.timeInMinutes = payload;
      break;
    case 'problem':
      state.title = payload.title;
      state.description = payload.description;
      state.submissionCount = payload.submissionCount;
      state.timeInMinutes = payload.timeInMinutes;
      break;
    default: return state;
  }
});
