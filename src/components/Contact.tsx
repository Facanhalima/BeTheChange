import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { init, send } from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Inicializa o EmailJS quando o componente montar
    try {
      init(EMAILJS_CONFIG.PUBLIC_KEY);
      console.log('EmailJS inicializado com sucesso');
    } catch (error) {
      console.error('Erro ao inicializar EmailJS:', error);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;

    try {
      setIsSubmitting(true);
      setShowSuccess(false);
      setShowError(false);
      setErrorMessage('');

      console.log('Enviando email com as configurações:', {
        serviceId: EMAILJS_CONFIG.SERVICE_ID,
        templateId: EMAILJS_CONFIG.TEMPLATE_ID,
        publicKey: EMAILJS_CONFIG.PUBLIC_KEY
      });

      const templateParams = {
        to_email: "facanhalima85@gmail.com",
        user_name: form.current.user_name.value,
        user_email: form.current.user_email.value,
        subject: form.current.subject.value,
        message: form.current.message.value,
        reply_to: form.current.user_email.value
      };

      console.log('Parâmetros do template:', templateParams);

      const result = await send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Resultado do envio:', result);

      if (result.status === 200) {
        setShowSuccess(true);
        form.current.reset();
      } else {
        setErrorMessage('Erro ao enviar mensagem: ' + result.text);
        setShowError(true);
      }
    } catch (error: any) {
      console.error('Erro ao enviar email:', error);
      setErrorMessage(error?.text || 'Erro desconhecido ao enviar mensagem');
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="text-center mb-5">
            <h1 className="display-4 mb-3">Fale Conosco</h1>
            <p className="lead">
              Entre em contato conosco para mais informações sobre nossos serviços.
            </p>
          </div>

          {showSuccess && (
            <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </Alert>
          )}

          {showError && (
            <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
              {errorMessage || 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.'}
            </Alert>
          )}

          <Form ref={form} onSubmit={handleSubmit} className="contact-form">
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="user_name"
                placeholder="Seu nome completo"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="seu.email@exemplo.com"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Assunto</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                placeholder="Assunto da mensagem"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={5}
                placeholder="Digite sua mensagem aqui..."
                required
              />
            </Form.Group>

            <div className="d-grid">
              <Button
                variant="primary"
                type="submit"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;