import React from 'react';
import { Nav, Container } from 'react-bootstrap';


const Navbar = () => {
  return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
            <img src="" alt="logo.png"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="Navbar-toggle-icon"> Toggle </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar;