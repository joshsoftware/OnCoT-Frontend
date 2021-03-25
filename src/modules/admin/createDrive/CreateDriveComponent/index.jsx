import React, { useCallback, useEffect, useReducer, useState } from 'react';

import {
  Container,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'core-components';
import { reducer } from '../CreateDriveCotainer/reducer';

const data = [
  {
    problemId: '1',
    problemTitle: 'Title 1',
    problemCategory: 'Category 1',
    problemDifficulty: 'Difficulty 1',
    problemMarks: 'Marks 1',
  },
  {
    problemId: '2',
    problemTitle: 'Title 2',
    problemCategory: 'Category 2',
    problemDifficulty: 'Difficulty 2',
    problemMarks: 'Marks 2',
  },
  {
    problemId: '3',
    problemTitle: 'Title 3',
    problemCategory: 'Category 3',
    problemDifficulty: 'Difficulty 3',
    problemMarks: 'Marks 3',
  },
  {
    problemId: '4',
    problemTitle: 'Title 4',
    problemCategory: 'Category 4',
    problemDifficulty: 'Difficulty 4',
    problemMarks: 'Marks 4',
  },
  {
    problemId: '5',
    problemTitle: 'Title 5',
    problemCategory: 'Category 5',
    problemDifficulty: 'Difficulty 5',
    problemMarks: 'Marks 5',
  },
];

const CreateDriveComponent = () => {
  const initialProblemsState = {
    currentProblems: [],
  };
  const [addedProblems, setCurrentProblems] = useReducer(
    reducer,
    initialProblemsState,
  );

  const renderTableData = useCallback(() => {
    return addedProblems.currentProblems.map((val, index) => {
      const {
        problemId,
        problemTitle,
        problemCategory,
        problemDifficulty,
        problemMarks,
      } = val;

      return (
        <tr key={problemId}>
          <td>{problemId}</td>
          <td>{problemTitle}</td>
          <td>{problemCategory}</td>
          <td>{problemDifficulty}</td>
          <td>{problemMarks}</td>
        </tr>
      );
    });
  }, [addedProblems.currentProblems]);

  useEffect(() => {
    const e = document.getElementById('problems');

    e.addEventListener('change', (event) => {
      setCurrentProblems(data[event.target.value - 1]);
      addedProblems.currentProblems.push(data[event.target.value - 1]);
    });

    renderTableData();
  }, [setCurrentProblems]);

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
              <Input type='text' placeholder='Enter drive title' />
            </FormGroup>

            <Row className='px-3 w-100 d-flex'>
              <FormGroup className='pt-3 px-3 w-25'>
                <Label>
                  <h4>Drive Start Date</h4>
                </Label>
                <Input type='date' />
              </FormGroup>
              <FormGroup className='pt-3 w-25'>
                <Label>
                  <h4>Drive Start Date</h4>
                </Label>
                <Input type='date' />
              </FormGroup>
            </Row>

            <Row className='px-3 w-100 d-flex'>
              <FormGroup className='pt-3 pl-3 w-50'>
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
                  <tbody>{renderTableData()}</tbody>
                </Table>
              </FormGroup>

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
                  >
                    {data.map((e, key) => {
                      return (
                        <option key={e.problemId} value={e.problemId}>
                          {e.problemTitle}
                        </option>
                      );
                    })}
                  </select>
                </Row>
              </FormGroup>
            </Row>

            <Row className='px-3 w-100 d-flex'>
              <FormGroup className='pt-3 pl-3 w-50'>
                <Label>
                  <h4>Reviewers</h4>
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
                  <tbody>{renderTableData()}</tbody>
                </Table>
              </FormGroup>

              <FormGroup className='pt-3 px-5 w-25'>
                <Row>
                  <Label>
                    <h4>Add Reviewer to Drive</h4>
                  </Label>
                </Row>

                <Row className='pt-3 w-100'>
                  <select
                    className='w-100'
                    id='reviewers'
                    value={data.problemId}
                  >
                    {data.map((e, key) => {
                      return (
                        <option key={e.problemId} value={e.problemId}>
                          {e.problemTitle}
                        </option>
                      );
                    })}
                  </select>
                </Row>
              </FormGroup>
            </Row>
            <Row className='p-3'>
              <Button>Create Drive</Button>
            </Row>
          </Form>
        </Row>
      </div>
    </Container>
  );
};

export default React.memo(CreateDriveComponent);
