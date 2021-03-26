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
  Table,
} from 'core-components';

const CreateProblemComponent = ({
  handleTitleChange,
  handleDescriptionChange,
  handleCountChange,
  handleSubmit,
  message,
  isSuccess,
}) => {
  console.log(message, isSuccess);
  const problemSuccess = () => {
    if (isSuccess) {
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

          <Row className='p-3'>
            <Button className='' onClick={handleSubmit}>Create Problem</Button>
            {problemSuccess()}
          </Row>
        </Form>
      </Row>
      <Row>

        <Row className='p-3 w-100 d-flex'>
          <FormGroup className='pt-3 pl-3 w-50'>
            <Label>
              <h6>Test Cases</h6>
            </Label>
            <Table className='bg-dark text-white' striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Input</th>
                  <th>Output</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody />
            </Table>
          </FormGroup>

          <FormGroup className='ml-5 p-3'>
            <Label>
              <h6>Add New Test case</h6>
            </Label>
            <FormGroup>
              <Label>
                <h6>Input</h6>
              </Label>
              <Input type='text' placeholder='Input' />
            </FormGroup>

            <FormGroup>
              <Label>
                <h6>Output</h6>
              </Label>
              <Input type='text' placeholder='Output' />
            </FormGroup>

            <FormGroup>
              <Label>
                <h6>Marks</h6>
              </Label>
              <Input type='text' placeholder='Marks' />
            </FormGroup>

            <Button className='m-2'>Add</Button>
            <Button className='m-2'>Cancel</Button>
          </FormGroup>
        </Row>
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
  isSuccess:PropTypes.bool.isRequired,
};

export default React.memo(CreateProblemComponent);
