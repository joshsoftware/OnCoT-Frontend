import React, { useReducer, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CreateProblemComponent from 'modules/admin/createProblem/CreateProblemComponent';
import { reducer } from 'modules/admin/createProblem/CreateProblemContainer/reducer';
import { createProblemRequestAction } from 'redux/admin/createProblem/action';

const CreateProblemContainer = () => {
  const dispatch = useDispatch();
  const { message, isSuccess } = useSelector((state) => state.createProblemReducer);
  const { isTestCaseSuccess, isTestCaseLoading } = useSelector((state) => state.testReducer);
  const initialUserState = {
    title: '',
    description: '',
    submissionCount: null,
    testCases: [],
  };

  const [userState, setUserState] = useReducer(reducer, initialUserState);
  const handleTitleChange = useCallback(
    (event) => {
      const title = event.target.value;
      setUserState({
        type: 'title',
        payload: title,
      });
    },
    [userState.title],
  );

  const handleDescriptionChange = useCallback(
    (event) => {
      const description = event.target.value;
      setUserState({
        type: 'description',
        payload: description,
      });
    },
    [userState.description],
  );

  const handleCountChange = useCallback(
    (event) => {
      const submissionCount = event.target.value;
      setUserState({
        type: 'submissionCount',
        payload: submissionCount,
      });
    },
    [userState.submissionCount],
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const { title, description, submissionCount } = userState;
      const data = {
        title,
        description,
        submissionCount,
      };
      dispatch(createProblemRequestAction(data));
    },
  );
  return (
    <CreateProblemComponent
      handleTitleChange={handleTitleChange}
      handleDescriptionChange={handleDescriptionChange}
      handleCountChange={handleCountChange}
      handleSubmit={handleSubmit}
      message={message}
      isSuccess={isSuccess}
      isTestCaseSuccess={isTestCaseSuccess}
      isTestCaseLoading={isTestCaseLoading}
      dispatch={dispatch}
      testCases={userState.testCases}
    />
  );
};

export default React.memo(CreateProblemContainer);
