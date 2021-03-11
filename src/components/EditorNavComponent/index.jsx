import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
} from 'core-components';
import './editorNavStyle.css';

function EditorNavComponent({
  isDropDownOpen,
  handleToggle,
  languageSelected,
  languages,
  handleClick,
  handleSubmit,
}) {
  return (
    <Nav className='p-3 justify-content-between custom-nav'>
      <ButtonDropdown isOpen={isDropDownOpen} toggle={handleToggle}>
        <DropdownToggle caret className='dropdown-toggle'>
          {languageSelected.name}
        </DropdownToggle>
        <DropdownMenu className='dropdown-menu'>
          {languages.map(({ id, name }) => (
            <DropdownItem id={id} key={id} onClick={handleClick}>
              {name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </ButtonDropdown>
      <Button onClick={handleSubmit}>Submit</Button>
    </Nav>
  );
}

EditorNavComponent.propTypes = {
  isDropDownOpen: PropTypes.bool.isRequired,
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
};

export default React.memo(EditorNavComponent);
