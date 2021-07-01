import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Container,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  Button,
  Spinner,
  Alert,
  FormFeedback,
} from 'core-components';
import Select from 'react-select';
import RuleContainer from 'modules/admin/rule/RuleContainer';

const EditDriveComponent = (props) => {
  const {
    handleDriveNameChange,
    handleDriveDescriptionChange,
    handleDriveStartChange,
    handleDriveEndChange,
    handleSelectedProblemChange,
    data,
    problemIsLoading,
    onEditDriveSubmit,
    message,
    driveDetails,
    nameErrTxt,
    descriptionErrTxt,
    handleIsAssessmentChange,
    problemErrTxt,
  } = props;
  const nothing = '';

  if (problemIsLoading) {
    return <Spinner />;
  }

  const options = [];
  data.map((e) => {
    return options.push({ value: e.id, label: e.title });
  });

  const defaultProblems = [];
  driveDetails.drive.drives_problems.map((e) => {
    const problem = options.find((x) => x.value === e.problem_id);
    return defaultProblems.push(problem);
  });

  const [isAssessment, setIsAssessment] = useState(driveDetails.drive.is_assessment !== true);
  const handleFlg = () => {
    setIsAssessment(isAssessment !== true);
    handleIsAssessmentChange(isAssessment);
  };

  return (
    <Container fluid className='h-100'>
      <div className='h-100'>
        <Row className='px-3 pt-3'>
          <h3>Update Drive</h3>
        </Row>
        <Row className='p-3'>
          <Form className='w-100'>
            <FormGroup className='px-3 w-50'>
              <Label>
                <h4>Drive Title</h4>
              </Label>
              <Input
                type='text'
                defaultValue={driveDetails.drive.name}
                onChange={handleDriveNameChange}
                invalid={nameErrTxt !== ''}
              />
              <FormFeedback>{nameErrTxt}</FormFeedback>
            </FormGroup>

            <Row className='px-3'>
              <FormGroup className='px-3 w-50'>
                <Label>
                  <h4>Drive Description</h4>
                </Label>
                <Input
                  type='textarea'
                  defaultValue={driveDetails.drive.description}
                  onChange={handleDriveDescriptionChange}
                  invalid={descriptionErrTxt !== ''}
                />
                <FormFeedback>{descriptionErrTxt}</FormFeedback>
              </FormGroup>
            </Row>

            <Row className='px-3'>
              <FormGroup className='px-3 w-50 h4'>
                External assessment
                <Input
                  className='ml-2'
                  style={{ width: '20px', height: '20px' }}
                  type='checkbox'
                  onChange={handleFlg}
                  defaultChecked={!isAssessment}
                />
              </FormGroup>
            </Row>

            {isAssessment && (
              <>
                <Row className='px-3 w-100 d-flex'>
                  <FormGroup className='pt-3 px-3 w-25'>
                    <Label>
                      <h4>Drive Start Date</h4>
                    </Label>
                    <Input
                      type='datetime-local'
                      defaultValue={driveDetails.drive.start_time ? driveDetails.drive.start_time.substring(0, 16) : ''}
                      onChange={handleDriveStartChange}
                    />
                  </FormGroup>
                  <FormGroup className='pt-3 w-25'>
                    <Label>
                      <h4>Drive End Date</h4>
                    </Label>
                    <Input
                      type='datetime-local'
                      defaultValue={driveDetails.drive.end_time ? driveDetails.drive.end_time.substring(0, 16) : ''}
                      onChange={handleDriveEndChange}
                    />
                  </FormGroup>
                </Row>
              </>
            )}

            <Row className='px-3 w-100 d-flex'>

              <FormGroup className='pt-3 px-5 w-50'>
                <Row>
                  <Label>
                    <h4>Change Problem</h4>
                  </Label>
                </Row>

                <Row className='pt-3 w-200'>
                  <Select
                    className='w-100'
                    id='problems'
                    value={options.id}
                    defaultValue={defaultProblems}
                    onChange={handleSelectedProblemChange}
                    options={options}
                    isMulti
                  />
                </Row>
                <div className='text-danger'>{problemErrTxt}</div>
              </FormGroup>
            </Row>
            <Row className='p-3'>
              <Button onClick={onEditDriveSubmit}>Update Drive</Button>
            </Row>
            <RuleContainer
              driveId={driveDetails.drive.id}
            />
          </Form>
        </Row>
      </div>
    </Container>
  );
};

EditDriveComponent.propTypes = {
  handleDriveNameChange: PropTypes.func.isRequired,
  handleDriveDescriptionChange: PropTypes.func.isRequired,
  handleDriveStartChange: PropTypes.func.isRequired,
  handleDriveEndChange: PropTypes.func.isRequired,
  handleSelectedProblemChange: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
  driveDetails: PropTypes.objectOf(PropTypes.object).isRequired,
  problemIsLoading: PropTypes.bool.isRequired,
  onEditDriveSubmit: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  nameErrTxt: PropTypes.string.isRequired,
  descriptionErrTxt: PropTypes.string.isRequired,
  handleIsAssessmentChange: PropTypes.func.isRequired,
  problemErrTxt: PropTypes.string.isRequired,
};

export default React.memo(EditDriveComponent);
