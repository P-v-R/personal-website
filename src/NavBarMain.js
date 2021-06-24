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
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


// logic to fade into on page reload
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 }
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" }
  }
}

/**
 * NavBarMain
 * STATE:
 *    isOpen - is drop down menu clicked? t/f
 * 
 */
function NavBarMain() {
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
              <Link className="nav-link" to="/aboutme">About Me</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/contact">Contact</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu className="border border-dark dropDown" right>
                <DropdownItem className="NavBar-menu">
                  <Link className="dropLink"
                    style={{ color: "black" }}
                    to="/resume">
                    Resume</Link>
                </DropdownItem>
                <DropdownItem className="NavBar-menu">
                  <Link className="dropLink"
                    style={{ color: "black" }}
                    to="/joke">
                    Tell me A Joke!</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Home
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