import { DRIVE } from "constants/actionConstants";

export const initialState = {
  id: "",
  name: "",
  startTime: "",
  endTime: "",
  error: false,
  errorMessage: "",
  loading: false,
};

const userDriveReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRIVE.SET_DETAILS:
      return { ...state, ...action.payload };

    case DRIVE.SET_ERROR_MESSAGE:
      return { ...state, ...action.payload };

    case DRIVE.SET_LOADING:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default userDriveReducer;
