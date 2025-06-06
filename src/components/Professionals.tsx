import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';

interface Professional {
  name: string;
  role: string;
  description: string;
  specialties: string[];
  image: string;
}

const Professionals: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const professionals: Professional[] = [
    {
      name: 'Pedag. Tiphanie Brum',
      role: 'Professora',
      description: 'Graduada em Pedagogia e cursando especialização em Psicopedagogia. Focada em desenvolver habilidades sociais e comportamentais, com pesquisas sobre necessidades específicas de cada aluno.',
      specialties: ['Educação Especial', 'Desenvolvimento Social', 'Acompanhamento Individual'],
      image: '/TiphanieFoto.jpeg',
    },
    {
      name: 'Dr. Vincent Spevack',
      role: 'Professor',
      description: 'Fundador e Diretor do Be The Change. professor, com mestrado, doutorado em Educação Especial e atualmente pós doutorado em Educação com ênfase na Educação Inclusiva.',
      specialties: ['Educação Especial', 'Atividades da Vida Diária', 'Adaptação Ambiental'],
      image: '/VincentFoto.png',
    },
    {
      name: 'Profa. Ana Oliveira',
      role: 'Educadora Especial',
      description: 'Especialista em metodologias adaptativas e desenvolvimento de habilidades sociais.',
      specialties: ['Comunicação Alternativa', 'Adaptação Curricular', 'Habilidades Sociais'],
      image: '/images/professional-3.jpg',
    },
    {
      name: 'Dr. Carlos Lima',
      role: 'Fonoaudiólogo',
      description: 'Especializado em comunicação e desenvolvimento da linguagem em pessoas autistas.',
      specialties: ['Desenvolvimento da Fala', 'Comunicação Social', 'Processamento Auditivo'],
      image: '/images/professional-4.jpg',
    },
  ];

  return (
    <div className="py-5 mt-5">
      <Container fluid="lg" className="px-4">
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-4 mb-4" data-aos="fade-up">
              Nossa Equipe
            </h1>
            <p className="lead mb-5" data-aos="fade-up" data-aos-delay="100">
              Conheça os profissionais dedicados que fazem parte do Be the Change.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {professionals.map((professional, index) => (
            <Col lg={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <Row className="g-0 h-100">
                  <Col xs={12} md={4} className="professional-image-wrapper">
                    <div className="position-relative h-100">
                      <img
                        src={professional.image}
                        alt={`Foto de ${professional.name}`}
                        className="professional-image w-100 h-100 object-fit-cover"
                      />
                    </div>
                  </Col>
                  <Col xs={12} md={8}>
                    <Card.Body>
                      <Card.Title className="h4 mb-1">{professional.name}</Card.Title>
                      <Card.Subtitle className="mb-3 text-primary">
                        {professional.role}
                      </Card.Subtitle>
                      <Card.Text>{professional.description}</Card.Text>
                      <div className="mt-3">
                        <strong className="d-block mb-2">Especialidades:</strong>
                        <ul className="list-unstyled">
                          {professional.specialties.map((specialty, idx) => (
                            <li key={idx} className="mb-1">
                              <i className="fas fa-check-circle text-success me-2"></i>
                              {specialty}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={8} className="mx-auto text-center">
            <p className="text-muted">
              Nossa equipe está em constante atualização e treinamento para
              oferecer o melhor suporte possível aos participantes do programa.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Professionals; 