import produce from 'immer';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'output': return produce(state, (draft) => { draft.outputValue = action.payload.output; });
    case 'input': return produce(state, (draft) => { draft.inputValue = action.payload.input; });
    default: return state;
  }
};
