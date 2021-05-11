import React from 'react';
import PropTypes from 'prop-types';
import './testCase.css';

import {
  Container,
  Row,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Button,
  Table,
  Spinner,
} from 'core-components';

const EditProblemComponent = ({
  handleInputChange,
  handleOutputChange,
  handleMarksChange,
  handleTestCaseOnAdd,
  handleOnTestCaseEdit,
  handleOnTestCaseDelete,
  handleOnTestCaseUpdate,
  handleOnCancel,
  input,
  output,
  marks,
  inputErrTxt,
  outputErrTxt,
  marksErrTxt,
  isTestCaseEdit,
  isLoading,
  testCases,
}) => {
  return (
    <Container fluid>
      <Row className='p-3 w-100 d-flex'>
        <FormGroup className='pt-3 pl-3 w-70'>
          <Label>
            <h3>Test Cases</h3>
          </Label>
          <Table className='bg-dark text-white fixed' striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Input</th>
                <th>Output</th>
                <th>Marks</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                testCases.map((testCase, key) => {
                  return (
                    <tr>
                      <td> {key + 1} </td>
                      <td className='input border-right'> {testCase.input} </td>
                      <td className='output'> {testCase.output} </td>
                      <td> {testCase.marks} </td>
                      <td>
                        <Button onClick={() => handleOnTestCaseEdit(testCase.id)} className='btn btn-sm btn-primary'>Edit</Button>
                        <Button onClick={() => window.confirm('Are you sure you wish to delete this item?') && handleOnTestCaseDelete(testCase.id)} className='btn btn-sm btn-danger button_margin'>Delete</Button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </Table>
        </FormGroup>
        <FormGroup className='ml-5 p-3'>
          <Label>
            <h3>Add New Test case</h3>
          </Label>
          <FormGroup>
            <Label>
              <h6>Input</h6>
            </Label>
            <Input type='text' invalid={inputErrTxt !== ''} value={input} onChange={handleInputChange} placeholder='Input' />
            <FormFeedback>{inputErrTxt}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>
              <h6>Output</h6>
            </Label>
            <Input type='text' invalid={outputErrTxt !== ''} value={output} onChange={handleOutputChange} placeholder='Output 4' />
            <FormFeedback>{outputErrTxt}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>
              <h6>Marks</h6>
            </Label>
            <Input type='number' invalid={marksErrTxt !== ''} value={marks} onChange={handleMarksChange} placeholder='Marks' />
            <FormFeedback>{marksErrTxt}</FormFeedback>
          </FormGroup>
          {
            isTestCaseEdit ?
              (
                <Button onClick={handleOnTestCaseUpdate} className='btn btn-success'>
                  {isLoading ? (
                    <Spinner size='sm' color='light' />
                  ) : (
                    <>Update</>
                  )}
                </Button>
              )
              :
              (
                <Button onClick={handleTestCaseOnAdd} className='btn btn-success'>
                  {isLoading ? (
                    <Spinner size='sm' color='light' />
                  ) : (
                    <>Add</>
                  )}
                </Button>
              )
          }
          <Button onClick={handleOnCancel} className='btn btn-danger button_margin'>Cancel</Button>
        </FormGroup>
      </Row>
    </Container>
  );
};
EditProblemComponent.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleOutputChange: PropTypes.func.isRequired,
  handleMarksChange: PropTypes.func.isRequired,
  handleTestCaseOnAdd: PropTypes.func.isRequired,
  handleOnTestCaseEdit: PropTypes.func.isRequired,
  handleOnTestCaseDelete: PropTypes.func.isRequired,
  handleOnTestCaseUpdate: PropTypes.func.isRequired,
  handleOnCancel: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  output: PropTypes.string.isRequired,
  marks: PropTypes.string.isRequired,
  inputErrTxt: PropTypes.string.isRequired,
  outputErrTxt: PropTypes.string.isRequired,
  marksErrTxt: PropTypes.string.isRequired,
  testCases: PropTypes.string.isRequired,
  isTestCaseEdit: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default React.memo(EditProblemComponent);
