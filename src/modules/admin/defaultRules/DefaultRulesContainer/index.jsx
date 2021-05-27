import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import DefaultRulesComponent from 'modules/admin/defaultRules/DefaultRulesComponent';
import { reducer } from 'modules/admin/rule/reducer';
import { validateData } from 'modules/admin/rule/dataValidation';
import { deleteRuleApi, getRulesApi, postRuleApi, updateRuleApi } from './api';

const DefaultRulesContainer = () => {
  const dispatch = useDispatch();

  const initialUserState = {
    rule: '',
    ruleErr: '',
    isRuleEdit: false,
    rules: [],
    id: -1,
    isRuleLoaded: false,
  };
  const [userState, setUserState] = useReducer(reducer, initialUserState);
  const [isLoading, setIsLoading] = useState(false);
  const schema = yup.object().shape({
    description: yup.string().required(),
  });

  const loadRules = useCallback(
    (event) => {
      useEffect(async () => {
        const result = await getRulesApi();
        const rulesList = result.data !== undefined ? [...result.data.data.rules] : [];
        setUserState({
          type: 'setAndDeleteRule',
          payload: {
            subType: 'setRules',
            data: rulesList,
          },
        });
      }, []);
    }, [userState.rules],
  );

  loadRules();

  const handleRuleChange = useCallback(
    (event) => {
      const rule = event.target.value;
      setUserState({
        type: 'set rule/id',
        payload: {
          data: rule,
          subType: 'rule',
        },
      });
    },
    [userState.rule],
  );

  const handleOnAdd = useCallback(
    (event) => {
      const { rule } = userState;
      const data = {
        type_name: 'default',
        description: rule,
      };

      schema.isValid(data).then(async (valid) => {
        if (!valid) {
          validateData(schema, data, setUserState);
        } else {
          setIsLoading(true);
          try {
            const result = await postRuleApi(data);
            if (result.status === 200) {
              setIsLoading(false);
              data.id = result.data.data.rule.id;
              setUserState({
                type: 'addRule',
                payload: data,
              });
              return toast.success('Rule added successfully');
            }
            setIsLoading(false);
            return toast.error('Error in posting data');
          } catch (err) {
            setIsLoading(false);
            return toast.error('error in posting');
          }
        }
      });
    },
  );

  const handleOnRuleEdit = useCallback(
    (tid) => {
      let rule = {};
      const { rules } = userState;
      for (let i = 0; i < rules.length; i += 1) {
        if (rules[i].id === tid) {
          rule = rules[i];
          const { description, id } = rule;
          setUserState({
            type: 'editRule',
            payload: { description, id },
          });
          break;
        }
      }
    }, [userState.rule, userState.rules, userState.id],
  );
  const handleOnRuleUpdate = useCallback(
    (event) => {
      const { rules, rule, id } = userState;
      const data = {
        description: rule,
        id,
      };
      schema.isValid(data).then(async (valid) => {
        if (!valid) {
          validateData(schema, data, setUserState);
        } else {
          let index;
          for (let i = 0; i < rules.length; i += 1) {
            if (rules[i].id === id) {
              index = i;
              break;
            }
          }
          try {
            const result = await updateRuleApi(data);
            if (result.status === 200) {
              setUserState({
                type: 'updateRule',
                payload: { index, rule },
              });
              return toast.success('Rule updated successfully');
            }
            setUserState({ type: 'default' });
            return toast.error('Update failed');
          } catch (err) {
            setUserState({ type: 'default' });
            return toast.error('Update failed');
          }
        }
      });
    }, [userState.rule, userState.output, userState.marks, userState.rules,
    // eslint-disable-next-line indent
    userState.id],
  );

  const handleOnRuleDelete = useCallback(
    async (id) => {
      const { rules } = userState;
      const data = {
        id,
      };
      const result = await deleteRuleApi(id);
      let index;
      for (let i = 0; i < rules.length; i += 1) {
        if (rules[i].id === id) {
          index = i;
          break;
        }
      }
      if (result.status === 200) {
        setUserState({
          type: 'setAndDeleteRule',
          payload: {
            subType: 'deleteRule',
            data: index,
          },
        });
      }
    }, [userState.rules],
  );
  const handleOnCancel = useCallback(
    (event) => {
      event.preventDefault();
      setUserState({
        type: 'setdefault',
      });
    },
    [userState.rule, userState.output, userState.marks],
  );

  return (
    <DefaultRulesComponent
      handleRuleChange={handleRuleChange}
      handleOnRuleAdd={handleOnAdd}
      handleOnRuleDelete={handleOnRuleDelete}
      handleOnRuleEdit={handleOnRuleEdit}
      handleOnRuleUpdate={handleOnRuleUpdate}
      handleOnCancel={handleOnCancel}
      ruleErrTxt={userState.ruleErr}
      isRuleEdit={userState.isRuleEdit}
      rules={userState.rules}
      isLoading={isLoading}
      rule={userState.rule}
    />
  );
};

export default React.memo(DefaultRulesContainer);
