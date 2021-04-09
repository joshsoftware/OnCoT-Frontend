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
import Loading from 'shared-components/Loading';

let clicks = 0;
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
  handleFinish,
  toggleFinish,
  finishModal,
  isLoading,
  limit,
}) {
  const loading = () => {
    if (isLoading) {
      return (
        <Loading />
      );
    }
  };

  const getModalBody = () => {
    if (!isError) {
      return (
        <>
          <p>Submission Left: {submissionAllowed}</p>
          <p>Total Test Cases: {totalTestcases}</p>
          <p>Passed Test Cases: {testcasesPassed}</p>
        </>
      );
    }
    return (
      <p className='text-white'>{errorMessage}</p>
    );
  };

  // needed count of clicks on submit button in order to show finish button
  const onSubmitClick = () => {
    clicks += 1;
    handleSubmit();
  };

  const getFinishButton = () => {
    if (clicks >= 1) {
      return <Button className='bg-danger border-0 ml-3' onClick={toggleFinish}>Finish</Button>;
    }
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
      <div>
        <Button className='custom-btn bg-color border-0' onClick={onSubmitClick}>
          {limit ? 'Limit Exceeded' : 'Submit' }
        </Button>
        {getFinishButton()}
      </div>

      <Modal className='modal-color' isOpen={modal} toggle={toggle}>
        <ModalHeader className='bg-dark text-white border-0' toggle={toggle}>Final Output</ModalHeader>
        <ModalBody className='bg-secondary border-0 text-white'>
          {loading()}
          {getModalBody()}
        </ModalBody>
        <ModalFooter className='border-0 bg-secondary'>
          <Button color='danger' onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <Modal className='modal-color' isOpen={finishModal} toggle={toggleFinish}>
        <ModalHeader className='bg-dark text-white border-0' toggle={toggleFinish}>Finish the test</ModalHeader>
        <ModalBody className='bg-secondary border-0 text-white'>
          <p>Do you want to Submit the test?</p>
        </ModalBody>
        <ModalFooter className='border-0 bg-secondary'>
          <Button color='danger' onClick={toggleFinish}>Cancel</Button>
          <Button color='success' onClick={handleFinish}>Finish</Button>
        </ModalFooter>
      </Modal>

    </Nav>
  );
}

EditorNavComponent.propTypes = {
  isDropDownOpen: PropTypes.bool.isRequired,
  modal: PropTypes.bool.isRequired,
  finishModal: PropTypes.bool.isRequired,
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
  handleFinish: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  toggleFinish:PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  submissionAllowed: PropTypes.number.isRequired,
  totalTestcases: PropTypes.number.isRequired,
  testcasesPassed: PropTypes.number.isRequired,
  isError: PropTypes.bool.isRequired,
  isLoading:PropTypes.bool.isRequired,
  limit:PropTypes.bool.isRequired,
};

export default React.memo(EditorNavComponent);
