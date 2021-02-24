import userProfileReducer, { initialState } from "reducers/userProfileReducer";
import { setUserProfileDetails } from "actions/userProfileActions";

describe("user profile reducer", () => {
  it("return default state", () => {
    expect(userProfileReducer(initialState, {})).toEqual({ ...initialState });
  });

  it("set details", () => {
    const userDetails = {
      id: "1",
      firstname: "vaibhav",
      lastname: "chalse",
      email: "v@gmail.com",
    };
    expect(
      userProfileReducer(initialState, setUserProfileDetails(userDetails))
    ).toEqual({ ...initialState, ...userDetails });
  });
});
