import React from 'react';
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Header: React.FC = () => (
  <header className="site-header">
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className='brand-logo'>
          <img src={logo} alt="Drop N Park"  />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav" className='menu-bar'>
          <Nav className="mx-auto">
            <NavDropdown title="Locations" id="nav-dropdown-locations">
              <NavDropdown.Item as={Link} to="/location">All Locations</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/location/city-a">City A</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/location/city-b">City B</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/help">Help</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button as={Link} to="/signin" variant="outline-primary" className="main-button">
              Sign In/Sign Up
        </Button>

      </Container>
    </Navbar>
  </header>
);

export default Header;