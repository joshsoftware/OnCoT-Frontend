import { USER } from "constants/actionConstants";

export const initialState = {
  id: "",
  firstname: "",
  lastname: "",
  email: "",
  authToken: localStorage.getItem("authToken") || "",
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER.SET_DETAILS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userProfileReducer;
