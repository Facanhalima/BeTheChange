import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';
import Professionals from './components/Professionals';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css';
import './styles/global.css';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      delay: 50,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="app d-flex flex-column min-vh-100">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Navigation />
      <main id="main-content" className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/programacoes" element={<Programs />} />
          <Route path="/profissionais" element={<Professionals />} />
          <Route path="/depoimentos" element={<Testimonials />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>
      <footer className="bg-dark text-light py-5 mt-auto">
        <Container fluid="lg" className="px-4">
          <Row className="gy-4">
            <Col lg={4}>
              <h5 className="mb-4">Be the Change Rio</h5>
              <p className="mb-4">
                Desenvolvendo autonomia e qualidade de vida para jovens com TEA
                através de atividades práticas e vivências reais.
              </p>
              <div className="social-links">
                <a 
                  href="https://instagram.com/bethechange_rio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-light me-3"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a 
                  href="https://wa.me/5521996278101" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-light me-3"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </Col>
            <Col lg={2}>
              <h6 className="mb-3">Links Rápidos</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-light text-decoration-none">Início</Link>
                </li>
                <li className="mb-2">
                  <Link to="/sobre" className="text-light text-decoration-none">Sobre</Link>
                </li>
                <li className="mb-2">
                  <Link to="/profissionais" className="text-light text-decoration-none">Profissionais</Link>
                </li>
                <li className="mb-2">
                  <Link to="/programacoes" className="text-light text-decoration-none">Serviços</Link>
                </li>
                <li className="mb-2">
                  <Link to="/depoimentos" className="text-light text-decoration-none">Depoimentos</Link>
                </li>
                <li className="mb-2">
                  <Link to="/contato" className="text-light text-decoration-none">Contato</Link>
                </li>
              </ul>
            </Col>
            <Col lg={3}>
              <h6 className="mb-3">Nossos Serviços</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/programacoes" className="text-light text-decoration-none">Desenvolvimento de Autonomia</Link>
                </li>
                <li className="mb-2">
                  <Link to="/programacoes" className="text-light text-decoration-none">Habilidades Sociais</Link>
                </li>
                <li className="mb-2">
                  <Link to="/programacoes" className="text-light text-decoration-none">Atividades Externas</Link>
                </li>
                <li className="mb-2">
                  <Link to="/programacoes" className="text-light text-decoration-none">Suporte Familiar</Link>
                </li>
              </ul>
            </Col>
            <Col lg={3}>
              <h6 className="mb-3">Contato</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  Rua Maria Eugênia, 300
                  Rio de Janeiro – RJ
                </li>
                <li className="mb-2">
                  <i className="fas fa-phone me-2"></i>
                  (21) 99627-8101
                </li>
                <li className="mb-2">
                  <i className="fas fa-envelope me-2"></i>
                  bethechangerio@gmail.com
                </li>
                <li className="mb-2">
                  <i className="fab fa-instagram me-2"></i>
                  @bethechange_rio
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-center">
              <hr className="mb-4" />
              <p className="mb-0">
                &copy; {new Date().getFullYear()} Be the Change Rio. Todos os direitos reservados.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default App; 