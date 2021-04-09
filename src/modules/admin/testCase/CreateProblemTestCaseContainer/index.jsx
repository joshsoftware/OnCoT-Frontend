import React, { useReducer, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import TestCaseComponent from 'modules/admin/testCase/TestCaseComponent';
import { reducer } from 'modules/admin/testCase/CreateProblemTestCaseContainer/reducer';
import { createTestCaseRequestAction } from 'redux/admin/testCase/action';
import { validateData } from '../dataValidation';

const TestCaseContainer = () => {
  const dispatch = useDispatch();
  const { isTestCaseLoading, reqCount } = useSelector((state) => state.testReducer);
  const { message, isSuccess, problem_id } = useSelector((state) => state.createProblemReducer);
  const initialUserState = {
    input: '',
    output: '',
    marks: 0,
    inputErrTxt: '',
    outputErrTxt: '',
    marksErrTxt: '',
    id: 0,
    testCases: [],
    isTestCaseEdit: false,
  };
  const [userState, setUserState] = useReducer(reducer, initialUserState);
  const notify = () => toast.error('Please add test cases');

  const schema = yup.object().shape({
    input: yup.string().required(),
    output: yup.string().required(),
    marks: yup.number().required().min(0),
  });
  const handleInputChange = useCallback(
    (event) => {
      const input = event.target.value;
      setUserState({
        type: 'set input/output/mark/id',
        payload: {
          data: input,
          subType: 'input',
        },
      });
    },
    [userState.input],
  );

  const handleOutputChange = useCallback(
    (event) => {
      const output = event.target.value;
      setUserState({
        type: 'set input/output/mark/id',
        payload: {
          data: output,
          subType: 'output',
        },
      });
    },
    [userState.output],
  );

  const handleMarksChange = useCallback(
    (event) => {
      const marks = event.target.value;
      setUserState({
        type: 'set input/output/mark/id',
        payload: {
          data: marks,
          subType: 'marks',
        },
      });
    },
    [userState.marks],
  );

  const handleOnAdd = useCallback(
    async (event) => {
      event.preventDefault();
      let { id } = userState;
      id += 1;
      setUserState({
        type: 'set input/output/mark/id',
        payload: {
          data: id,
          subType: 'id',
        },
      });
      const { input, output, marks } = userState;
      const data = {
        input,
        output,
        marks,
        problem_id,
        id,
      };
      schema.isValid(data).then((valid) => {
        if (!valid) {
          validateData(schema, data, setUserState);
        } else {
          setUserState({
            type: 'addTestCase',
            payload: data,
          });
        }
      });
    }, [userState.input, userState.marks, userState.output, userState.testCases],
  );

  const handleOnTestCaseEdit = useCallback(
    (tempId) => {
      let testCase = {};
      const { testCases } = userState;
      for (let i = 0; i < testCases.length; i += 1) {
        if (testCases[i].id === tempId) {
          testCase = testCases[i];
          const { input, output, marks, id } = testCase;
          setUserState({
            type: 'editTestCase',
            payload: { input, output, marks, id },
          });
          break;
        }
      }
    }, [userState.input, userState.marks, userState.testCases, userState.id],
  );
  const handleOnTestCaseUpdate = useCallback(
    (tempId) => {
      const { testCases, input, output, marks, id } = userState;
      const data = {
        input,
        output,
        marks,
      };
      schema.isValid(data).then((valid) => {
        if (!valid) {
          validateData(schema, data, setUserState);
        } else {
          for (let i = 0; i < testCases.length; i += 1) {
            if (testCases[i].id === id) {
              setUserState({
                type: 'updateTestCase',
                payload: { index: i, input, output, marks },
              });
              break;
            }
          }
        }
      });
    }, [userState.input, userState.output, userState.marks, userState.testCases,
      userState.id],
  );
  const handleOnProblemSuccess = useCallback(
    (event) => {
      const { testCases } = userState;
      const len = testCases.length;
      if (len === 0) {
        return notify();
      }
      testCases.forEach((tc) => {
        const { input, output, marks } = tc;
        const data = {
          input,
          output,
          marks,
          problem_id,
        };
        useEffect(() => {
          if (reqCount < len && !isTestCaseLoading) {
            dispatch(createTestCaseRequestAction(data));
          }
        }, [reqCount, isTestCaseLoading]);
      });
    },
  );

  const handleOnTestCaseDelete = useCallback(
    (tempId) => {
      // event.preventDefault();
      const { testCases } = userState;
      for (let i = 0; i < testCases.length; i += 1) {
        if (testCases[i].id === tempId) {
          setUserState({
            type: 'deleteTestCase',
            payload: i,
          });
          break;
        }
      }
    }, [userState.testCases],
  );

  const handleOnCancel = useCallback(
    (event) => {
      event.preventDefault();
      setUserState({
        type: 'default',
      });
    },
    [userState.input, userState.output, userState.marks],
  );

  return (
    <TestCaseComponent
      handleInputChange={handleInputChange}
      handleOutputChange={handleOutputChange}
      handleMarksChange={handleMarksChange}
      handleTestCaseOnAdd={handleOnAdd}
      handleOnTestCaseDelete={handleOnTestCaseDelete}
      handleOnTestCaseEdit={handleOnTestCaseEdit}
      handleOnTestCaseUpdate={handleOnTestCaseUpdate}
      handleOnProblemSuccess={handleOnProblemSuccess}
      handleOnCancel={handleOnCancel}
      message={message}
      input={userState.input}
      output={userState.output}
      marks={userState.marks}
      inputErrTxt={userState.inputErrTxt}
      outputErrTxt={userState.outputErrTxt}
      marksErrTxt={userState.marksErrTxt}
      isProblemSuccess={isSuccess}
      isTestCaseEdit={userState.isTestCaseEdit}
      testCases={userState.testCases}
    />
  );
};

export default React.memo(TestCaseContainer);
