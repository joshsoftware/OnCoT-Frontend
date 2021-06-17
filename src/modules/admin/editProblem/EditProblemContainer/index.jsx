import React, { useReducer, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EditProblemComponent from 'modules/admin/editProblem/EditProblemComponent';
import { reducer } from 'modules/admin/editProblem/EditProblemContainer/reducer';
import { editProblemRequestAction } from 'redux/admin/editProblem/action';
import { getProblem, getTestCases } from 'modules/admin/editProblem/EditProblemContainer/getProblemDetails';
import { Spinner } from 'core-components';
import { useHistory } from 'react-router-dom';
import { ADMIN_ROUTES, ROUTES } from 'constants/routeConstants';

const EditProblemContainer = () => {
  const history = useHistory();
  const initialUserState = {
    title: '',
    description: '',
    submissionCount: null,
    timeInMinutes: '',
  };
  const dispatch = useDispatch();
  const [problemDetails, setProblemDetails] = useState();
  const [testCasesDetails, setTestCasesDetails] = useState();
  const [editProblem, setEditProblem] = useReducer(reducer, initialUserState);
  const [problemIsLoading, setProblemIsLoading] = useState(true);
  const { message, isSuccess, isLoading } = useSelector((state) => state.editProblemReducer);

  useEffect(async () => {
    const problemData = await getProblem();
    const { problems, problemLoading } = problemData;
    if (!problemLoading) {
      setProblemDetails(problems);
      setProblemIsLoading(problemLoading);
    }
    const { title, description, submission_count, time_in_minutes } = problemData.problems;

    setEditProblem({
      type: 'problem',
      payload: {
        title,
        description,
        submissionCount: submission_count,
        timeInMinutes: time_in_minutes,
      },
    });
  }, [problemIsLoading]);

  const handleTitleChange = useCallback(
    (event) => {
      const title = event.target.value;
      setEditProblem({
        type: 'title',
        payload: title,
      });
    },
    [editProblem.title],
  );

  const handleDescriptionChange = useCallback(
    (event) => {
      const description = event.target.value;
      setEditProblem({
        type: 'description',
        payload: description,
      });
    },
    [editProblem.description],
  );

  const handleCountChange = useCallback(
    (event) => {
      const submissionCount = event.target.value;
      setEditProblem({
        type: 'submissionCount',
        payload: submissionCount,
      });
    },
    [editProblem.submissionCount],
  );

  const handleTimeChange = useCallback(
    (event) => {
      const timeInMinutes = event.target.value;
      setEditProblem({
        type: 'timeInMinutes',
        payload: timeInMinutes,
      });
    },
    [editProblem.timeInMinutes],
  );

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const { title, description, submissionCount, timeInMinutes } = editProblem;
    const data = {
      title,
      description,
      submission_count: submissionCount,
      time_in_minutes: timeInMinutes,
    };
    dispatch(editProblemRequestAction(data));
  });

  const finishProblemEdit = useCallback(() => {
    history.push(ROUTES.ADMIN + ADMIN_ROUTES.PROBLEMS);
  });
  if (problemIsLoading) {
    return <Spinner />;
  }
  return (
    <EditProblemComponent
      handleTitleChange={handleTitleChange}
      handleDescriptionChange={handleDescriptionChange}
      handleCountChange={handleCountChange}
      handleTimeChange={handleTimeChange}
      handleSubmit={handleSubmit}
      message={message}
      isSuccess={isSuccess}
      isLoading={isLoading}
      finishProblemEdit={finishProblemEdit}
      problemDetails={problemDetails}
      testCasesDetails={testCasesDetails}
      problemIsLoading={problemIsLoading}
    />
  );
};
export default React.memo(EditProblemContainer);
