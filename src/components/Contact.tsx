import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import AOS from 'aos';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    console.log('Dados do formulário:', formData);
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="py-5 mt-5">
      <Container fluid="lg" className="px-4">
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-4 mb-4" data-aos="fade-up">
              Entre em Contato
            </h1>
            <p className="lead mb-5" data-aos="fade-up" data-aos-delay="100">
              Estamos aqui para responder suas dúvidas e ajudar você a fazer
              parte do Be the Change.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center g-4">
          <Col lg={8}>
            <div className="contact-form bg-light p-4 p-lg-5 rounded-3 shadow-sm" data-aos="fade-up">
              {showSuccess && (
                <Alert variant="success" className="mb-4">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row className="g-4">
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label htmlFor="name">Nome</Form.Label>
                      <Form.Control
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        placeholder="Digite seu nome"
                        className="form-control-lg"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label htmlFor="email">E-mail</Form.Label>
                      <Form.Control
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        placeholder="Digite seu e-mail"
                        className="form-control-lg"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label htmlFor="phone">Telefone</Form.Label>
                      <Form.Control
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Digite seu telefone"
                        className="form-control-lg"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group>
                      <Form.Label htmlFor="subject">Assunto</Form.Label>
                      <Form.Select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        className="form-control-lg"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="informacoes">Informações Gerais</option>
                        <option value="inscricao">Inscrição no Programa</option>
                        <option value="visita">Agendar Visita</option>
                        <option value="outro">Outro Assunto</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label htmlFor="message">Mensagem</Form.Label>
                      <Form.Control
                        as="textarea"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        rows={5}
                        placeholder="Digite sua mensagem"
                        className="form-control-lg"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <div className="text-center mt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="px-5 py-3 rounded-pill"
                  >
                    Enviar Mensagem
                  </Button>
                </div>
              </Form>
            </div>

            <div className="contact-info mt-5" data-aos="fade-up">
              <Row className="g-4">
                {[
                  {
                    icon: 'fa-map-marker-alt',
                    title: 'Endereço',
                    content: ['Rua Maria Eugênia, 300', 'Rio de Janeiro – RJ']
                  },
                  {
                    icon: 'fa-phone',
                    title: 'Telefone',
                    content: ['(21) 99627-8101']
                  },
                  {
                    icon: 'fa-envelope',
                    title: 'E-mail',
                    content: ['bethechangerio@gmail.com']
                  }
                ].map((item, index) => (
                  <Col md={4} key={index}>
                    <div className="contact-item text-center p-4 bg-light rounded-3 h-100">
                      <i className={`fas ${item.icon} fa-2x text-primary mb-3`}></i>
                      <h3 className="h5 mb-3">{item.title}</h3>
                      {item.content.map((line, idx) => (
                        <p key={idx} className={idx === item.content.length - 1 ? 'mb-0' : 'mb-1'}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact; 