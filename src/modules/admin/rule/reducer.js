import produce from 'immer';

const setterForCrud = (payload, state) => {
  if (payload.subType === 'rule') {
    state.rule = payload.data;
    state.ruleErr = '';
  } else if (payload.subType === 'id') {
    state.id = payload.data;
  }
};

const setErrTxt = (payload, state) => {
  if (payload.subType === 'ruleErr') {
    state.ruleErr = payload.data;
  }
};

const setAndDeleteRule = (payload, state, [...rules]) => {
  if (payload.subType === 'setRules') {
    state.rules = [...payload.data];
    state.isRuleLoaded = true;
  } else if (payload.subType === 'deleteRule') {
    state.rules.splice(payload.data, 1);
  }
};

export const reducer = produce((state, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case 'set rule/id':
      setterForCrud(payload, state);
      break;
    case 'setErrTxt':
      setErrTxt(payload, state);
      break;
    case 'addRule':
      state.rules.push(payload);
      state.rule = '';
      state.ruleErr = '';
      break;
    case 'editRule':
      state.rule = payload.description;
      state.id = payload.id;
      state.isRuleEdit = true;
      break;
    case 'updateRule':
      state.rules[payload.index].description = payload.rule;
      state.rule = '';
      state.ruleErr = '';
      state.isRuleEdit = false;
      break;
    case 'setAndDeleteRule':
      setAndDeleteRule(payload, state, state.rules);
      break;
    default:
      state.rule = '';
      state.ruleErr = '';
      state.isRuleEdit = false;
      break;
  }
});
