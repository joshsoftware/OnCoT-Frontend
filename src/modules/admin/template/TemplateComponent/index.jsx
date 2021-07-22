import React, { useState } from 'react';
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
  Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Dropdown,
} from 'core-components';
import MonacoEditor from 'react-monaco-editor';

toast.configure();
const TemplateComponent = (props) => {
  const { templatesIsLoading, dropdownOpen, toggle, templatesDetails, code,
    languageSelected, handleLanguage, handleCode } = props;

  if (templatesIsLoading) {
    return <Spinner />;
  }
  console.log('code', code);
  console.log('languageSelected', languageSelected);
  return (
    <Container fluid>
      <Row className='px-3 pt-3'>
        <h4>Update Problem</h4>
      </Row>
      <Row className='p-3'>
        <Col>
          <Row>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>
                {languageSelected.language}
              </DropdownToggle>
              <DropdownMenu>
                {
                  templatesDetails.map((template) => {
                    return (
                      <DropdownItem
                        id={template.language_id}
                        language={template.language}
                        code={template.code}
                        onClick={handleLanguage}
                      >
                        {template.language}
                      </DropdownItem>
                    );
                  })
                }
              </DropdownMenu>
            </ButtonDropdown>
          </Row>
          <Row className='mt-1'>
            <MonacoEditor
              id='editor'
              lg={12}
              md={12}
              className='custom-style'
              // language={lang}
              height='70vh'
              theme='vs-dark'
              value={code}
              onChange={handleCode}
            // options={options}
            // editorDidMount={editorDidMount}
            />
          </Row>
        </Col>
      </Row>
      {/* <Row className='p-3'>
        <Button className='bg-success' onClick={finishProblemEdit}>Finish and Go back</Button>
      </Row> */}

    </Container>
  );
};

TemplateComponent.propTypes = {
  // lang: PropTypes.string.isRequired,
  // code: PropTypes.string.isRequired,
  // handleCode: PropTypes.func.isRequired,
  // options: PropTypes.shape().isRequired,
  // editorDidMount: PropTypes.func.isRequired,
  templatesIsLoading: PropTypes.func.isRequired,
  dropdownOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  templatesDetails: PropTypes.objectOf(PropTypes.object).isRequired,
  code: PropTypes.string.isRequired,
  languageSelected: PropTypes.objectOf(PropTypes.object).isRequired,
  handleLanguage: PropTypes.func.isRequired,
  handleCode: PropTypes.func.isRequired,
  // handleToggle: PropTypes.func.isRequired,
  // languageSelected: PropTypes.shape({
  //   id: PropTypes.string,
  //   name: PropTypes.string,
  // }).isRequired,
  // languages: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number,
  //     name: PropTypes.string,
  //   }),
  // ).isRequired,
  // handleClick: PropTypes.func.isRequired,
  // isDropDownOpen: PropTypes.bool.isRequired,
};

export default React.memo(TemplateComponent);
