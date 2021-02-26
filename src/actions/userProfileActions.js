import { USER } from "constants/actionConstants";

export const setUserProfileDetails = (payload) => ({
  type: USER.SET_DETAILS,
  payload,
});
