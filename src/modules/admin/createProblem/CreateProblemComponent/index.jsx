import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Col,
  Alert,
} from 'core-components';
import TestCaseContainer from 'modules/admin/testCase/CreateProblemTestCaseContainer';
import './createproblem.css';

const CreateProblemComponent = (props) => {
  const {
    handleTitleChange,
    handleDescriptionChange,
    handleCountChange,
    handleSubmit,
    message,
    isSuccess,
    isTestCaseSuccess,
  } = props;

  if (isSuccess) {
    return <Alert>{message}</Alert>;
  }

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

          <FormGroup className='w-50'>
            <Label for='exampleText'>Problem Description</Label>
            <Input
              type='textarea'
              name='text'
              id='exampleText'
              onChange={handleDescriptionChange}
              required
            />
          </FormGroup>
          <Row>
            <Row className='p-3 w-100 d-flex'>
              <TestCaseContainer />
            </Row>
          </Row>
          <Row className='p-3'>
            <Col />
            <Col>
              <Button className=''>Create Problem</Button>
            </Col>
            <Col />
          </Row>
        </Form>
      </Row>
    </Container>
  );
};

CreateProblemComponent.propTypes = {
  handleTitleChange: PropTypes.func.isRequired,
  handleDescriptionChange: PropTypes.func.isRequired,
  handleCountChange: PropTypes.func.isRequired,
  isTestCaseSuccess: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};

export default React.memo(CreateProblemComponent);
