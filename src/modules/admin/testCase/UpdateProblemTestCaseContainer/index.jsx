import React, { useCallback, useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { deleteTestCaseApi, getTestCasesApi, postTestCaseApi, updateTestCaseApi } from 'redux/admin/testCase/api';
import TestCaseComponent from 'modules/admin/testCase/TestCaseComponent';
import { reducer } from 'modules/admin/testCase/UpdateProblemTestCaseContainer/reducer';
import { validateData } from 'modules/admin/testCase/dataValidation';

const UpdateProblemTestCaseContainer = ({ problem_id }) => {
  const { message, isSuccess } = useSelector((state) => state.createProblemReducer);
  const initialUserState = {
    input: '',
    output: '',
    marks: 0,
    isTestCaseEdit: false,
    testCases: [],
    inputErrTxt: '',
    outputErrTxt: '',
    marksErrTxt: '',
    id: -1,
    isTestCaseLoaded: false,
  };
  const [userState, setUserState] = useReducer(reducer, initialUserState);

  const schema = yup.object().shape({
    input: yup.string().required(),
    output: yup.string().required(),
    marks: yup.number().required().min(0).integer(),
  });

  const loadTestCases = useCallback(
    (event) => {
      const data = { problem_id };
      useEffect(async () => {
        const result =  await getTestCasesApi(data);
        const tcs = [...result.data.data.test_cases];
        setUserState({
          type: 'setTestCases',
          payload: tcs,
        });
      }, []);
    }, [userState.testCases],
  );
  // check if problem id is supplied then only load the test cases
  if (typeof problem_id !== 'undefined') {
    loadTestCases();
  }

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
    (event) => {
      // event.preventDefault();
      const { input, output, marks } = userState;
      const data = {
        input,
        output,
        marks,
        problem_id,
      };
      schema.isValid(data).then(async (valid) => {
        if (!valid) {
          validateData(schema, data, setUserState);
        } else {
          const result = await postTestCaseApi(data);
          if (result.status === 200) {
            data.id = result.data.data.test_case.id;
            setUserState({
              type: 'addTestCase',
              payload: data,
            });
          } else {
            return toast.error('Error in posting data');
          }
        }
      });
    },
  );

  const handleOnTestCaseEdit = useCallback(
    (tid) => {
      let testCase = {};
      const { testCases } = userState;
      for (let i = 0; i < testCases.length; i += 1) {
        if (testCases[i].id === tid) {
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
    (event) => {
      const { testCases, input, output, marks, id } = userState;
      const data = {
        input,
        output,
        marks,
        problem_id,
        id,
      };
      schema.isValid(data).then(async (valid) => {
        if (!valid) {
          validateData(schema, data, setUserState);
        } else {
          const result = await updateTestCaseApi(data);
          let index;
          for (let i = 0; i < testCases.length; i += 1) {
            if (testCases[i].id === id) {
              index = i;
              break;
            }
          }
          if (result.status === 200) {
            setUserState({
              type: 'updateTestCase',
              payload: { index, input, output, marks },
            });
          } else {
            return toast.error('Error in posting data');
          }
        }
      });
    }, [userState.input, userState.output, userState.marks, userState.testCases,
      userState.id],
  );
  // delete testcase api is not yet finalise from backend
  const handleOnTestCaseDelete = useCallback(
    async (id) => {
      const { testCases } = userState;
      const data = {
        id,
        problem_id,
      };
      const result = await deleteTestCaseApi(data);
      let index;
      for (let i = 0; i < testCases.length; i += 1) {
        if (testCases[i].id === id) {
          index = i;
          break;
        }
      }
      if (result.status === 200) {
        setUserState({
          type: 'deleteTestCase',
          payload: index,
        });
      }
    }, [userState.testCases],
  );
  const handleOnCancel = useCallback(
    (event) => {
      event.preventDefault();
      setUserState({
        type: 'setdefault',
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
UpdateProblemTestCaseContainer.propTypes = {
  problem_id: PropTypes.number.isRequired,
};
export default React.memo(UpdateProblemTestCaseContainer);
