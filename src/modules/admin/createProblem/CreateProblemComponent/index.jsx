import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'core-components';
import TestCaseContainer from 'modules/admin/testCase/CreateProblemTestCaseContainer';
import UpdateProbTestCaseCntainer from 'modules/admin/testCase/UpdateProblemTestCaseContainer';

const CreateProblemComponent = ({
  handleTitleChange,
  handleDescriptionChange,
  handleCountChange,
  handleSubmit,
  message,
  isProblemSuccess,
  isTestCaseSuccess,
  isTestCaseLoading,
}) => {
  console.log(message, isProblemSuccess);
  const problemSuccess = () => {
    if (isProblemSuccess) {
      console.log('success');
    }
  };
  const testCaseSuccess = () => {
    if (!isTestCaseLoading && isTestCaseSuccess) {
      return <h6 className='text-success pl-5 pt-2'>{message}</h6>;
    }
  };
  return (
    <Container fluid>
      <Row className='px-3 pt-3'>
        <h4>Add New Problem</h4>
      </Row>
      <Row className='p-3'>
        <Form className='w-100'>
          <Row>
            <FormGroup className='px-3 w-50'>
              <Label>
                <h6>Drive Title</h6>
              </Label>
              <Input
                type='text'
                placeholder='Enter drive title'
                onChange={handleTitleChange}
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
            />
          </FormGroup>
          {/* <TestCaseContainer /> */}
          <UpdateProbTestCaseCntainer problem_id={45} />
          <Row className='p-3'>
            <Button className='' onClick={handleSubmit}>Create Problem</Button>
            {problemSuccess()}
            {testCaseSuccess()}
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
  handleSubmit:PropTypes.func.isRequired,
  message:PropTypes.string.isRequired,
  isTestCaseSuccess:PropTypes.bool.isRequired,
  isTestCaseLoading:PropTypes.bool.isRequired,
  isProblemSuccess:PropTypes.bool.isRequired,
};

export default React.memo(CreateProblemComponent);
