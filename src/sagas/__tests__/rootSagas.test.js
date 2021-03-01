import { 
    candidateFormRequestAction, 
    candidateFormSuccessAction, 
    candidateFormFailureAction 
} from "actions/candidateFormActions";
import candidateInfoPostApi from "apis/candidateFormApi";
import { call, put } from "redux-saga/effects";
import { candidateFormSaga } from "sagas/rootSagas"

describe("candidateFormSaga", () => {

    let gen, action;
    
    const data = {
        email: "aryanjn807@gmail.com",
        fName: "Aryan",
        lName: "Jain",
        mobile: "9479488833",
    }
    
    beforeEach(() => {
        action = candidateFormRequestAction({fName:"F", lName:"L", mobile:"1234567890"})
        gen = candidateFormSaga(action)
    });

    it("API call for REQUEST", () => {
        const value1 = gen.next().value
        const value2 = call(candidateInfoPostApi, action.payload)
        
        expect(JSON.stringify(value1)).toBe(JSON.stringify(value2));
    })

    it("FAILURE action", () => {

        const value1 = gen.next().value
        const value2 = call(candidateInfoPostApi, action.payload)
        
        expect(JSON.stringify(value1)).toBe(JSON.stringify(value2));

        const value3 = gen.next(data).value
        const value4 = put(candidateFormFailureAction(data));

        expect(JSON.stringify(value3)).toBe(JSON.stringify(value4));

    })

    // it("Must dispatch success action", () => {
        
    // })
})