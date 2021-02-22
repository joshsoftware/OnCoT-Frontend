import RULES_REDUCER from "../constants/actionConstants";

let initialState = {
    userlist : {}
}

const RulesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case RULES_REDUCER.SET_RULES:
            return {...state, userlist: payload.userlist}
        default:
            return state;
    }
}

export default RulesReducer;