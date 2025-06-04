import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section className="hero-section bg-light py-5 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-4">
                Guiando pessoas atípicas rumo à independência
              </h1>
              <p className="lead mb-4">
                O Be the Change é um projeto dedicado a desenvolver a autonomia e
                individualidade de pessoas atípicas através de programas
                especializados e atividades práticas.
              </p>
              <Link to="/contato" style={{ textDecoration: 'none' }}>
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-pill"
                >
                  Saiba como participar
                </Button>
              </Link>
            </Col>
            <Col lg={6} className="text-center" data-aos="fade-left">
              <img
                src="BeTheChangeLogo.png"
                alt="Be the Change - Imagem Principal"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="features-section py-5 bg-white">
        <Container>
          <h2 className="text-center mb-5" data-aos="fade-up">
            Nossos Pilares
          </h2>
          <Row>
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center p-4">
                <i className="fas fa-user-circle fa-3x mb-3 text-primary"></i>
                <h3>Individualidade</h3>
                <p>
                  Respeitamos e valorizamos as características únicas de cada
                  pessoa, desenvolvendo programas personalizados.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center p-4">
                <i className="fas fa-hands-helping fa-3x mb-3 text-primary"></i>
                <h3>Autonomia</h3>
                <p>
                  Promovemos o desenvolvimento de habilidades essenciais para uma
                  vida mais independente.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center p-4">
                <i className="fas fa-users fa-3x mb-3 text-primary"></i>
                <h3>Interação Social</h3>
                <p>
                  Facilitamos a integração com o meio social e urbano através de
                  atividades práticas e orientadas.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home; 