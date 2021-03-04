import produce from 'immer';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'fName':
      return produce(state, (draft) => {
        draft.fName.value = action.payload.value;
        draft.fName.state = action.payload.state;
      });

    case 'lName':
      return produce(state, (draft) => {
        draft.lName.value = action.payload.value;
        draft.lName.state = action.payload.state;
      });

    case 'mobile':
      return produce(state, (draft) => {
        draft.mobile.value = action.payload.value;
        draft.mobile.state = action.payload.state;
      });

    case 'fNameInvalid':
      return produce(state, (draft) => { draft.fName.state = action.payload; });

    case 'lNameInvalid':
      return produce(state, (draft) => { draft.lName.state = action.payload; });

    case 'mobileInvalid':
      return produce(state, (draft) => { draft.mobile.state = action.payload; });

    default: return state;
  }
};
