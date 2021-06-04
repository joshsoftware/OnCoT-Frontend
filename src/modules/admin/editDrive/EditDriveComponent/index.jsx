import PropTypes from 'prop-types';
import React from 'react';
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
  } = props;
  const nothing = '';

  if (problemIsLoading) {
    return <Spinner />;
  }
  const len = driveDetails.drive.drives_problems.length;
  const details = driveDetails.drive.drives_problems[len - 1];
  const options = [];
  data.map((e) => {
    return options.push({ value: e.id, label: e.title });
  });

  return (
    <Container fluid className='h-100'>
      <div className='h-100'>
        <Row className='px-3 pt-3'>
          <h3>Edit Drive</h3>
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

            <Row className='px-3 w-100 d-flex'>
              <FormGroup className='pt-3 px-3 w-25'>
                <Label>
                  <h4>Drive Start Date</h4>
                </Label>
                <Input
                  type='datetime-local'
                  defaultValue={driveDetails.drive.start_time.substring(0, 16)}
                  onChange={handleDriveStartChange}
                />
              </FormGroup>
              <FormGroup className='pt-3 w-25'>
                <Label>
                  <h4>Drive End Date</h4>
                </Label>
                <Input
                  type='datetime-local'
                  defaultValue={driveDetails.drive.end_time.substring(0, 16)}
                  onChange={handleDriveEndChange}
                />
              </FormGroup>
            </Row>

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
                    placeholder={options.find((x) => x.value === details.problem_id).label}
                    onChange={handleSelectedProblemChange}
                    options={options}
                  />
                </Row>
              </FormGroup>
            </Row>
            <Row className='p-3'>
              <Button onClick={onEditDriveSubmit}>Edit Drive</Button>
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
};

export default React.memo(EditDriveComponent);
