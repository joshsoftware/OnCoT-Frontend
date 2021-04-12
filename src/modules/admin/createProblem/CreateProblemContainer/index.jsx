import React, { useReducer, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CreateProblemComponent from 'modules/admin/createProblem/CreateProblemComponent';
import { reducer } from 'modules/admin/createProblem/CreateProblemContainer/reducer';
import { createProblemRequestAction } from 'redux/admin/createProblem/action';

const CreateProblemContainer = () => {
  const dispatch = useDispatch();
  const { message, isSuccess, isLoading } = useSelector((state) => state.createProblemReducer);
  const initialUserState = {
    title: '',
    description: '',
    submissionCount: null,
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

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const { title, description, submissionCount } = userState;
    const data = {
      title,
      description,
      submissionCount,
    };
    dispatch(createProblemRequestAction(data));
  });

  const finishProblemCreation = useCallback(() => {
    dispatch({
      type: 'PROBLEMS',
      payload: 'PROBLEMS',
    });
  });
  return (
    <CreateProblemComponent
      handleTitleChange={handleTitleChange}
      handleDescriptionChange={handleDescriptionChange}
      handleCountChange={handleCountChange}
      handleSubmit={handleSubmit}
      message={message}
      isSuccess={isSuccess}
      isLoading={isLoading}
      finishProblemCreation={finishProblemCreation}
    />
  );
};

export default React.memo(CreateProblemContainer);
