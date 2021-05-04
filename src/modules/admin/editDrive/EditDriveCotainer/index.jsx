import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import getProblems from 'modules/admin/editDrive/EditDriveCotainer/getProblems';
import getDriveDetails from 'modules/admin/editDrive/EditDriveCotainer/getDriveDetails';

import EditDriveComponent from 'modules/admin/editDrive/EditDriveComponent';

import reducer, {
  initialState,
} from 'modules/admin/editDrive/EditDriveCotainer/reducer';

import { editDriveRequestAction } from 'redux/admin/editDrive/action';
import { Spinner } from 'core-components';

const EditDriveContainer = () => {
  const [driveDetails, setDriveDetails] = useState();
  const [editDrive, setEditDrive] = useReducer(reducer, initialState);
  const [problemIsLoading, setProblemIsLoading] = useState(true);
  const [problemsData, setProblemsData] = useState([]);
  const { message } = editDrive;
  const dispatch = useDispatch();

  useEffect(async () => {
    const driveData = await getDriveDetails();
    if (driveData) {
      setDriveDetails(driveData);
    }

    const { name, description, start_time, end_time, drives_problems } = driveData.drive;
    setEditDrive({
      type: 'drive',
      payload: {
        name,
        description,
        start_time,
        end_time,
        problem: drives_problems[drives_problems.length - 1].problem_id,
      },
    });

    const data = await getProblems();
    const { problems, problemLoading } = data;
    if (!problemLoading) {
      setProblemsData(problems);
      setProblemIsLoading(problemLoading);
    }
  }, [problemIsLoading]);

  const handleSelectedProblemChange = useCallback(
    (event) => {
      const problem = event.target.value;
      setEditDrive({
        type: 'problem',
        payload: problem,
      });
    },
    [editDrive.currentProblems],
  );

  const handleDriveNameChange = useCallback(
    (event) => {
      const name = event.target.value;
      setEditDrive({
        type: 'name',
        payload: name,
      });
    },
    [editDrive.data.drive.name],
  );

  const handleDriveDescriptionChange = useCallback(
    (event) => {
      const description = event.target.value;
      setEditDrive({
        type: 'description',
        payload: description,
      });
    },
    [editDrive.data.drive.description],
  );

  const handleDriveStartChange = useCallback(
    (event) => {
      let start_time = event.target.value;
      start_time += '.000Z';
      setEditDrive({
        type: 'start_time',
        payload: start_time,
      });
    },
    [editDrive.data.drive.start_time],
  );

  const handleDriveEndChange = useCallback(
    (event) => {
      let end_time = event.target.value;
      end_time += '.000Z';
      setEditDrive({
        type: 'end_time',
        payload: end_time,
      });
    },
    [editDrive.data.drive.end_time],
  );

  const onEditDriveSubmit = () => {
    const {
      data: {
        drive: { id, name, description, start_time, end_time },
      },
      currentProblems,
    } = editDrive;
    const problemId = currentProblems;
    const drivesProblemsid =
      driveDetails.drive.drives_problems[driveDetails.drive.drives_problems.length - 1].id;

    const drives_problems_attributes = [
      {
        id: drivesProblemsid,
        problem_id: problemId,
        _destroy: false,
      },
    ];

    const putData = {
      name,
      description,
      start_time,
      end_time,
      drives_problems_attributes,
    };
    dispatch(editDriveRequestAction({ putData, problemId }));
  };

  if (problemIsLoading) {
    return <Spinner />;
  }
  return (
    <EditDriveComponent
      handleDriveDescriptionChange={handleDriveDescriptionChange}
      handleDriveEndChange={handleDriveEndChange}
      handleDriveNameChange={handleDriveNameChange}
      handleDriveStartChange={handleDriveStartChange}
      problemIsLoading={problemIsLoading}
      handleSelectedProblemChange={handleSelectedProblemChange}
      data={problemsData}
      driveDetails={driveDetails}
      onEditDriveSubmit={onEditDriveSubmit}
      message={message}
    />
  );
};

export default EditDriveContainer;
