import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
              <h5 className="mb-4">Be the Change</h5>
              <p className="mb-4">
                Transformando vidas através do desenvolvimento da autonomia e
                independência de pessoas com TEA.
              </p>
              <div className="social-links">
                <a href="#" className="text-light me-3">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-light me-3">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-light me-3">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-light">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </Col>
            <Col lg={2}>
              <h6 className="mb-3">Links Rápidos</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="/" className="text-light text-decoration-none">Início</a>
                </li>
                <li className="mb-2">
                  <a href="/sobre" className="text-light text-decoration-none">Sobre</a>
                </li>
                <li className="mb-2">
                  <a href="/profissionais" className="text-light text-decoration-none">Profissionais</a>
                </li>
                <li className="mb-2">
                  <a href="/programacoes" className="text-light text-decoration-none">Serviços</a>
                </li>
                <li className="mb-2">
                  <a href="/contato" className="text-light text-decoration-none">Contato</a>
                </li>
              </ul>
            </Col>
            <Col lg={3}>
              <h6 className="mb-3">Serviços</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-light text-decoration-none">Avaliação Personalizada</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light text-decoration-none">Desenvolvimento de Autonomia</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light text-decoration-none">Habilidades Sociais</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-light text-decoration-none">Suporte Familiar</a>
                </li>
              </ul>
            </Col>
            <Col lg={3}>
              <h6 className="mb-3">Contato</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  Rua Exemplo, 123 - São Paulo, SP
                </li>
                <li className="mb-2">
                  <i className="fas fa-phone me-2"></i>
                  (11) 1234-5678
                </li>
                <li className="mb-2">
                  <i className="fas fa-envelope me-2"></i>
                  contato@bethechange.com.br
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-center">
              <hr className="mb-4" />
              <p className="mb-0">
                &copy; {new Date().getFullYear()} Be the Change. Todos os direitos reservados.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default App; 