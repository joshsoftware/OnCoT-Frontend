import { CANDIDATE_FORM_ACTIONS } from "constants/candidateFormConstants";

//request
export const candidateFormRequestAction = (data) => {
    return {
      type: CANDIDATE_FORM_ACTIONS.CANDIDATE_REQUEST,
      payload: data
    };
}

//success
export const candidateFormSuccessAction = (data) => {  
    return {
        type: CANDIDATE_FORM_ACTIONS.CANDIDATE_DETAILS_SUCCESS,
        payload: data,
    };
};

//failure
export const candidateFormFailureAction = (error) => {
    return {
      type: CANDIDATE_FORM_ACTIONS.CANDIDATE_DETAILS_FAILURE,
      payload: error,
    };
};
