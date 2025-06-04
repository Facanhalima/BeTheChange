import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';
import Professionals from './components/Professionals';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Navigation />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/programacoes" element={<Programs />} />
          <Route path="/profissionais" element={<Professionals />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>
      <footer className="bg-light py-4 mt-5">
        <div className="container text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Be the Change. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App; 