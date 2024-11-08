import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import PageRenderer from './components/PageRenderer';

function App() {
  return (
    // Adicionando o `basename` para que o React Router considere `/EasyprevBrasil` como base para todas as rotas
    <Router basename="/EasyprevBrasil">    
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beneficios/:id" element={<PageRendererWrapper />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function PageRendererWrapper() {
  const navigate = useNavigate();

  const handleClosePageRenderer = () => {
    navigate('/');
  };

  return <PageRenderer onClose={handleClosePageRenderer} />;
}

export default App;
