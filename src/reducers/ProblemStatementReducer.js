import { PROBLEM_STATEMENT_REDUCER } from "../constants/actionConstants";

export const initialState = {
    statement : {},
    requestError : ""
}

const ProblemStatementReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case PROBLEM_STATEMENT_REDUCER.SET_STATEMENT:
            return {...state, statement: payload.statement}
        case PROBLEM_STATEMENT_REDUCER.STATEMENT_REQUEST_FAILED:
            return {...state,requestError:payload.requestError}
        default:
            return state;
    }
}

export default ProblemStatementReducer;