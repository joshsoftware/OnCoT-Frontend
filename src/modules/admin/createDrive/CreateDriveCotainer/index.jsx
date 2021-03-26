import axios from 'axios';
import React, { useCallback, useEffect, useReducer, useState } from 'react';

import CreateDriveComponent from 'modules/admin/createDrive/CreateDriveComponent';

import { SERVER_URL } from 'constants/appConstants';
import local from 'utils/local';
import { createDriveRequestAction } from 'redux/admin/createDrive/action';
import { useDispatch } from 'react-redux';
import { reducer, initialState } from './reducer';

const CreateDriveContainer = () => {
  const [createDrive, setCreateDrive] = useReducer(reducer, initialState);
  const [problemLoading, setProblemLoading] = useState(true);
  const [problemsData, setProblemsData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${SERVER_URL}api/v1/admin/problems`, {
        headers: {
          'access-token': local.getItem('accessToken'),
          'token-type': local.getItem('token-type'),
          client: local.getItem('client'),
          expiry: local.getItem('uid'),
          uid: local.getItem('uid'),
        },
      })
      .then((response) => {
        setProblemsData(response.data.data.problems);
        setProblemLoading(false);
      })
      .catch((error) => {});
  }, []);

  const renderTableData = useCallback(() => {
    return createDrive.currentProblems.map((val, index) => {
      const {
        problemId,
        problemTitle,
        problemCategory,
        problemDifficulty,
        problemMarks,
      } = val;

      return (
        <tr key={problemId}>
          <td>{problemId}</td>
          <td>{problemTitle}</td>
          <td>{problemCategory}</td>
          <td>{problemDifficulty}</td>
          <td>{problemMarks}</td>
        </tr>
      );
    });
  }, [createDrive.currentProblems]);

  const handleSelectedProblemChange = useCallback(
    (event) => {
      const problem = event.target.value;
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

    const postData = {
      id,
      name,
      description,
      start_time,
      end_time,
    };
    dispatch(createDriveRequestAction({ postData, problemId }));
  };

  return (
    <CreateDriveComponent
      renderTableData={renderTableData}
      handleDriveDescriptionChange={handleDriveDescriptionChange}
      handleDriveEndChange={handleDriveEndChange}
      handleDriveNameChange={handleDriveNameChange}
      handleDriveStartChange={handleDriveStartChange}
      problemLoading={problemLoading}
      handleSelectedProblemChange={handleSelectedProblemChange}
      data={problemsData}
      onCreateDriveSubmit={onCreateDriveSubmit}
    />
  );
};

export default CreateDriveContainer;
