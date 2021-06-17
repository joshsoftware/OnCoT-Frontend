import React, { useReducer, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CreateProblemComponent from 'modules/admin/createProblem/CreateProblemComponent';
import { reducer } from 'modules/admin/createProblem/CreateProblemContainer/reducer';
import { createProblemRequestAction } from 'redux/admin/createProblem/action';
import { useHistory } from 'react-router-dom';
import { ADMIN_ROUTES, ROUTES } from 'constants/routeConstants';

const CreateProblemContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { message, isSuccess, isLoading } = useSelector((state) => state.createProblemReducer);
  const initialUserState = {
    title: '',
    description: '',
    submissionCount: null,
    timeInMinutes: '',
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

  const handleTimeChange = useCallback(
    (event) => {
      const timeInMinutes = event.target.value;
      setUserState({
        type: 'timeInMinutes',
        payload: timeInMinutes,
      });
    },
    [userState.timeInMinutes],
  );

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const { title, description, submissionCount, timeInMinutes } = userState;
    const data = {
      title,
      description,
      submissionCount,
      timeInMinutes,
    };
    dispatch(createProblemRequestAction(data));
  });

  const finishProblemCreation = useCallback(() => {
    history.push(ROUTES.ADMIN + ADMIN_ROUTES.PROBLEMS);
  });
  return (
    <CreateProblemComponent
      handleTitleChange={handleTitleChange}
      handleDescriptionChange={handleDescriptionChange}
      handleCountChange={handleCountChange}
      handleTimeChange={handleTimeChange}
      handleSubmit={handleSubmit}
      message={message}
      isSuccess={isSuccess}
      isLoading={isLoading}
      finishProblemCreation={finishProblemCreation}
    />
  );
};

export default React.memo(CreateProblemContainer);
