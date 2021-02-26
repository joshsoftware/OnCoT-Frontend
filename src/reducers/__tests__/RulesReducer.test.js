import RulesReducer,{ initialState } from "../RulesReducer";
import rulesAction, { rulesRequestFailed } from "actions/rulesAction";

describe("Rules Reducer", () => {
    it("Return Default State", () => {
        expect(RulesReducer(initialState,{})).toEqual(initialState)
    })
    it("Set Rules", () => {
        const userlist = { "data" :"Lorem ipsum dolor sit amet"};
        expect(RulesReducer(initialState,rulesAction(userlist))).toEqual({...initialState, userlist})
    })
    it("Request Failed", () => {
        const requestError = "request failed";
        expect(RulesReducer(initialState,rulesRequestFailed(requestError))).toEqual({...initialState,requestError})
    })
})