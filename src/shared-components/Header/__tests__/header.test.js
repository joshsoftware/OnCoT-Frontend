import { call, put } from 'redux-saga/effects';

import { timerSaga } from 'sagas/timerSaga';
import {
  timerRequest,
  timerRequestFailed,
  timerAction,
} from 'actions/timerActions';
import { getTimer } from 'apis/timerApi';

describe('Timer Saga', () => {
  let gen;
  const response = {
    data: {
      data: {
        time_left: 7200,
      }
    }
  };

  beforeEach(() => {
    gen = timerSaga(timerRequest());
  });

  it('Timer API call successful', () => {
    expect(gen.next().value).toEqual(call(getTimer));
  });


  it('Dispatch successful', () => {
    gen.next();
    expect(gen.next(response).value).toEqual(put(timerAction(response.data.data.time_left)));
    expect(gen.next().done).toEqual(true);
  });

  it('Dispatch failure action', () => {
    gen.next();
    expect(gen.throw('Something went wrong with timer!').value).toEqual(
      put(timerRequestFailed('Something went wrong with timer!')),
    );
  });
});
