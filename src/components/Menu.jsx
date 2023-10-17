import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
      <Navbar bg="primary" datas-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Practica 6</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/acerca" key="from">Acerca</Nav.Link>
              <Nav.Link href="/form" key="form">Form</Nav.Link>
              <Nav.Link href="/card" key="card">Card</Nav.Link>
              <Nav.Link href="/table" key="table">Tabla</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>  
  );
}

export default App;
