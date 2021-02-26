import userDriveReducer, { initialState } from "reducers/userDriveReducer";
import {
  setUserDriveDetails,
  showErrorMessage,
  setDriveLoading,
} from "actions/userDriveActions";

describe("user drive reducer", () => {
  it("return default state", () => {
    expect(userDriveReducer(initialState, {})).toEqual(initialState);
  });

  it("set details", () => {
    const userObj = {
      id: "1",
      name: "kkwieer drive",
      startTime: "2021-02-22T06:40:45Z",
      endTime: "2021-02-22T08:40:45Z",
    };
    expect(
      userDriveReducer(initialState, setUserDriveDetails(userObj))
    ).toEqual({ ...initialState, ...userObj, isLoading: false });
  });

  it("set error message", () => {
    const errMsg = "something went wrong";
    expect(userDriveReducer(initialState, showErrorMessage(errMsg))).toEqual({
      ...initialState,
      isError: true,
      errorMessage: errMsg,
      isLoading: false,
    });
  });

  it("set drive loading", () => {
    expect(userDriveReducer(initialState, setDriveLoading(true))).toEqual({
      ...initialState,
      isLoading: true,
    });
  });
});
