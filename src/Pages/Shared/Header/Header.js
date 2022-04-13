import { signOut } from "firebase/auth";
import React from "react";
import {Container,Nav,Navbar,NavDropdown, NavLink,} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  //for signout/ logout user
  const [user] =useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <>
      <Navbar collapseOnSelect  expand="lg" sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"><img
                className="w-50"
                src="https://github.com/ProgrammingHero1/genius-car-service-module-60/blob/main/src/images/logo.png?raw=true"
                alt=""
                srcSet=""
              /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link href="home#experts">Experts</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav> 
            <Nav>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              {
                user ? 
                <Nav.Link onClick={logout}>
                  Log Out 
                </Nav.Link>
                : 
                <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
