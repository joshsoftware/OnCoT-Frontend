import { USER } from "constants/actionConstants";

export const setUserProfileDetails = (value) => {
  return {
    type: USER.SET_DETAILS,
    value,
  };
};
