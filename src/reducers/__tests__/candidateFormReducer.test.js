import { 
    candidateFormReducer,
    initialState
} from "reducers/candidateFormReducer";

import {CANDIDATE_FORM_ACTIONS} from "constants/candidateFormConstants";
import { 
    candidateFormRequestAction, 
    candidateFormSuccessAction,
    candidateFormFailureAction
 } from "actions/candidateFormActions"


test("candidateFormReducer :: request", () => {  
    const value1 = candidateFormReducer(initialState, candidateFormRequestAction());
    const value2 = { ...initialState, loading:true };
    expect(JSON.stringify(value1)).toBe(JSON.stringify(value2))
});


test("candidateFormReducer :: success", () => {  
    const action = candidateFormSuccessAction({ 
        fName: "XYZ", 
        lName: "PQR", 
        email: "xyz@joshsoftware.com", 
        mobile: "9479488833" 
    });
    const value1 = candidateFormReducer(initialState, action);
    const value2 = {
        ...initialState,
        loading : false,
        error : false,
        fName : action.payload.fName,
        lName : action.payload.lName,
        email : action.payload.email,
        mobile : action.payload.mobile
    };
    expect(JSON.stringify(value1)).toBe(JSON.stringify(value2));
});



test("candidateFormReducer :: failure", () => {  
    const action = candidateFormFailureAction({ 
        error: "Error occured"
    });
    const value1 = candidateFormReducer(initialState, action);
    const value2 = {
        ...initialState,
        loading : false,
        error : true,
        errorMsg : action.payload
    };
    expect(JSON.stringify(value1)).toBe(JSON.stringify(value2));
});


test("candidateFormReducer :: default", () => {  
    const value = candidateFormReducer(initialState, {});
    expect(value).toBe(initialState);
});