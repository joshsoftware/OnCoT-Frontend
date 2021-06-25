import produce from 'immer';

export const reducer = produce((state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'name':
      state.data.drive.name = payload;
      break;
    case 'description':
      state.data.drive.description = payload;
      break;
    case 'start_time':
      state.data.drive.start_time = payload;
      break;
    case 'end_time':
      state.data.drive.end_time = payload;
      break;
    case 'is_assessment':
      state.data.drive.is_assessment = payload;
      break;
    case 'problem':
      state.currentProblems = payload;
      break;
    case 'nameErrTxt':
      state.nameErrTxt = payload;
      break;
    case 'descriptionErrTxt':
      state.descriptionErrTxt = payload;
      break;
    case 'start_timeErrTxt':
      state.startTimeErrTxt = payload;
      break;
    case 'end_timeErrTxt':
      state.endTimeErrTxt = payload;
      break;
    case 'problemErrTxt':
      state.problemErrTxt = payload;
      break;
    case 'resetDriveData':
      state.problemErrTxt = '';
      state.data.drive.name = '';
      state.data.drive.description = '';
      state.data.drive.start_time = '';
      state.data.drive.end_time = '';
      state.currentProblems = '';
      state.nameErrTxt = '';
      state.descriptionErrTxt = '';
      state.startTimeErrTxt = '';
      state.endTimeErrTxt = '';
      break;
    case 'drive':
      state.data.drive.name = payload.name;
      state.data.drive.description = payload.description;
      state.data.drive.start_time = payload.start_time;
      state.data.drive.end_time = payload.end_time;
      state.currentProblems = payload.problem;
      break;
    default:
      return state;
  }
  return state;
});
