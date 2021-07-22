import { setInput, setOutput, clearIO } from 'actions/ioAction';
import ioReducer, { initialState } from 'reducers/ioReducer';

describe('io Reducer', () => {
  const outputValue = 'some output';
  const inputValue = 'some input';

  it('Return Default State', () => {
    expect(ioReducer(initialState, {})).toEqual(initialState);
  });

  it('Set output', () => {
    expect(ioReducer(initialState, setOutput(outputValue)))
      .toEqual({ ...initialState, ...{outputValue: 'some output'} });
  });

  it('Set input', () => {
    expect(ioReducer(initialState, setInput(inputValue)))
      .toEqual({ ...initialState, ...{inputValue: 'some input'} });
  });

});