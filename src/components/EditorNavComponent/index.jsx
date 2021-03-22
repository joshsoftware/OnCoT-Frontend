import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'core-components';
import './editorNavStyle.css';

function EditorNavComponent({
  isDropDownOpen,
  handleToggle,
  languageSelected,
  languages,
  handleClick,
  handleSubmit,
  toggle,
  modal,
  errorMessage,
  isError,
  submissionAllowed,
  totalTestcases,
  testcasesPassed,
  marks,
}) {
  const getModalBody = () => {
    if (!isError) {
      return (
        <>
          <p>Submission Left: {submissionAllowed}</p>
          <p>Total Test Cases: {totalTestcases}</p>
          <p>Passed Test Cases: {testcasesPassed}</p>
          <p>Your Score: {marks}</p>
        </>
      );
    }
    return (
      <p className='text-danger'>{errorMessage}</p>
    );
  };

  return (
    <Nav className='p-3 pb-2 justify-content-between custom-nav module'>
      <ButtonDropdown isOpen={isDropDownOpen} toggle={handleToggle}>
        <DropdownToggle caret className='dropdown-toggle bg-dark border-0'>
          {languageSelected.name}
        </DropdownToggle>
        <DropdownMenu className='dropdown-menu bg-secondary'>
          {languages.map(({ id, name }) => (
            <DropdownItem id={id} key={id} onClick={handleClick}>
              {name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </ButtonDropdown>
      <Button className='custom-btn bg-color border-0' onClick={handleSubmit}>Submit</Button>
      <Modal className='modal-color' isOpen={modal} toggle={toggle}>
        <ModalHeader className='bg-success text-white' toggle={toggle}>Final Output</ModalHeader>
        <ModalBody>{getModalBody()}</ModalBody>
        <ModalFooter className='border-0'>
          <Button color='danger' onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </Nav>
  );
}

EditorNavComponent.propTypes = {
  isDropDownOpen: PropTypes.bool.isRequired,
  modal: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  languageSelected: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  submissionAllowed: PropTypes.number.isRequired,
  totalTestcases: PropTypes.number.isRequired,
  testcasesPassed: PropTypes.number.isRequired,
  marks: PropTypes.number.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default React.memo(EditorNavComponent);
