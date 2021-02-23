import { DRIVE } from "constants/actionConstants";

const initialState = {
  id: "",
  name: "",
  startTime: "",
  endTime: "",
  error: false,
  errorMessage: "",
  loading: false,
};

const userDriveReducer = (state = initialState, action) => {
  const { type, value } = action;
  switch (type) {
    case DRIVE.SET_DETAILS:
      const { id, name, startTime, endTime } = value;
      return {
        ...state,
        id,
        name,
        startTime,
        endTime,
      };

    case DRIVE.SET_ERROR_MESSAGE:
      return {
        ...state,
        ...value,
      };

    case DRIVE.SET_LOADING:
      return {
        ...state,
        loading: value.loading,
      };

    default:
      return state;
  }
};

export default userDriveReducer;
