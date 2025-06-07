import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import AOS from 'aos';

interface Program {
  title: string;
  description: string;
  schedule: string;
  category: string;
  level: string;
}

const Programs: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const programs: Program[] = [
    {
      title: 'Vida Diária',
      description: 'Atividades práticas para desenvolver habilidades essenciais do dia a dia, como organização pessoal e tarefas domésticas.',
      schedule: 'Segunda e Quarta - 9h às 11h',
      category: 'Autonomia',
      level: 'Iniciante',
    },
    {
      title: 'Mobilidade Urbana',
      description: 'Aprenda a se locomover pela cidade com segurança, usando transporte público e identificando pontos de referência.',
      schedule: 'Terça e Quinta - 14h às 16h',
      category: 'Independência',
      level: 'Intermediário',
    },
    {
      title: 'Interação Social',
      description: 'Desenvolvimento de habilidades sociais através de atividades em grupo e situações práticas do cotidiano.',
      schedule: 'Sexta - 10h às 12h',
      category: 'Socialização',
      level: 'Todos os níveis',
    },
    {
      title: 'Gestão Financeira',
      description: 'Aprenda a administrar dinheiro, fazer compras e planejar gastos de forma independente.',
      schedule: 'Quarta - 14h às 16h',
      category: 'Autonomia',
      level: 'Avançado',
    },
    {
      title: 'Comunicação',
      description: 'Desenvolvimento de habilidades de comunicação verbal e não verbal em diferentes contextos sociais.',
      schedule: 'Segunda - 14h às 16h',
      category: 'Socialização',
      level: 'Todos os níveis',
    },
    {
      title: 'Vida Profissional',
      description: 'Preparação para o mercado de trabalho, incluindo desenvolvimento de habilidades profissionais e comportamentais.',
      schedule: 'Quinta - 9h às 11h',
      category: 'Independência',
      level: 'Avançado',
    },
  ];

  const getCategoryColor = (category: string): string => {
    switch (category.toLowerCase()) {
      case 'autonomia':
        return 'autonomia';
      case 'independência':
        return 'independencia';
      case 'socialização':
        return 'socializacao';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="py-5 mt-5">
      <Container fluid="lg" className="px-4">
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <div className="badge-container">
              <span className="badge mb-3">
                Nossas Programações
              </span>
            </div>
            <h1 className="display-4 mb-4" data-aos="fade-up">
              Nossas Programações
            </h1>
            <p className="lead mb-5" data-aos="fade-up" data-aos-delay="100">
              Conheça nossas atividades desenvolvidas para promover autonomia e
              independência.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {programs.map((program, index) => (
            <Col xs={12} sm={6} lg={4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="h-100 shadow-sm hover-lift">
                <Card.Body className="d-flex flex-column">
                  <div className="mb-3">
                    <Badge 
                      bg={getCategoryColor(program.category)}
                      className="badge-lg"
                    >
                      {program.category}
                    </Badge>
                  </div>
                  <Card.Title className="h4 mb-3">{program.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{program.description}</Card.Text>
                  <div className="program-info mt-3 pt-3 border-top">
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-clock text-primary me-2"></i>
                      <small className="text-muted">
                        {program.schedule}
                      </small>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="fas fa-layer-group text-primary me-2"></i>
                      <small className="text-muted">
                        Nível: {program.level}
                      </small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={8} className="mx-auto text-center">
            <p className="text-muted">
              * As programações podem ser adaptadas de acordo com as necessidades
              individuais dos participantes.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Programs; 