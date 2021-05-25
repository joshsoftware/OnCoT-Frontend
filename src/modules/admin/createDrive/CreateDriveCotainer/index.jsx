import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getProblems from 'modules/admin/createDrive/CreateDriveCotainer/getProblems';
import { toast } from 'react-toastify';
import CreateDriveComponent from 'modules/admin/createDrive/CreateDriveComponent';

import reducer, {
  initialState,
} from 'modules/admin/createDrive/CreateDriveCotainer/reducer';

import { createDriveRequestAction } from 'redux/admin/createDrive/action';
import { Spinner } from 'core-components';

const CreateDriveContainer = () => {
  const { message } = useSelector((state) => state.createDriveReducer);

  const [createDrive, setCreateDrive] = useReducer(reducer, initialState);
  const [problemIsLoading, setProblemIsLoading] = useState(true);
  const [problemsData, setProblemsData] = useState([]);

  const dispatch = useDispatch();

  useEffect(async () => {
    const data = await getProblems();
    const { problems, problemLoading } = data;
    if (problems.length === 0) {
      dispatch({
        type: 'PROBLEMS',
        payload: 'PROBLEMS',
      });
      return toast.error('You haven\'t added any problems yet. Please add problem to create drive');
    }
    if (!problemLoading) {
      setProblemsData(problems);
      setProblemIsLoading(problemLoading);
    }
  }, [problemIsLoading]);
  // will need this in future
  // const renderTableData = useMemo(() => {
  //   return createDrive.currentProblems.map((val, index) => {
  //     const {
  //       problemId,
  //       problemTitle,
  //       problemCategory,
  //       problemDifficulty,
  //       problemMarks,
  //     } = val;

  //     return (
  //       <tr key={problemId}>
  //         <td>{problemId}</td>
  //         <td>{problemTitle}</td>
  //         <td>{problemCategory}</td>
  //         <td>{problemDifficulty}</td>
  //         <td>{problemMarks}</td>
  //       </tr>
  //     );
  //   });
  // }, [createDrive.currentProblems]);

  const handleSelectedProblemChange = useCallback(
    (event) => {
      const problem = event.value;
      setCreateDrive({
        type: 'problem',
        payload: problem,
      });
    },
    [createDrive.currentProblems],
  );

  const handleDriveNameChange = useCallback(
    (event) => {
      const name = event.target.value;
      setCreateDrive({
        type: 'name',
        payload: name,
      });
    },
    [createDrive.data.drive.name],
  );

  const handleDriveDescriptionChange = useCallback(
    (event) => {
      const description = event.target.value;
      setCreateDrive({
        type: 'description',
        payload: description,
      });
    },
    [createDrive.data.drive.description],
  );

  const handleDriveStartChange = useCallback(
    (event) => {
      let start_time = event.target.value;
      start_time += '.000Z';
      setCreateDrive({
        type: 'start_time',
        payload: start_time,
      });
    },
    [createDrive.data.drive.start_time],
  );

  const handleDriveEndChange = useCallback(
    (event) => {
      let end_time = event.target.value;
      end_time += '.000Z';
      setCreateDrive({
        type: 'end_time',
        payload: end_time,
      });
    },
    [createDrive.data.drive.end_time],
  );

  const onCreateDriveSubmit = () => {
    const {
      data: {
        drive: { id, name, description, start_time, end_time },
      },
      currentProblems,
    } = createDrive;
    const problemId = currentProblems[0];

    const drives_problems_attributes = [
      {
        problem_id: problemId,
        _destroy: false,
      },
    ];

    const postData = {
      name,
      description,
      start_time,
      end_time,
      drives_problems_attributes,
    };
    dispatch(createDriveRequestAction({ postData, problemId }));
  };

  if (problemIsLoading) {
    return <Spinner />;
  }
  return (
    <CreateDriveComponent
      // renderTableData={renderTableData}
      handleDriveDescriptionChange={handleDriveDescriptionChange}
      handleDriveEndChange={handleDriveEndChange}
      handleDriveNameChange={handleDriveNameChange}
      handleDriveStartChange={handleDriveStartChange}
      problemIsLoading={problemIsLoading}
      handleSelectedProblemChange={handleSelectedProblemChange}
      data={problemsData}
      onCreateDriveSubmit={onCreateDriveSubmit}
      message={message}
    />
  );
};

export default CreateDriveContainer;
