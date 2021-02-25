import getStatement from "apis/problemStatementAPI";
import { PROBLEM_STATEMENT_REDUCER } from "../constants/actionConstants";

export const statementRequest = () => {
    return {
        type: PROBLEM_STATEMENT_REDUCER.STATEMENT_REQUEST,
        payload: getStatement()
    }
}

export const statementActionFailed = (data) => {
    return {
        type: PROBLEM_STATEMENT_REDUCER.STATEMENT_REQUEST_FAILED, 
        payload: {requestError: data}
    }
}

const statementAction = (data) => {
    return {
        type: PROBLEM_STATEMENT_REDUCER.SET_STATEMENT, 
        payload: {statement: data}
    }
}
export default statementAction;
