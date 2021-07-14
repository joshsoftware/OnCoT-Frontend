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

const CreateDriveComponent = (props) => {
  const {
    handleDriveNameChange,
    handleDriveDescriptionChange,
    handleDriveStartChange,
    handleDriveEndChange,
    handleSelectedProblemChange,
    data,
    problemIsLoading,
    onCreateDriveSubmit,
    message,
    isSuccess,
    nameErrTxt,
    descriptionErrTxt,
    problemErrTxt,
    createDrive,
    handleIsAssessmentChange,
  } = props;
  const nothing = '';

  if (problemIsLoading) {
    return (
      <Container className='d-flex justify-content-center align-content'>
        <Spinner />
      </Container>
    );
  }

  const options = [];
  data.map((e) => {
    return options.push({ value: e.id, label: e.title });
  });

  const driveSuccess = () => {
    if (isSuccess) {
      return (
        <>
          <h6 className='text-success pl-5 pt-2'>{message}</h6>
          <h6 className='text-success pl-5 pt-2'>Default rules will be added automatically, delete/edit if necessary and add extra rules if You want</h6>
          <RuleContainer />
        </>
      );
    }
  };

  const [isAssessment, setIsAssessment] = useState(true);

  const handleFlg = () => {
    setIsAssessment(isAssessment !== true);
    handleIsAssessmentChange(isAssessment);
  };

  return (
    <Container fluid className='h-100'>
      <div className='h-100'>
        <Row className='px-3 pt-3'>
          <h3>Add New Drive</h3>
        </Row>
        <Row className='p-3'>
          <Form className='w-100'>
            <FormGroup className='px-3 w-50'>
              <Label>
                <h4>Drive Title</h4>
              </Label>
              <Input
                type='text'
                placeholder='Enter drive title'
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
                  placeholder='Enter drive description'
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
                      onChange={handleDriveStartChange}
                      placeholder='dd/mm/yyyy, hh:mm'
                    />
                  </FormGroup>
                  <FormGroup className='pt-3 w-25'>
                    <Label>
                      <h4>Drive End Date</h4>
                    </Label>
                    <Input
                      type='datetime-local'
                      onChange={handleDriveEndChange}
                      placeholder='dd/mm/yyyy, hh:mm'
                    />
                  </FormGroup>
                </Row>
              </>
            )}

            <Row className='px-3 w-100 d-flex'>

              <FormGroup className='pt-3 px-5 w-50'>
                <Row>
                  <Label>
                    <h4>Add Problem to Drive</h4>
                  </Label>
                </Row>

                <Row className='pt-3 w-200'>
                  <Select
                    className='w-100'
                    id='problems'
                    value={options.id}
                    onChange={handleSelectedProblemChange}
                    isMulti
                    options={options}
                  />
                </Row>
                <div className='text-danger'>{problemErrTxt}</div>
              </FormGroup>
            </Row>
            <Row className='p-3'>
              <Button disabled={isSuccess} onClick={onCreateDriveSubmit}>Create Drive</Button>
            </Row>
            {driveSuccess()}
          </Form>
        </Row>
      </div>
    </Container>
  );
};

CreateDriveComponent.propTypes = {
  handleDriveNameChange: PropTypes.func.isRequired,
  handleDriveDescriptionChange: PropTypes.func.isRequired,
  handleDriveStartChange: PropTypes.func.isRequired,
  handleDriveEndChange: PropTypes.func.isRequired,
  handleSelectedProblemChange: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
  problemIsLoading: PropTypes.bool.isRequired,
  onCreateDriveSubmit: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  nameErrTxt: PropTypes.string.isRequired,
  descriptionErrTxt: PropTypes.string.isRequired,
  problemErrTxt: PropTypes.string.isRequired,
  createDrive: PropTypes.objectOf(PropTypes.any).isRequired,
  handleIsAssessmentChange: PropTypes.func.isRequired,
};

export default React.memo(CreateDriveComponent);
