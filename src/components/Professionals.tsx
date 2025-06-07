import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import OptimizedImage from './OptimizedImage';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Professional {
  name: string;
  role: string;
  description: string;
  specialties: string[];
  image: string;
  instagram?: string;
}

const Professionals: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const professionals: Professional[] = [
    {
      name: 'Dr. Vincent Spevack',
      role: 'Pedagogo',
      description: 'Fundador e Diretor do Be The Change. professor, com mestrado, doutorado em Educação Especial e atualmente pós doutorado em Educação com ênfase na Educação Inclusiva.',
      specialties: ['Educação Especial', 'Atividades da Vida Diária', 'Adaptação Ambiental'],
      image: '/VincentFoto.png',
    },
    {
      name: 'Tiphanie Brum',
      role: 'Pedagoga',
      description: 'Graduada em Pedagogia especializada em Psicopedagogia. Focada em desenvolver habilidades sociais e comportamentais, com pesquisas sobre necessidades específicas de cada aluno.',
      specialties: ['Educação Especial', 'Desenvolvimento Social', 'Acompanhamento Individual'],
      image: '/TiphanieFoto.jpeg',
    },
    {
      name: 'Equipe Multidisciplinar',
      role: 'Profissionais Especializados',
      description: 'Nossa equipe é composta por profissionais especializados em diferentes áreas, incluindo psicólogos, terapeutas ocupacionais, fonoaudiólogos e educadores especiais.',
      specialties: ['Terapia Ocupacional', 'Fonoaudiologia', 'Psicologia', 'Educação Especial'],
      image: '/EquipeBeTheChange.jpg'
    }
  ];

  return (
    <div className="py-5 mt-5">
      <Container fluid="lg" className="px-4">
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <div className="badge-container">
              <span className="badge mb-3">
                Nossa Equipe
              </span>
            </div>
            <h1 className="display-4 mb-4" data-aos="fade-up">
              Nossa Equipe
            </h1>
            <p className="lead mb-5" data-aos="fade-up" data-aos-delay="100">
              Profissionais dedicados ao desenvolvimento da autonomia e qualidade de vida.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {professionals.map((professional, index) => (
            <Col lg={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="h-100 border-0 shadow-sm hover-lift">
                <Row className="g-0 h-100">
                  <Col xs={12} md={4} className="professional-image-wrapper">
                    <div className="position-relative h-100">
                      <OptimizedImage
                        src={professional.image}
                        alt={`Foto de ${professional.name}`}
                        className="w-100 h-100 object-fit-cover"
                        placeholder="https://via.placeholder.com/300x400"
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
                        {professional.instagram && (
                          <a
                            href={`https://instagram.com/${professional.instagram.replace('@', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary btn-sm mt-2"
                          >
                            <i className="fab fa-instagram me-2"></i>
                            {professional.instagram}
                          </a>
                        )}
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
            <a
              href="https://instagram.com/bethechange_rio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary rounded-pill px-4 py-2 mt-3"
            >
              <i className="fab fa-instagram me-2"></i>
              Siga-nos no Instagram
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Professionals; 