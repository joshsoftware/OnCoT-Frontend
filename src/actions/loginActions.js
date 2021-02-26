import getRules from "apis/rulesAPI";
import RULES_REDUCER from "../constants/actionConstants";

export const rulesRequest = () => {
    return {
        type: RULES_REDUCER.RULES_REQUEST,
        payload: getRules()
    }
}
export const rulesRequestFailed = (data) => {
    return {
        type: RULES_REDUCER.RULES_REQUEST_FAILED,
        payload: {requestError: data}
    }
}
const rulesAction = (data) => {
    return {
        type: RULES_REDUCER.SET_RULES, 
        payload: {userlist: data}
    }
}
export default rulesAction;

