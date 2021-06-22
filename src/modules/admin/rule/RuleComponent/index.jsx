import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import './rule.css';

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

const RuleComponent = ({
  handleRuleChange,
  handleOnRuleAdd,
  handleOnRuleEdit,
  handleOnRuleDelete,
  handleOnRuleUpdate,
  handleOnCancel,
  rule,
  ruleErrTxt,
  isRuleEdit,
  isLoading,
  rules,
  finishProblemCreation,
}) => {
  const scrollDiv = createRef();
  const scrollSmoothHandler = () => {
    scrollDiv.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container fluid>
      <Row className='p-3 w-100 d-flex'>
        <FormGroup className='pt-3 pl-3 w-70'>
          <Label>
            <h3>Rules</h3>
          </Label>
          <Table className='bg-dark text-white fixed' striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Rule</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                rules.map((ruleIterator, key) => {
                  return (
                    <tr>
                      <td> {key + 1} </td>
                      <td className='rule border-right'> {ruleIterator.description} </td>
                      <td>
                        <Button onClick={() => { scrollSmoothHandler(); handleOnRuleEdit(ruleIterator.id); }} className='btn btn-sm btn-primary'>Edit</Button>
                        <Button onClick={() => window.confirm('Are you sure you wish to delete this item?') && handleOnRuleDelete(ruleIterator.id)} className='btn btn-sm btn-danger button_margin'>Delete</Button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </Table>
        </FormGroup>
        <FormGroup className='ml-2 p-3 w-75'>
          <Label>
            <h3>Add New Rule</h3>
          </Label>
          <FormGroup>
            <div ref={scrollDiv}>
              <h6>Rule</h6>
            </div>
            <Input type='text' invalid={ruleErrTxt !== ''} value={rule} onChange={handleRuleChange} placeholder='Rule description' />
            <FormFeedback>{ruleErrTxt}</FormFeedback>
          </FormGroup>
          {
            isRuleEdit ?
              (
                <Button onClick={handleOnRuleUpdate} className='btn btn-success'>
                  {isLoading ? (
                    <Spinner size='sm' color='light' />
                  ) : (
                    <>Update</>
                  )}
                </Button>
              )
              :
              (
                <Button onClick={handleOnRuleAdd} className='btn btn-success'>
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
      <Row className='p-3'>
        <Button className='bg-success' onClick={finishProblemCreation}>Finish and Go back</Button>
      </Row>
    </Container>
  );
};
RuleComponent.propTypes = {
  handleRuleChange: PropTypes.func.isRequired,
  handleOnRuleAdd: PropTypes.func.isRequired,
  handleOnRuleEdit: PropTypes.func.isRequired,
  handleOnRuleDelete: PropTypes.func.isRequired,
  handleOnRuleUpdate: PropTypes.func.isRequired,
  handleOnCancel: PropTypes.func.isRequired,
  rule: PropTypes.string.isRequired,
  ruleErrTxt: PropTypes.string.isRequired,
  rules: PropTypes.string.isRequired,
  isRuleEdit: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  finishProblemCreation: PropTypes.func.isRequired,
};
export default React.memo(RuleComponent);
