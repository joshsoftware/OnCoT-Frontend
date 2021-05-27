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
import { validateData } from 'modules/admin/editDrive/dataValidation';
import EditDriveComponent from 'modules/admin/editDrive/EditDriveComponent';
import { toast } from 'react-toastify';
import { reducer } from 'modules/admin/createDrive/CreateDriveCotainer/reducer';
import * as yup from 'yup';
import { editDriveRequestAction } from 'redux/admin/editDrive/action';
import { Spinner } from 'core-components';

const EditDriveContainer = () => {
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
    currentProblems: [],
    problemLoading: true,
  };
  const [driveDetails, setDriveDetails] = useState();
  const [editDrive, setEditDrive] = useReducer(reducer, initialState);
  const [problemIsLoading, setProblemIsLoading] = useState(true);
  const [problemsData, setProblemsData] = useState([]);
  const { message } = editDrive;
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
    if (problems.length === 0) {
      dispatch({
        type: 'PROBLEMS',
        payload: 'PROBLEMS',
      });
      return toast.error('You haven\'t added any problems yet. Please add problem to edit drive');
    }
    if (!problemLoading) {
      setProblemsData(problems);
      setProblemIsLoading(problemLoading);
    }
  }, [problemIsLoading]);

  const handleSelectedProblemChange = useCallback(
    (event) => {
      const problem = event.value;
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
        type: 'nameErrTxt',
        payload: '',
      });
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
        type: 'descriptionErrTxt',
        payload: '',
      });
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

    schema.isValid(putData).then(async (valid) => {
      if (!valid) {
        validateData(schema, putData, setEditDrive);
      } else {
        dispatch(editDriveRequestAction({ putData, problemId }));
      }
    });
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
      nameErrTxt={editDrive.nameErrTxt}
      descriptionErrTxt={editDrive.descriptionErrTxt}
    />
  );
};

export default EditDriveContainer;
