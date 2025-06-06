import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
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
      expand="lg"
      fixed="top"
      className={`py-3 transition-all ${
        isScrolled ? 'shadow-sm bg-white' : 'bg-transparent'
      }`}
      expanded={isExpanded}
    >
      <Container fluid="lg" className="px-4">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="BeTheChangeNavBarNova.png"
            alt="Be the Change Logo"
            height="60"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          onClick={() => setIsExpanded(!isExpanded)}
          className="border-0 p-0"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={`px-3 ${location.pathname === '/' ? 'active' : ''}`}
            >
              Início
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/sobre" 
              className={`px-3 ${location.pathname === '/sobre' ? 'active' : ''}`}
            >
              Sobre
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/profissionais" 
              className={`px-3 ${location.pathname === '/profissionais' ? 'active' : ''}`}
            >
              Profissionais
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/programacoes" 
              className={`px-3 ${location.pathname === '/programacoes' ? 'active' : ''}`}
            >
              Serviços
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/depoimentos" 
              className={`px-3 ${location.pathname === '/depoimentos' ? 'active' : ''}`}
            >
              Depoimentos
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Link to="/contato" className="text-decoration-none">
              <Button
                variant="primary"
                className="rounded-pill px-4"
              >
                Fale Conosco
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;