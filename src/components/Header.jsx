import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container,Button } from 'react-bootstrap';
import logo from '../assets/logo.jpg';


const Header = ({ isLoggedIn, handleLogout }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="FreelancerApp Logo"
            width="90"  // Adjust the width as needed
            height="80"  // Adjust the height as needed
            style={{
                borderRadius: '100%',  // Makes the image circular
              }}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link as={Link} to="/hire">Hire Freelancers</Nav.Link>
          <Nav.Link as={Link} to="/find">Find Projects</Nav.Link>
          {!isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Item>
                <Nav.Link disabled>You are logged in</Nav.Link> {/* Disabled link showing login status */}
                </Nav.Item>
                <Nav.Item>
                <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
                </Nav.Item>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;


