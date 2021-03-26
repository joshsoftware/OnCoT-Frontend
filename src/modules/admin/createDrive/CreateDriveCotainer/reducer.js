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
    },
  },
  message: '',
  currentProblems: [],
  problemLoading: true,
};

export const reducer = (state = initialState, action) => {
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
      state.currentProblems.push(payload);
      break;
    default:
      return state;
  }
  return state;
};

export default reducer;
