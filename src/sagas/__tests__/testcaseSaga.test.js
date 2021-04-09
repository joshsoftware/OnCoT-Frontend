import { postTestCase } from 'redux/admin/testCase/saga';
import {createTestCaseFailureAction, createTestCaseRequestAction, createTestCaseSuccessAction} from '../../redux/admin/testCase/action';
import { postTestCaseApi } from 'redux/admin/testCase/api';
import { call, put } from 'redux-saga/effects';

describe('Test case saga', () => {
    let ite, action
    
    beforeEach(() => {
        action = createTestCaseRequestAction({input: 1, output: 2, problem_id: 4});
        ite = postTestCase(action) 
    });

    it('must call api', () => {
        //console.log (ite.next(action.payload).value)
        expect(ite.next().value).toEqual(call(postTestCaseApi, action.payload));
    });
    
    const data = {message: 'Successfull'};
    
    it('must dispatch success action', () => {
        ite.next()
        expect(ite.next(data).value).toEqual(put(createTestCaseSuccessAction(data)));
        expect(ite.next().done).toEqual(true);
    });

    it('must dispatch failure action', () => {
        const err = 'Post test case failed';
        ite.next();
        expect(ite.throw(err).value).toEqual(put(createTestCaseFailureAction(err)));
    });
});
