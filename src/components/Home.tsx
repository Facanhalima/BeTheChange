import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const services = [
    {
      title: 'Desenvolvimento de Autonomia',
      description: 'Atividades práticas para desenvolver independência nas tarefas diárias, mobilidade urbana e autocuidado.',
      icon: 'fa-star',
    },
    {
      title: 'Habilidades Sociais',
      description: 'Programas focados no desenvolvimento de interações sociais, comunicação e integração na comunidade.',
      icon: 'fa-users',
    },
    {
      title: 'Atividades Externas',
      description: 'Experiências práticas em ambientes reais como supermercados, restaurantes e transporte público.',
      icon: 'fa-map-marker-alt',
    },
    {
      title: 'Suporte Familiar',
      description: 'Orientação e acompanhamento para famílias, fortalecendo o desenvolvimento contínuo em casa.',
      icon: 'fa-heart',
    },
  ];

  return (
    <main>
      <section className="hero-section position-relative overflow-hidden bg-light py-5">
        <Container fluid="lg" className="px-4 min-vh-100 d-flex align-items-center">
          <Row className="align-items-center gy-5">
            <Col lg={6} data-aos="fade-right">
              <span className="badge bg-primary mb-3 px-3 py-2 rounded-pill">
                Be the Change Rio
              </span>
              <h1 className="display-4 fw-bold mb-4">
              Um caminho para a inclusão e independência.
              </h1>
              <p className="lead mb-5">
                Somos um projeto dedicado ao desenvolvimento da independência e autonomia
                de jovens com Transtorno do Espectro Autista e/ou Deficiência Intelectual através de atividades
                práticas e vivências reais.
              </p>
              <div className="d-flex gap-3">
                <Link to="/contato" className="text-decoration-none">
                  <Button
                    variant="primary"
                    size="lg"
                    className="rounded-pill px-4 py-3"
                  >
                    Agende uma Visita
                  </Button>
                </Link>
                <a
                  href="https://instagram.com/bethechange_rio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-lg rounded-pill px-4 py-3"
                >
                  <i className="fab fa-instagram me-2"></i>
                  Siga-nos
                </a>
              </div>
            </Col>
            <Col lg={6} className="text-center" data-aos="fade-left">
              <OptimizedImage
                src="BeTheChangeLogo.png"
                alt="Be the Change Rio - Transformando Vidas"
                className="img-fluid rounded-3 shadow-lg"
                style={{ maxWidth: '90%' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="services-section py-5">
        <Container fluid="lg" className="px-4">
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <span className="badge bg-primary mb-3 px-3 py-2 rounded-pill">
                Nossos Serviços
              </span>
              <h2 className="display-5 mb-4">
                Como desenvolvemos a autonomia
              </h2>
              <p className="lead text-muted">
                Trabalhamos com atividades práticas e vivências reais para
                desenvolver habilidades essenciais para a vida independente.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {services.map((service, index) => (
              <Col md={6} lg={3} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="h-100 border-0 shadow-sm hover-lift">
                  <Card.Body className="p-4 text-center">
                    <div className="icon-wrapper mb-4">
                      <i className={`fas ${service.icon} fa-2x text-primary`}></i>
                    </div>
                    <h3 className="h5 mb-3">{service.title}</h3>
                    <p className="text-muted mb-0">{service.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="testimonials-section py-5 bg-light">
        <Container fluid="lg" className="px-4">
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <span className="badge bg-primary mb-3 px-3 py-2 rounded-pill">
                Depoimentos
              </span>
              <h2 className="display-5 mb-4">
                O que dizem sobre nós
              </h2>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={6} data-aos="fade-up">
              <Card className="h-100 border-0 shadow-sm p-4">
                <Card.Body>
                  <div className="mb-4">
                    <i className="fas fa-quote-left fa-2x text-primary opacity-50"></i>
                  </div>
                  <p className="lead mb-4">
                    "O Be the Change Rio transformou a vida do meu filho. As atividades
                    práticas e o acompanhamento personalizado fizeram toda a diferença
                    no desenvolvimento da autonomia dele."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <h4 className="h6 mb-1">Mãe de participante</h4>
                      <p className="small text-muted mb-0">Programa de Autonomia</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} data-aos="fade-up" data-aos-delay="100">
              <Card className="h-100 border-0 shadow-sm p-4">
                <Card.Body>
                  <div className="mb-4">
                    <i className="fas fa-quote-left fa-2x text-primary opacity-50"></i>
                  </div>
                  <p className="lead mb-4">
                    "Ver meu filho desenvolvendo independência nas atividades diárias
                    é incrível. A equipe é muito dedicada e as atividades são
                    perfeitamente adaptadas às necessidades dele."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <h4 className="h6 mb-1">Pai de participante</h4>
                      <p className="small text-muted mb-0">Programa de Habilidades Sociais</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta-section py-5">
        <Container fluid="lg" className="px-4">
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 bg-primary text-white shadow-lg rounded-3 overflow-hidden">
                <Card.Body className="p-5 text-center">
                  <h2 className="display-5 mb-4">
                    Comece a transformação hoje
                  </h2>
                  <p className="lead mb-4">
                    Entre em contato conosco e descubra como podemos ajudar no
                    desenvolvimento da autonomia.
                  </p>
                  <div className="d-flex justify-content-center gap-3">
                    <Link to="/contato" className="text-decoration-none">
                      <Button
                        variant="light"
                        size="lg"
                        className="rounded-pill px-5 py-3 text-primary"
                      >
                        Agende uma Visita
                      </Button>
                    </Link>
                    <a
                      href="https://instagram.com/bethechange_rio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light btn-lg rounded-pill px-5 py-3"
                    >
                      <i className="fab fa-instagram me-2"></i>
                      Conheça Nosso Trabalho
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Home; 