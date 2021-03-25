import React, { useState } from 'react';
import {
  Container,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
} from 'core-components';

const CreateProblemComponent = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(() => !dropdownOpen);
  const [dropdownOpenDifficulty, setDropdownOpenDifficulty] = useState(false);
  const toggleDifficulty = () => setDropdownOpenDifficulty(() => !dropdownOpenDifficulty);

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
              <Input type='text' placeholder='Enter drive title' />
            </FormGroup>
          </Row>

          <Row className='p-3'>
            <FormGroup className='mr-5'>
              <Label>
                <h6>Category</h6>
              </Label>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                  Select Category
                </DropdownToggle>
                <DropdownMenu container='body'>
                  <DropdownItem>Array</DropdownItem>
                  <DropdownItem>Loops</DropdownItem>
                  <DropdownItem>String</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </FormGroup>

            <FormGroup className='pl-5'>
              <Label>
                <h6>Difficulty</h6>
              </Label>
              <Dropdown isOpen={dropdownOpenDifficulty} toggle={toggleDifficulty}>
                <DropdownToggle caret>
                  Select Difficulty
                </DropdownToggle>
                <DropdownMenu container='body'>
                  <DropdownItem>Easy</DropdownItem>
                  <DropdownItem>Medium</DropdownItem>
                  <DropdownItem>Hard</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </FormGroup>

          </Row>
          <FormGroup className='w-50'>
            <Label for='exampleText'>Problem Description</Label>
            <Input type='textarea' name='text' id='exampleText' />
            <Button className='float-right m-2'>Save</Button>
          </FormGroup>

          <Row className='p-3 w-100 d-flex'>
            <FormGroup className='pt-3 pl-3 w-50'>
              <Label>
                <h6>Problems</h6>
              </Label>
              <Table striped>
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

          <Row className='p-3'>
            <Button className=''>Create Drive</Button>
          </Row>
        </Form>
      </Row>
    </Container>
  );
};

export default React.memo(CreateProblemComponent);
