import testCaseReducer, {initialState} from '../../redux/admin/testCase/reducer';
import { createTestCaseSuccessAction, createTestCaseFailureAction } from '../../redux/admin/testCase/action';

describe('TestCase reducer', () => {
    it('return default state', () => {
         expect(testCaseReducer(initialState,{})).toEqual(initialState);
    });

    it('check success request', () => {
        const testCaseMessage = 'success';
        const isTestCaseSuccess = true;     
         expect(testCaseReducer(initialState,createTestCaseSuccessAction({message: 'success'}, isTestCaseSuccess))).toEqual({...initialState, testCaseMessage, isTestCaseSuccess});
    });

    it('Request Failed', () => {
        const testCaseErrorMessage = '401 Request failed!';
        const isTestCaseError = true;
        expect(testCaseReducer(initialState, createTestCaseFailureAction({error: '401 Request failed!'}, isTestCaseError)))
          .toEqual({ ...initialState, testCaseErrorMessage, isTestCaseError });
      });
});
