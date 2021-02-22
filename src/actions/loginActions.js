// export const temp = (data) => {
//   return {
//     type: ACTION_REDUCER.SOMEACTIONS,
//     payload: data,
//   };
// };

import getRules from "apis/rulesAPI";
import RULES_REDUCER from "../constants/actionConstants";

const rulesAction = (data) => {
    return {
        type: RULES_REDUCER.SET_RULES, 
        payload: {userlist: data}
    }
}
export default rulesAction;

export const rulesRequest = () => {
    return {
        type: RULES_REDUCER.RULES_REQUEST,
        payload: getRules()
    }
}