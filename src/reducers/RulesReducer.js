import RULES_REDUCER from "../constants/actionConstants";

export const initialState = {
    userlist : {},
    requestError: ""
}

const RulesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case RULES_REDUCER.SET_RULES:
            return {...state, userlist: payload.userlist}
        case RULES_REDUCER.RULES_REQUEST_FAILED:
            console.log(payload.requestError)
            return {...state, requestError: payload.requestError}
        default:
            return state;
    }
}

export default RulesReducer;