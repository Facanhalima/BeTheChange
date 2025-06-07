import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';

const About: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="py-5 mt-5">
      <Container fluid="lg" className="px-4">
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <div className="badge-container">
              <span className="badge mb-3">
                Sobre Nós
              </span>
            </div>
            <h1 className="display-4 mb-4" data-aos="fade-up">
              Sobre o Be the Change
            </h1>
            <p className="lead mb-5" data-aos="fade-up" data-aos-delay="100">
              Transformando vidas através do desenvolvimento da autonomia e
              independência de pessoas atípicas.
            </p>
          </Col>
        </Row>

        <Row className="mb-5 g-4">
          <Col lg={6} data-aos="fade-right">
            <div className="p-4 bg-light rounded-3 h-100">
              <h2 className="h3 mb-4">Nossa Missão</h2>
              <p className="mb-0">
              O Be The Change, apresenta uma proposta inovadora
              combinando conceitos desenvolvidos no Brasil e EUA,
              preparando jovens com transtorno do espectro autista e/ou deficiência intelectual para a transição para a vida independente.
              Nossas experiências de aprendizagem personalizadas e baseadas no mundo real promovem a autonomia, habilidades práticas para a vida e capacitam esses jovens a se tornarem participantes ativos em suas vidas diárias.
              </p>
            </div>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <div className="p-4 bg-light rounded-3 h-100">
              <h2 className="h3 mb-4">Objetivos</h2>
              <ul className="list-unstyled mb-0">
                {[
                  'Desenvolver habilidades de vida diária',
                  'Fortalecer a autonomia e independência',
                  'Promover a integração social',
                  'Estimular a autoconfiança',
                  'Criar rotinas estruturadas e adaptáveis'
                ].map((item, index) => (
                  <li key={index} className="mb-3 d-flex align-items-start">
                    <i className="fas fa-check-circle text-primary me-2 mt-1"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={12} data-aos="fade-up">
            <div className="bg-light p-4 p-lg-5 rounded-3">
              <h2 className="h3 mb-4 text-center">Como Funciona</h2>
              <Row className="g-4">
                {[
                  {
                    title: 'Avaliação Individual',
                    description: 'Cada participante passa por uma avaliação personalizada para identificarmos suas necessidades específicas.',
                    icon: 'fa-clipboard-list'
                  },
                  {
                    title: 'Programa Personalizado',
                    description: 'Desenvolvemos um programa adaptado às necessidades e objetivos individuais de cada pessoa.',
                    icon: 'fa-user-cog'
                  },
                  {
                    title: 'Acompanhamento Contínuo',
                    description: 'Profissionais especializados acompanham o progresso e fazem ajustes necessários ao programa.',
                    icon: 'fa-chart-line'
                  }
                ].map((item, index) => (
                  <Col md={4} key={index} className="text-center">
                    <div className="p-3">
                      <i className={`fas ${item.icon} fa-2x text-primary mb-3`}></i>
                      <h3 className="h5 mb-3">{item.title}</h3>
                      <p className="mb-0">{item.description}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={10} className="mx-auto text-center" data-aos="fade-up">
            <div className="p-4 p-lg-5 bg-light rounded-3">
              <h2 className="h3 mb-4">Nossa Metodologia</h2>
              <p className="mb-0">
                Utilizamos uma abordagem multidisciplinar que combina práticas
                baseadas em evidências com atividades personalizadas. Nosso foco
                está em desenvolver habilidades práticas em ambientes reais,
                sempre respeitando o ritmo e as características individuais de
                cada participante.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About; 