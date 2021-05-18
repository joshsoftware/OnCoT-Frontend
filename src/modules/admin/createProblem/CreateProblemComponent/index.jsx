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
import UpdateProblemTestCaseContainer from 'modules/admin/testCase/TestCaseContainer';

toast.configure();
const CreateProblemComponent = (props) => {
  const { handleTitleChange, handleDescriptionChange, handleCountChange, handleTimeChange,
    handleSubmit, message, isSuccess, isLoading, finishProblemCreation } = props;
  const problemSuccess = () => {
    // please redirect to problem list page
    if (isSuccess) {
      return (
        <>
          <h6 className='text-success pl-5 pt-2'>{message}</h6>
          <h6 className='text-success pl-5 pt-2'>Problem created successfully now please add the test cases</h6>
        </>
      );
    }
  };

  return (
    <Container fluid>
      <Row className='px-3 pt-3'>
        <h4>Add New Problem</h4>
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
                placeholder='Enter drive title'
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
                placeholder='Enter Submission Count'
                onChange={handleCountChange}
                required
              />
            </FormGroup>
          </Row>

          <Row>
            <FormGroup className='px-3 w-50'>
              <Label for='exampleText'>Problem Description</Label>
              <Input
                type='textarea'
                name='text'
                id='exampleText'
                placeholder='Enter drive description'
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
                placeholder='Enter Time allowed in minutes'
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
                <>Create Problem</>
              )}
            </Button>
            {problemSuccess()}
          </Row>
        </Form>
      </Row>
      <Row>
        <Row className='p-3 w-100 d-flex'>
          {/* in case of update problem use */}
          <UpdateProblemTestCaseContainer />
        </Row>
      </Row>
      <Row className='p-3'>
        <Button className='bg-success' onClick={finishProblemCreation}>Finish and Go back</Button>
      </Row>
    </Container>
  );
};

CreateProblemComponent.propTypes = {
  handleTitleChange: PropTypes.func.isRequired,
  handleDescriptionChange: PropTypes.func.isRequired,
  handleCountChange: PropTypes.func.isRequired,
  handleTimeChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  finishProblemCreation: PropTypes.func.isRequired,
};

export default React.memo(CreateProblemComponent);
