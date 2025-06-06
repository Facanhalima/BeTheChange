import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import OptimizedImage from './OptimizedImage';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  relationship: string;
}

const Testimonials: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const testimonials: Testimonial[] = [
    {
      name: 'Maria Silva',
      role: 'Mãe',
      image: '/testimonials/maria-silva.jpg',
      content: 'O Be the Change transformou a vida do meu filho. A equipe é extremamente dedicada e profissional, sempre focada no desenvolvimento individual. Em apenas 6 meses, notamos uma evolução significativa na autonomia e comunicação dele.',
      rating: 5,
      relationship: 'Mãe de João, 12 anos'
    },
    {
      name: 'Carlos Santos',
      role: 'Pai',
      image: '/testimonials/carlos-santos.jpg',
      content: 'A metodologia personalizada e o acompanhamento constante fizeram toda a diferença no desenvolvimento da minha filha. Os profissionais são muito atenciosos e sempre nos mantêm informados sobre o progresso.',
      rating: 5,
      relationship: 'Pai de Ana, 8 anos'
    },
    {
      name: 'Dra. Patrícia Mendes',
      role: 'Psicóloga',
      image: '/testimonials/patricia-mendes.jpg',
      content: 'Como profissional da área, reconheço a excelência do trabalho desenvolvido pelo Be the Change. A abordagem multidisciplinar e o foco no desenvolvimento individual são diferenciais importantes.',
      rating: 5,
      relationship: 'Psicóloga parceira'
    },
    {
      name: 'Roberto Oliveira',
      role: 'Pai',
      image: '/testimonials/roberto-oliveira.jpg',
      content: 'Estamos muito satisfeitos com o progresso do nosso filho. O programa personalizado e a dedicação da equipe têm sido fundamentais para o desenvolvimento da autonomia dele.',
      rating: 5,
      relationship: 'Pai de Pedro, 15 anos'
    },
    {
      name: 'Ana Paula Costa',
      role: 'Mãe',
      image: '/testimonials/ana-costa.jpg',
      content: 'O suporte que recebemos vai além das atividades com nossa filha. O acompanhamento familiar nos ajudou muito a entender melhor como podemos contribuir para o desenvolvimento dela em casa.',
      rating: 5,
      relationship: 'Mãe de Julia, 10 anos'
    },
    {
      name: 'Dr. Fernando Reis',
      role: 'Neurologista',
      image: '/testimonials/fernando-reis.jpg',
      content: 'O trabalho desenvolvido pelo Be the Change é referência em desenvolvimento de autonomia para pessoas com TEA. Os resultados alcançados são notáveis.',
      rating: 5,
      relationship: 'Neurologista parceiro'
    }
  ];

  return (
    <div className="py-5 mt-5">
      <Container fluid="lg" className="px-4">
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <span className="badge bg-primary mb-3 px-3 py-2 rounded-pill">
              Depoimentos
            </span>
            <h1 className="display-4 mb-4" data-aos="fade-up">
              O que dizem sobre nós
            </h1>
            <p className="lead mb-5" data-aos="fade-up" data-aos-delay="100">
              Conheça as histórias de transformação e desenvolvimento através dos
              relatos de famílias e profissionais que confiam em nosso trabalho.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col lg={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="h-100 border-0 shadow-sm hover-lift">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div 
                      className="rounded-circle overflow-hidden me-3"
                      style={{ width: '64px', height: '64px' }}
                    >
                      <OptimizedImage
                        src={testimonial.image}
                        alt={`Foto de ${testimonial.name}`}
                        className="w-100 h-100 object-fit-cover"
                        placeholder="https://via.placeholder.com/64x64"
                      />
                    </div>
                    <div>
                      <h3 className="h5 mb-1">{testimonial.name}</h3>
                      <p className="text-muted small mb-0">{testimonial.relationship}</p>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star text-warning me-1"></i>
                    ))}
                  </div>

                  <div className="mb-4">
                    <i className="fas fa-quote-left fa-2x text-primary opacity-25 mb-3"></i>
                    <p className="lead mb-0">{testimonial.content}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col lg={8} className="mx-auto text-center">
            <Card className="border-0 bg-primary text-white shadow-lg rounded-3 overflow-hidden">
              <Card.Body className="p-5">
                <h2 className="h3 mb-4">
                  Faça parte dessa transformação
                </h2>
                <p className="lead mb-4">
                  Entre em contato conosco e descubra como podemos ajudar no
                  desenvolvimento da autonomia.
                </p>
                <a
                  href="/contato"
                  className="btn btn-light btn-lg rounded-pill px-5 py-3 text-primary"
                >
                  Agende uma Avaliação
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials; 