import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Topbar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Drop & Park Admin</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#">Profile</Nav.Link>
          <Nav.Link href="#">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Topbar;
