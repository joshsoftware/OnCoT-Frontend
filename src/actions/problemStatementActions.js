import getStatement from "apis/problemStatementAPI";
import { PROBLEM_STATEMENT_REDUCER } from "../constants/actionConstants";

export const statementRequest = () => {
    return {
        type: PROBLEM_STATEMENT_REDUCER.STATEMENT_REQUEST,
        payload: getStatement()
    }
}

const statementAction = (data) => {
    return {
        type: PROBLEM_STATEMENT_REDUCER.SET_STATEMENT, 
        payload: {statement: data}
    }
}
export default statementAction;
