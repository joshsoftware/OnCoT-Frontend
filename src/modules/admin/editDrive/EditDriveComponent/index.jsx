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
} from 'core-components';

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
  } = props;
  const nothing = '';

  if (problemIsLoading) {
    return <Spinner />;
  }

  return (
    <Container fluid className='h-100'>
      <div className='overflow-auto h-100'>
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
              />
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
                />
              </FormGroup>
            </Row>

            <Row className='px-3 w-100 d-flex'>
              <FormGroup className='pt-3 px-3 w-25'>
                <Label>
                  <h4>Drive Start Date</h4>
                </Label>
                <Input
                  type='datetime-local'
                  defaultValue={driveDetails.drive.start_time}
                  onChange={handleDriveStartChange}
                />
              </FormGroup>
              <FormGroup className='pt-3 w-25'>
                <Label>
                  <h4>Drive End Date</h4>
                </Label>
                <Input
                  type='datetime-local'
                  defaultValue={driveDetails.drive.end_time}
                  onChange={handleDriveEndChange}
                />
              </FormGroup>
            </Row>

            <Row className='px-3 w-100 d-flex'>

              <FormGroup className='pt-3 px-5 w-25'>
                <Row>
                  <Label>
                    <h4>Add Problem to Drive</h4>
                  </Label>
                </Row>

                <Row className='pt-3 w-100'>
                  <select
                    className='w-100'
                    id='problems'
                    value={data.problemId}
                    onChange={handleSelectedProblemChange}
                  >
                    <option disabled selected>Select Problem</option>
                    {data.map((e, key) => {
                      return (
                        <option key={e.id} value={e.id}>
                          {e.title}
                        </option>
                      );
                    })}
                  </select>
                </Row>
              </FormGroup>
            </Row>
            <Row className='p-3'>
              <Button onClick={onEditDriveSubmit}>Edit Drive</Button>
            </Row>
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
};

export default React.memo(EditDriveComponent);
