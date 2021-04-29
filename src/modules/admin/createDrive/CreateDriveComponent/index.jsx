import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Container,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
  Spinner,
  Alert,
  Editor,
} from 'core-components';

const CreateDriveComponent = (props) => {
  const {
    handleDriveNameChange,
    handleDriveStartChange,
    handleDriveEndChange,
    handleSelectedProblemChange,
    data,
    problemIsLoading,
    onCreateDriveSubmit,
    message,
    editorState,
    onEditorStateChange,
    val,
  } = props;
  const nothing = '';

  if (problemIsLoading) {
    return (
      <Container className='d-flex justify-content-center align-content'>
        <Spinner />
      </Container>
    );
  }
  if (message !== nothing) {
    return <Alert>{message}</Alert>;
  }

  return (
    <Container fluid className='h-100'>
      <div className='overflow-auto h-100'>
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
              />
            </FormGroup>

            <Row className='px-3'>
              <Col xl={10} lg={10} md={10} xs={10} sm={10}>
                <FormGroup className='px-3 w-50'>
                  <Label>
                    <h4>Drive Description</h4>
                  </Label>
                  {/* <Input
                  type='textarea'
                  placeholder='Enter drive title'
                  onChange={handleDriveDescriptionChange}
                /> */}
                  <div className='border'>
                    <Editor
                      editorState={editorState}
                      toolbarClassName='toolbarClassName'
                      wrapperClassName='wrapperClassName'
                      editorClassName='editorClassName'
                      onEditorStateChange={onEditorStateChange}
                    />
                  </div>
                </FormGroup>
              </Col>
              <Col xl={2} lg={2} md={2} xs={2} sm={2}>
                <textarea
                  className='w-100 h-100'
                  id='pre-textarea'
                  value={val}
                />
              </Col>
            </Row>

            <Row className='px-3 w-100 d-flex'>
              <FormGroup className='pt-3 px-3 w-25'>
                <Label>
                  <h4>Drive Start Date</h4>
                </Label>
                <Input
                  type='datetime-local'
                  onChange={handleDriveStartChange}
                />
              </FormGroup>
              <FormGroup className='pt-3 w-25'>
                <Label>
                  <h4>Drive End Date</h4>
                </Label>
                <Input type='datetime-local' onChange={handleDriveEndChange} />
              </FormGroup>
            </Row>

            <Row className='px-3 w-100 d-flex'>
              {/* We need this code for later */}
              {/* <FormGroup className='pt-3 pl-3 w-50'>
                <Label>
                  <h4>Problems</h4>
                </Label>
                <Table dark>
                  <thead>
                    <tr>
                      <th>Problem Id</th>
                      <th>Problem Title</th>
                      <th>Category</th>
                      <th>Difficulty</th>
                      <th>Marks</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>{renderTableData}</tbody>
                </Table>
              </FormGroup> */}

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
                    <option disabled selected>
                      Select Problem
                    </option>
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
              <Button onClick={onCreateDriveSubmit}>Create Drive</Button>
            </Row>
          </Form>
        </Row>
      </div>
    </Container>
  );
};

CreateDriveComponent.propTypes = {
  handleDriveNameChange: PropTypes.func.isRequired,
  handleDriveStartChange: PropTypes.func.isRequired,
  handleDriveEndChange: PropTypes.func.isRequired,
  handleSelectedProblemChange: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
  problemIsLoading: PropTypes.bool.isRequired,
  onCreateDriveSubmit: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  editorState: PropTypes.bool.isRequired,
  onEditorStateChange: PropTypes.func.isRequired,
  val: PropTypes.string.isRequired,
};

export default React.memo(CreateDriveComponent);
