import produce from 'immer';

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'output': return produce(state, (draft) => { draft.outputValue = payload.output; });
    case 'input': return produce(state, (draft) => { draft.inputValue = payload.input; });
    default: return state;
  }
};
