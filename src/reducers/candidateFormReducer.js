import { CANDIDATE_FORM_ACTIONS } from 'constants/candidateFormConstants';

export const initialState = {
  loading : false,
  error : false,

  fName : undefined,
  lName : undefined,
  mobile: undefined,
  errorMsg : undefined,
};

export const candidateFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case CANDIDATE_FORM_ACTIONS.CANDIDATE_REQUEST:
      return {
        ...state,
        loading : true,
      };

    case CANDIDATE_FORM_ACTIONS.CANDIDATE_DETAILS_SUCCESS:
      return {
        ...state,
        loading : false,
        error : false,
        fName : action.payload.fName,
        lName : action.payload.lName,
        email : action.payload.email,
        mobile : action.payload.mobile,
      };

    case CANDIDATE_FORM_ACTIONS.CANDIDATE_DETAILS_FAILURE: return {
      ...state,
      loading : false,
      error : true,
      errorMsg : action.payload,
    };

    default: return state;
  }
};
