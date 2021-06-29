export const initialState =
{
  data: {
    drive: {
      id: '',
      name: '',
      description: '',
      start_time: '',
      end_time: '',
      created_by_id: '',
      updated_by_id: '',
      organization_id: '',
      is_assessment: false,
    },
  },
  message: '',
  currentProblems: '',
  problemLoading: true,
};

const reducer = (state = initialState, action = {}) => {
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
    case 'problem':
      state.currentProblems = payload;
      break;
    case 'is_assessment':
      state.data.drive.is_assessment = payload;
      break;
    case 'drive':
      state.data.drive.name = payload.name;
      state.data.drive.description = payload.description;
      state.data.drive.start_time = payload.start_time;
      state.data.drive.end_time = payload.end_time;
      state.currentProblems = payload.problem;
      state.data.drive.is_assessment = payload.is_assessment;
      break;
    default:
      return state;
  }
  return state;
};

export default reducer;
