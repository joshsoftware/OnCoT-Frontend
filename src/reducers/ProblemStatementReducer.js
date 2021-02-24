import { PROBLEM_STATEMENT_REDUCER } from "../constants/actionConstants";

let initialState = {
    statement : {}
}

const ProblemStatementReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case PROBLEM_STATEMENT_REDUCER.SET_STATEMENT:
            return {...state, statement: payload.statement}
        default:
            return state;
    }
}

export default ProblemStatementReducer;