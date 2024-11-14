import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import PageRenderer from './components/PageRenderer';

function App() {

  useEffect(() => {
    // Inicializa uma lista para armazenar as respostas dos usuários
    let userResponses = [];

    // Adiciona um event listener para o evento de mensagem
    const messageListener = (event) => {
      // Verifica se a mensagem recebida é do chatbot
      if (event.data && typeof event.data === "object") {
        console.log("Mensagem recebida:", event.data);

        // Supondo que as respostas do usuário sejam enviadas em uma chave "userResponse"
        if (event.data.userResponse) {
          userResponses.push(event.data.userResponse);
          console.log("Resposta capturada:", event.data.userResponse);

          // Enviar para o backend (opcional)
          enviarParaServidor(event.data.userResponse);
        }
      }
    };

    window.addEventListener("message", messageListener);

    // Limpa o listener quando o componente for desmontado
    return () => {
      window.removeEventListener("message", messageListener);
    };
  }, []);

  // Função opcional para enviar dados capturados a um servidor
  const enviarParaServidor = (resposta) => {
    fetch('https://seu-servidor-api.com/capturar-resposta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ resposta: resposta })
    })
    .then(response => response.json())
    .then(data => console.log("Resposta enviada com sucesso:", data))
    .catch(error => console.error("Erro ao enviar resposta:", error));
  };

  return (
    // Adicionando o `basename` e a flag `future` com `v7_startTransition`
    <Router basename="/EasyprevBrasil" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>    
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
