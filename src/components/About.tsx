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
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-4 mb-4" data-aos="fade-up">
              Sobre o Be the Change
            </h1>
            <p className="lead mb-5" data-aos="fade-up" data-aos-delay="100">
              Transformando vidas através do desenvolvimento da autonomia e
              independência de pessoas atípicas.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={6} data-aos="fade-right">
            <h2 className="mb-4">Nossa Missão</h2>
            <p>
              O Be the Change nasceu da necessidade de criar um ambiente
              acolhedor e estruturado para pessoas atípicas desenvolverem sua
              independência. Nossa missão é proporcionar ferramentas,
              conhecimento e suporte necessários para que cada participante
              possa alcançar seu potencial máximo.
            </p>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <h2 className="mb-4">Objetivos</h2>
            <ul>
              <li>Desenvolver habilidades de vida diária</li>
              <li>Fortalecer a autonomia e independência</li>
              <li>Promover a integração social</li>
              <li>Estimular a autoconfiança</li>
              <li>Criar rotinas estruturadas e adaptáveis</li>
            </ul>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={12} data-aos="fade-up">
            <h2 className="mb-4">Como Funciona</h2>
            <div className="bg-light p-4 rounded">
              <Row>
                <Col md={4} className="mb-4 mb-md-0">
                  <h3 className="h5">Avaliação Individual</h3>
                  <p>
                    Cada participante passa por uma avaliação personalizada
                    para identificarmos suas necessidades específicas.
                  </p>
                </Col>
                <Col md={4} className="mb-4 mb-md-0">
                  <h3 className="h5">Programa Personalizado</h3>
                  <p>
                    Desenvolvemos um programa adaptado às necessidades e
                    objetivos individuais de cada pessoa.
                  </p>
                </Col>
                <Col md={4}>
                  <h3 className="h5">Acompanhamento Contínuo</h3>
                  <p>
                    Profissionais especializados acompanham o progresso e
                    fazem ajustes necessários ao programa.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12} className="text-center" data-aos="fade-up">
            <h2 className="mb-4">Nossa Metodologia</h2>
            <p>
              Utilizamos uma abordagem multidisciplinar que combina práticas
              baseadas em evidências com atividades personalizadas. Nosso foco
              está em desenvolver habilidades práticas em ambientes reais,
              sempre respeitando o ritmo e as características individuais de
              cada participante.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About; 