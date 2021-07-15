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
import { useHistory } from 'react-router-dom';
import { ADMIN_ROUTES, ROUTES } from 'constants/routeConstants';
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
        is_assessment: false,
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
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    currentProblems: yup.array().min(1, 'Please select problem(s)'),
  });

  useEffect(async () => {
    const driveData = await getDriveDetails();
    if (driveData) {
      setDriveDetails(driveData);
    }

    const { name, description, start_time, end_time,
      drives_problems, is_assessment } = driveData.drive;

    setEditDrive({
      type: 'drive',
      payload: {
        name,
        description,
        start_time,
        end_time,
      },
    });
    setEditDrive({
      type: 'is_assessment',
      payload: is_assessment === true,
    });
    setEditDrive({
      type: 'resetCurrentProblems',
    });

    for (let i = 0; i < drives_problems.length; i += 1) {
      setEditDrive({
        type: 'problem',
        payload: drives_problems[i].problem_id,
      });
    }

    const data = await getProblems();
    const { problems, problemLoading } = data;
    if (problems.length === 0) {
      history.push(ROUTES.ADMIN + ADMIN_ROUTES.PROBLEMS);
      return toast.error('You haven\'t added any problems yet. Please add problem to edit drive');
    }
    if (!problemLoading) {
      setProblemsData(problems);
      setProblemIsLoading(problemLoading);
    }
  }, [problemIsLoading]);

  const handleSelectedProblemChange = useCallback(
    (event) => {
      setEditDrive({
        type: 'problemErrTxt',
        payload: '',
      });
      setEditDrive({
        type: 'resetCurrentProblems',
      });
      for (let i = 0; i < event.length; i += 1) {
        setEditDrive({
          type: 'problem',
          payload: event[i].value,
        });
      }
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

  const handleIsAssessmentChange = useCallback(
    (assessmentStatus) => {
      const isAssessment = assessmentStatus;
      setEditDrive({
        type: 'is_assessment',
        payload: isAssessment,
      });
    },
    [editDrive.data.drive.is_assessment],
  );

  const onEditDriveSubmit = () => {
    const {
      data: {
        drive: { id, name, description, start_time, end_time, is_assessment },
      },
      currentProblems,
    } = editDrive;

    let drives_problems_attributes = [];
    const newProblems = [];

    for (let i = 0; i < currentProblems.length; i += 1) {
      let flg = 1;
      for (let j = 0; j < driveDetails.drive.drives_problems.length; j += 1) {
        if (driveDetails.drive.drives_problems[j].problem_id === currentProblems[i]) {
          flg = 0;
          break;
        }
      }
      if (flg) newProblems.push(currentProblems[i]);
    }

    const oldProblems =
      driveDetails.drive.drives_problems.filter((x) => !currentProblems.includes(x.problem_id));
    for (let i = 0; i < oldProblems.length; i += 1) {
      drives_problems_attributes.push(
        {
          id: oldProblems[i].id,
          problem_id: oldProblems[i].problem_id,
          _destroy: true,
        },
      );
    }

    for (let i = 0; i < newProblems.length; i += 1) {
      drives_problems_attributes.push(
        {
          problem_id: newProblems[i],
          _destroy: false,
        },
      );
    }

    const putData = {
      name,
      description,
      start_time,
      end_time,
      drives_problems_attributes,
      is_assessment,
    };
    const validData = {
      name,
      description,
      currentProblems,
    };

    schema.isValid(validData).then(async (valid) => {
      if (!valid) {
        validateData(schema, validData, setEditDrive);
      } else {
        dispatch(editDriveRequestAction({ putData }));
        drives_problems_attributes = [];
      }
    });
  };

  const defaultProblems = [];

  for (let i = 0; i < problemsData.length; i += 1) {
    if (driveDetails.drive.drives_problems) {
      const isProblemExist = driveDetails.drive.drives_problems.find(
        (ele) => ele.problem_id === problemsData[i].id,
      );
      if (isProblemExist) {
        defaultProblems.push({ value: problemsData[i].id, label: problemsData[i].title });
      }
    }
  }

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
      handleIsAssessmentChange={handleIsAssessmentChange}
      problemErrTxt={editDrive.problemErrTxt}
      defaultProblems={defaultProblems}
    />
  );
};

export default EditDriveContainer;
