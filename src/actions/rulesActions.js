import getRules from "apis/rulesAPI";
import RULES_REDUCER from "../constants/actionConstants";

export const rulesRequest = () => {
    return {
        type: RULES_REDUCER.RULES_REQUEST,
        payload: getRules()
    }
}

const rulesAction = (data) => {
    return {
        type: RULES_REDUCER.SET_RULES, 
        payload: {userlist: data}
    }
}
export default rulesAction;

