import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import RuleComponent from 'modules/admin/rule/RuleComponent';
import { reducer } from 'modules/admin/rule/reducer';
import { validateData } from 'modules/admin/rule/dataValidation';
import { useHistory } from 'react-router-dom';
import { ADMIN_ROUTES, ROUTES } from 'constants/routeConstants';
import { deleteRuleApi, getRulesApi, postRuleApi, updateRuleApi } from './api';

const driveSaved = (drive_id) => {
  return drive_id === '';
};

const RuleContainer = (props) => {
  const { driveId } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const { message, isSuccess } = useSelector((state) => state.createDriveReducer);
  let { drive_id } = useSelector((state) => state.createDriveReducer);
  if (typeof driveId !== 'undefined') {
    drive_id = driveId;
  }

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
      const data = { drive_id };
      useEffect(async () => {
        const result = await getRulesApi(data);
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

  if (typeof drive_id !== 'undefined') {
    loadRules();
  }

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
        description: rule,
        drive_id,
      };

      schema.isValid(data).then(async (valid) => {
        if (!valid) {
          validateData(schema, data, setUserState);
        } else {
          if (driveSaved(drive_id)) {
            toast.error('Please create problem first');
            setUserState({ type: 'default' });
            return;
          }
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
    }, [userState.rule, userState.marks, userState.rules, userState.id],
  );
  const handleOnRuleUpdate = useCallback(
    (event) => {
      const { rules, rule, id } = userState;
      const data = {
        description: rule,
        drive_id,
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
              return toast.success('Test case updated successfully');
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

  const finishDriveCreation = useCallback(() => {
    history.push(ROUTES.ADMIN + ADMIN_ROUTES.HOME);
  });

  return (
    <RuleComponent
      handleRuleChange={handleRuleChange}
      handleOnRuleAdd={handleOnAdd}
      handleOnRuleDelete={handleOnRuleDelete}
      handleOnRuleEdit={handleOnRuleEdit}
      handleOnRuleUpdate={handleOnRuleUpdate}
      handleOnCancel={handleOnCancel}
      message={message}
      ruleErrTxt={userState.ruleErr}
      isProblemSuccess={isSuccess}
      isRuleEdit={userState.isRuleEdit}
      rules={userState.rules}
      isLoading={isLoading}
      finishDriveCreation={finishDriveCreation}
      rule={userState.rule}
    />
  );
};
RuleContainer.propTypes = {
  driveId: PropTypes.number.isRequired,
};

export default React.memo(RuleContainer);
