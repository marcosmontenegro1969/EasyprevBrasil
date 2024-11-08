import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import pagesData from '../components/PagesData';
import '../components/PageRenderer.css';

function PageRenderer({ onClose }) {
  const { id } = useParams();
  const page = pagesData.find(page => page.id === parseInt(id));

  // Função para rolar para o topo quando a página é carregada
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  // Adiciona o listener para a tecla Esc
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();  // Fecha o PageRenderer quando "Esc" é pressionado
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);


  if (!page) {
    return <div>Página não encontrada.</div>;
  }

  return (
    <main className="container">
      <section className="page-header">
        <h1>{page.title}</h1>
      </section>

      <section className="content">
        <p>{page.mainParagraph}</p>
        <img src={page.image} alt={page.title} className="img-fluid" />
        {page.secondaryParagraph.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
    </main>
  );
}

export default PageRenderer;