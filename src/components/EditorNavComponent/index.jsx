import {
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
} from "core-components";

function EditorNavComponent({
  dropDownOpen,
  handleToggle,
  languageSelected,
  languages,
  handleClick,
  handleSubmit,
}) {
  return (
    <Nav
      className="p-3 justify-content-between"
      style={{ backgroundColor: "#272927" }}
    >
      <ButtonDropdown isOpen={dropDownOpen} toggle={handleToggle}>
        <DropdownToggle caret style={{ minWidth: "120px", width: "auto" }}>
          {languageSelected.name}
        </DropdownToggle>
        <DropdownMenu style={{ maxHeight: "50vh", overflowY: "auto" }}>
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

export default EditorNavComponent;
