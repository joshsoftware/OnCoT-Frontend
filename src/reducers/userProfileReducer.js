import { USER } from "constants/actionConstants";

const initialState = {
  id: "",
  firstname: "",
  lastname: "",
  email: "",
  authToken: "",
};

const userProfileReducer = (state = initialState, action) => {
  const { type, value } = action;
  switch (type) {
    case USER.SET_DETAILS:
      const { authToken, ...userData } = value;
      return {
        ...state,
        ...userData,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
