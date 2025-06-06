import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
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

  const services = [
    {
      title: 'Avaliação Personalizada',
      description: 'Entendemos as necessidades específicas de cada pessoa para criar um programa individualizado.',
      icon: 'fa-clipboard-check',
    },
    {
      title: 'Desenvolvimento de Autonomia',
      description: 'Atividades práticas para fortalecer a independência nas tarefas diárias.',
      icon: 'fa-star',
    },
    {
      title: 'Habilidades Sociais',
      description: 'Programas focados no desenvolvimento de interações sociais significativas.',
      icon: 'fa-users',
    },
    {
      title: 'Suporte Familiar',
      description: 'Orientação e acompanhamento para famílias durante todo o processo.',
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
                Be the Change
              </span>
              <h1 className="display-4 fw-bold mb-4">
                Desenvolvendo autonomia e qualidade de vida para pessoas com TEA
              </h1>
              <p className="lead mb-5">
                Transformamos vidas através de programas especializados e
                personalizados, focados no desenvolvimento da independência e
                potencial único de cada pessoa.
              </p>
              <div className="d-flex gap-3">
                <Link to="/contato" className="text-decoration-none">
                  <Button
                    variant="primary"
                    size="lg"
                    className="rounded-pill px-4 py-3"
                  >
                    Agende uma Avaliação
                  </Button>
                </Link>
                <Link to="/sobre" className="text-decoration-none">
                  <Button
                    variant="outline-primary"
                    size="lg"
                    className="rounded-pill px-4 py-3"
                  >
                    Conheça Mais
                  </Button>
                </Link>
              </div>
            </Col>
            <Col lg={6} className="text-center" data-aos="fade-left">
              <img
                src="BeTheChangeLogo.png"
                alt="Be the Change - Transformando Vidas"
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
                Como podemos ajudar
              </h2>
              <p className="lead text-muted">
                Oferecemos uma abordagem completa e personalizada para o
                desenvolvimento de pessoas com TEA.
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
                    "O Be the Change transformou a vida do meu filho. A equipe é
                    extremamente dedicada e profissional, sempre focada no
                    desenvolvimento individual."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <h4 className="h6 mb-1">Maria Silva</h4>
                      <p className="small text-muted mb-0">Mãe de participante</p>
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
                    "A metodologia personalizada e o acompanhamento constante
                    fizeram toda a diferença no desenvolvimento da autonomia."
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <h4 className="h6 mb-1">João Santos</h4>
                      <p className="small text-muted mb-0">Pai de participante</p>
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
                    Agende uma avaliação e descubra como podemos ajudar no
                    desenvolvimento da autonomia.
                  </p>
                  <Link to="/contato" className="text-decoration-none">
                    <Button
                      variant="light"
                      size="lg"
                      className="rounded-pill px-5 py-3 text-primary"
                    >
                      Agende uma Visita
                    </Button>
                  </Link>
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