import { call, put } from "redux-saga/effects";

import { rulesSaga } from "../rulesSaga";
import rulesAction, { rulesRequest, rulesRequestFailed } from "actions/rulesAction";
import getRules from "apis/rulesAPI";

describe ("Rules Saga", () => {
    let gen;
    let response = {
        data: {
            str : "hsjhjhfhrkhergdhgit"
        }
    }
    beforeEach(() => {
        gen = rulesSaga(rulesRequest());
    })

    it("API call should be successful", () => {
        expect(gen.next().value).toEqual(call(getRules));
    })

    it("Dispactch success action", () => {
        gen.next();
        expect(gen.next(response).value).toEqual(put(rulesAction(response.data)));
        expect(gen.next().done).toEqual(true);
    })

    it("Dispatch failure action", () => {
        gen.next();
        expect(gen.throw('Something Went Wrong').value).toEqual(put(rulesRequestFailed('Something Went Wrong')));
    })
})