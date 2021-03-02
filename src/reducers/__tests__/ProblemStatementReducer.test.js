import { statementAction, statementActionFailed } from "actions/problemStatementActions";
import ProblemStatementReducer, { initialState } from "reducers/ProblemStatementReducer";

describe("Problem Statement Reducer", () => {
    it("Return Default State", () => {
        expect(ProblemStatementReducer(initialState,{})).toEqual(initialState);
    })
    it("Set Problem Statement", () => {
        const statement = { "data" :"Lorem ipsum dolor sit amet"};
        expect(ProblemStatementReducer(initialState,statementAction(statement))).toEqual({...initialState, statement})
    })
    it("Request Failed", () => {
        const requestError = "request failed";
        expect(ProblemStatementReducer(initialState,statementActionFailed(requestError))).toEqual({...initialState,requestError})
    })
})