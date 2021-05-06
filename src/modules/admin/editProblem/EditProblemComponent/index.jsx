import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Spinner,
} from 'core-components';
import UpdateProblemTestCaseContainer from 'modules/admin/editTestCase/EditTestCaseContainer';

toast.configure();
const EditProblemComponent = (props) => {
  const { handleTitleChange, handleDescriptionChange, handleCountChange, handleTimeChange,
    handleSubmit, message, isSuccess, isLoading, problemDetails,
    problemIsLoading, finishProblemEdit } = props;

  if (problemIsLoading) {
    return <Spinner />;
  }

  const problemSuccess = () => {
    if (isSuccess) {
      return (
        <>
          <h6 className='text-success pl-5 pt-2'>{message}</h6>
          <h6 className='text-success pl-5 pt-2'>Problem updated, now make changes in test cases if any</h6>
        </>
      );
    }
  };

  return (
    <Container fluid>
      <Row className='px-3 pt-3'>
        <h4>Edit Problem</h4>
      </Row>
      <Row className='p-3' onSubmit={handleSubmit}>
        <Form className='w-100'>
          <Row>
            <FormGroup className='px-3 w-50'>
              <Label>
                <h6>Problem Title</h6>
              </Label>
              <Input
                type='text'
                defaultValue={problemDetails.title}
                onChange={handleTitleChange}
                required
              />
            </FormGroup>
            <FormGroup className='px-3 w-50'>
              <Label>
                <h6>Submission Count</h6>
              </Label>
              <Input
                type='number'
                defaultValue={problemDetails.submission_count}
                onChange={handleCountChange}
                required
              />
            </FormGroup>
          </Row>

          <Row>
            <FormGroup className='w-50'>
              <Label for='exampleText'>Problem Description</Label>
              <Input
                type='textarea'
                name='text'
                id='exampleText'
                defaultValue={problemDetails.description}
                onChange={handleDescriptionChange}
                required
              />
            </FormGroup>
            <FormGroup className='px-3 w-50'>
              <Label>
                <h6>Time in minutes</h6>
              </Label>
              <Input
                type='number'
                defaultValue={problemDetails.time_in_minutes}
                onChange={handleTimeChange}
                required
              />
            </FormGroup>
          </Row>

          <Row className='p-3'>
            <Button disabled={isSuccess} className=''>
              {isLoading ? (
                <Spinner size='sm' color='light' />
              ) : (
                <>Update Problem</>
              )}
            </Button>
            {problemSuccess()}
          </Row>
        </Form>
      </Row>
      <Row>
        <Row className='p-3 w-100 d-flex'>
          <UpdateProblemTestCaseContainer />
        </Row>
      </Row>
      <Row className='p-3'>
        <Button className='bg-success' onClick={finishProblemEdit}>Finish and Go back</Button>
      </Row>
    </Container>
  );
};

EditProblemComponent.propTypes = {
  handleTitleChange: PropTypes.func.isRequired,
  handleDescriptionChange: PropTypes.func.isRequired,
  handleCountChange: PropTypes.func.isRequired,
  handleTimeChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  problemIsLoading: PropTypes.bool.isRequired,
  finishProblemEdit: PropTypes.func.isRequired,
  problemDetails: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default React.memo(EditProblemComponent);
