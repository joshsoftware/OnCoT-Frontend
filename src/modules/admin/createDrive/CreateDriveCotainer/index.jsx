import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import moment from 'moment';
import getProblems from 'modules/admin/createDrive/CreateDriveCotainer/getProblems';
import { toast } from 'react-toastify';
import { validateData } from 'modules/admin/createDrive/dataValidation';
import CreateDriveComponent from 'modules/admin/createDrive/CreateDriveComponent';

import { reducer } from 'modules/admin/createDrive/CreateDriveCotainer/reducer';

import { createDriveRequestAction } from 'redux/admin/createDrive/action';
import { Spinner } from 'core-components';

const CreateDriveContainer = () => {
  const initialState =
  {
    data: {
      drive: {
        id: '',
        name: '',
        description: '',
        start_time: '',
        end_time: '',
        created_by_id: '',
        updated_by_id: '',
        organization_id: '',
      },
    },
    nameErrTxt: '',
    descriptionErrTxt: '',
    startTimeErrTxt: '',
    endTimeErrTxt: '',
    problemErrTxt: '',
    message: '',
    currentProblems: '',
    problemLoading: true,
  };
  const { message, isSuccess } = useSelector((state) => state.createDriveReducer);

  const [createDrive, setCreateDrive] = useReducer(reducer, initialState);
  const [problemIsLoading, setProblemIsLoading] = useState(true);
  const [problemsData, setProblemsData] = useState([]);

  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    start_time: yup.string().required(),
    end_time: yup.string().required(),
    drives_problems_attributes: yup.array()
      .of(
        yup.object().shape({
          problem_id: yup.number().required('Please select a problem'),
        }),
      )
      .required('Required'),
  });

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

  const handleSelectedProblemChange = useCallback(
    (event) => {
      const problem = event.value;
      setCreateDrive({
        type: 'problemErrTxt',
        payload: '',
      });
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
        type: 'nameErrTxt',
        payload: '',
      });
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
        type: 'descriptionErrTxt',
        payload: '',
      });
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
        type: 'start_timeErrTxt',
        payload: '',
      });
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
        type: 'end_timeErrTxt',
        payload: '',
      });
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
    const problemId = currentProblems;

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

    schema.isValid(postData).then(async (valid) => {
      if (!valid) {
        validateData(schema, postData, setCreateDrive);
      } else {
        dispatch(createDriveRequestAction({ postData, problemId }));
      }
    });
  };

  if (problemIsLoading) {
    return <Spinner />;
  }
  return (
    <CreateDriveComponent
      handleDriveDescriptionChange={handleDriveDescriptionChange}
      handleDriveEndChange={handleDriveEndChange}
      handleDriveNameChange={handleDriveNameChange}
      handleDriveStartChange={handleDriveStartChange}
      problemIsLoading={problemIsLoading}
      handleSelectedProblemChange={handleSelectedProblemChange}
      data={problemsData}
      onCreateDriveSubmit={onCreateDriveSubmit}
      message={message}
      isSuccess={isSuccess}
      nameErrTxt={createDrive.nameErrTxt}
      descriptionErrTxt={createDrive.descriptionErrTxt}
      startTimeErrTxt={createDrive.startTimeErrTxt}
      endTimeErrTxt={createDrive.endTimeErrTxt}
      problemErrTxt={createDrive.problemErrTxt}
      createDrive={createDrive}
    />
  );
};

export default React.memo(CreateDriveContainer);
