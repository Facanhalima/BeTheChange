import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Ajusta o padding do conteúdo principal quando o menu é aberto/fechado
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      if (isExpanded && window.innerWidth < 992) {
        mainContent.style.paddingTop = '320px'; // Ajuste este valor conforme necessário
        mainContent.style.transition = 'padding-top 0.3s ease-in-out';
      } else {
        mainContent.style.paddingTop = '76px'; // Altura da navbar + padding
      }
    }
  }, [isExpanded]);

  // Fecha o menu quando uma rota é alterada
  useEffect(() => {
    setIsExpanded(false);
  }, [location]);

  return (
    <Navbar 
      bg={isScrolled || isExpanded ? 'white' : 'transparent'} 
      expand="lg" 
      fixed="top" 
      expanded={isExpanded}
      onToggle={(expanded) => setIsExpanded(expanded)}
      className={`transition-all duration-300 ${(isScrolled || isExpanded) ? 'shadow-sm py-2' : 'py-3'}`}
    >
      <Container fluid="lg" className="px-4">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="BeTheChangeNavBarNova.png"
            alt="Be the Change Logo"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="border-0 shadow-none"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={`px-3 ${location.pathname === '/' ? 'active fw-bold' : ''}`}
            >
              Início
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/sobre" 
              className={`px-3 ${location.pathname === '/sobre' ? 'active fw-bold' : ''}`}
            >
              Sobre o Projeto
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/programacoes" 
              className={`px-3 ${location.pathname === '/programacoes' ? 'active fw-bold' : ''}`}
            >
              Programações
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/profissionais" 
              className={`px-3 ${location.pathname === '/profissionais' ? 'active fw-bold' : ''}`}
            >
              Profissionais
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contato" 
              className={`px-3 ${location.pathname === '/contato' ? 'active fw-bold' : ''}`}
            >
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;