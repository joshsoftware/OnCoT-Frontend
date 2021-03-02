import { RULES } from "constants/actionConstants";

export const rulesRequest = () => ({type: RULES.DETAIL_REQUEST});

export const rulesRequestFailed = (requestError) => {
    return {
        type: RULES.SET_ERROR_MESSAGE,
        payload: {requestError: requestError}
    }
}

export const rulesAction = (userlist) => {
    return {
        type: RULES.SET_DETAILS, 
        payload: {userlist: userlist}
    }
}
