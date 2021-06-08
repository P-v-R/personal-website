import "./NavBarMain.css"
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavBarMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="NavBarMain border-bottom border-dark" light expand="md">
        <NavbarBrand href="/">Perry von</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="test" href="/aboutme">Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/aboutme">Contact</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                About Me
              </DropdownToggle>
              <DropdownMenu className="border border-dark dropDown" right>
                <DropdownItem className="NavBar-menu">
                  <NavLink style = {{color:"black"}} href="/aboutme">Option 1</NavLink>
                </DropdownItem>
                <DropdownItem className="NavBar-menu">
                  <NavLink style = {{color:"black"}} href="/aboutme">Option 2</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarMain;