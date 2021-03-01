import { call, put } from "redux-saga/effects";

import { statementSaga } from "../problemsSaga";
import statementAction, { statementRequest, statementActionFailed } from "actions/problemStatementActions";
import getStatement from "apis/problemStatementAPI";

describe ("Rules Saga", () => {
    let gen;
    let response = {
        data: {
            str : "hsjhjhfhrkhergdhgit"
        }
    }
    beforeEach(() => {
        gen = statementSaga(statementRequest());
    })

    it("API call should be successful", () => {
        expect(gen.next().value).toEqual(call(getStatement));
    })

    it("Dispactch success action", () => {
        gen.next();
        expect(gen.next(response).value).toEqual(put(statementAction(response.data)));
        expect(gen.next().done).toEqual(true);
    })

    it("Dispatch failure action", () => {
        gen.next();
        expect(gen.throw('Something Went Wrong').value).toEqual(put(statementActionFailed('Something Went Wrong')));
    })
})