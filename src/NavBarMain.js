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
  DropdownItem
} from 'reactstrap';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";



const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 }
  },
  exit: {
    x:"-100vw",
    transition: {ease:"easeInOut" }
  }
}


function NavBarMain () {
  const [isOpen, setIsOpen] = useState(false);
  const name = "<Perryvon/>"

  const toggle = () => setIsOpen(!isOpen);

  return (
    <motion.div
    variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit">
      <Navbar className="NavBarMain border-bottom border-dark" light expand="md">
        <NavbarBrand href="/">{name}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="test" href="/aboutme">Resume</NavLink>
            </NavItem>
            <NavItem>
              <Link className="test" to="/contact">Contact</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                About Me
              </DropdownToggle>
              <DropdownMenu className="border border-dark dropDown" right>
                <DropdownItem className="NavBar-menu">
                  <NavLink style = {{color:"black"}} to="/aboutme">Option 1</NavLink>
                </DropdownItem>
                <DropdownItem className="NavBar-menu">
                  <NavLink style = {{color:"black"}} to="/aboutme">Option 2</NavLink>
                </DropdownItem>
                <DropdownItem  divider/>
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </motion.div>
  );
}

export default NavBarMain;