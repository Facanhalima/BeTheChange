import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="BeTheChangeNavBarNova.png"
            alt="Be the Change Logo"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="px-3">
              Início
            </Nav.Link>
            <Nav.Link as={Link} to="/sobre" className="px-3">
              Sobre o Projeto
            </Nav.Link>
            <Nav.Link as={Link} to="/programacoes" className="px-3">
              Programações
            </Nav.Link>
            <Nav.Link as={Link} to="/profissionais" className="px-3">
              Profissionais
            </Nav.Link>
            <Nav.Link as={Link} to="/contato" className="px-3">
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;