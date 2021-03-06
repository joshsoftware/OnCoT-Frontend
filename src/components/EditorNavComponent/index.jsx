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

function EditorNavComponent({
  isDropDownOpen,
  handleToggle,
  languageSelected,
  languages,
  handleClick,
  handleSubmit,
}) {
  return (
    <Nav
      className='p-3 justify-content-between'
      style={{ backgroundColor: '#272927' }}
    >
      <ButtonDropdown isOpen={isDropDownOpen} toggle={handleToggle}>
        <DropdownToggle caret style={{ minWidth: '120px', width: 'auto' }}>
          {languageSelected.name}
        </DropdownToggle>
        <DropdownMenu style={{ maxHeight: '50vh', overflowY: 'auto' }}>
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
    id: PropTypes.number,
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
