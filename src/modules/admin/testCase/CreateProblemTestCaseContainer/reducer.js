import produce from 'immer';

export const reducer = produce((state, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case 'input':
      state.input  = payload;
      break;
    case 'output':
      state.output  = payload;
      break;
    case 'marks':
      state.marks  = payload;
      break;
    case 'id':
      state.id  = payload;
      break;
    case 'addTestCase':
      state.testCases.push(payload);
      state.input = '';
      state.output = '';
      state.marks = 0;
      break;
    case 'editTestCase':
      state.input = payload.input;
      state.output = payload.output;
      state.marks = payload.marks;
      state.id = payload.id;
      state.isTestCaseEdit = true;
      break;
    case 'updateTestCase':
      state.testCases[payload.index].input = payload.input;
      state.testCases[payload.index].output = payload.output;
      state.testCases[payload.index].marks = payload.marks;
      state.input = '';
      state.output = '';
      state.marks = 0;
      state.isTestCaseEdit = false;
      break;
    case 'deleteTestCase':
      state.testCases.splice(payload, 1);
      break;
    case 'setdefault':
      state.input = '';
      state.output = '';
      state.marks = 0;
      break;
    default: return state;
  }
});
