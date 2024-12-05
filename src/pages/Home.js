import React, { useState } from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import ScheduleModal from '../components/ScheduleModal';
import bannerHome from '../img/banner_home_desktop.webp';
import aboutImage from '../img/about.webp';
import newsImage1 from '../img/news1.jpg';
import newsImage2 from '../img/news2.jpg';
import newsImage3 from '../img/news3.jpg';
import newsImage4 from '../img/news4.jpg';

function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <main className="container">
      <section id="banner" className="text-center">
        <img src={bannerHome} alt="Banner EasyPrev Brasil" className="img-fluid" />        
        <div className="banner-text">
          <h1>Consultoria de Planejamento de Aposentadoria</h1>
          <p>Especializada em brasileiros residentes no exterior</p>
        </div>
        <button className="banner-button" onClick={handleShow}>
            AGENDE SUA CONSULTA
        </button>
      </section>

      <section id="about" className="my-5">
        <h2>Quem Somos</h2>
        <div className="row">
          <div className="col-md-12">
            <p>A EasyPrev Brasil é uma consultoria especializada em planejamento de aposentadoria do INSS voltada para brasileiros residentes no exterior. Nosso objetivo é proporcionar um atendimento personalizado, garantindo que nossos clientes recebam o melhor suporte possível para seus benefícios previdenciários.</p>
            <p>Com uma equipe altamente qualificada, estamos prontos para oferecer soluções eficazes e orientações precisas para que você tenha uma aposentadoria tranquila e bem planejada.</p>
          </div>
          {/* <div className="col-md-4">
            <img src={aboutImage} alt="Sobre a EasyPrev Brasil" className="img-fluid" />
          </div> */}
        </div>
      </section>

      <section id="services" className="my-5">
        <h2>Nossos Serviços</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Planejamento de Aposentadoria</h5>
                <p className="card-text">Serviços personalizados para garantir uma aposentadoria tranquila e bem planejada.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Revisão de Benefícios</h5>
                <p className="card-text">Análise e revisão de benefícios do INSS para garantir o melhor retorno.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Consultoria Especializada</h5>
                <p className="card-text">Apoio e orientação em todas as etapas do processo previdenciário.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="my-5">
        <h2>Notícias</h2>
        <Carousel controls={true} indicators={true}>
          <Carousel.Item>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img src={newsImage1} alt="Notícia 1" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Não é permitido descontar acima de 30% para pagamento de empréstimos consignados</h5>
                    <p className="card-text">Saiba mais sobre as regras para descontos em empréstimos consignados.</p>
                    <a href="https://www.jusbrasil.com.br/artigos/nao-e-permitido-descontar-acima-de-30-do-salario-soldo-aposentadoria-para-pagamento-de-emprestimos-consignados/1483674989" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Leia mais</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src={newsImage2} alt="Notícia 2" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">STF determina pagamento de benefício assistencial a idosos</h5>
                    <p className="card-text">A decisão do STF sobre o pagamento de benefícios assistenciais.</p>
                    <a href="https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=541617&ori=1" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Leia mais</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src={newsImage3} alt="Notícia 3" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Acordo de Previdência Social entre Brasil e EUA</h5>
                    <p className="card-text">Informações sobre o acordo de previdência social entre Brasil e EUA.</p>
                    <a href="https://www.gov.br/mre/pt-br/consulado-washington/aposentadoria-acordo-brasil-eua" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Leia mais</a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img src={newsImage4} alt="Notícia 4" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Aposentadoria especial do INSS tem novas regras com reforma da Previdência; entenda</h5>
                    <p className="card-text">O benefício é destinado apenas para algumas carreiras específicas.</p>
                    <a href="https://economia.ig.com.br/2024-10-26/inss-regra-aposentadoria-especial.html" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Leia mais</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src={newsImage2} alt="Notícia 5" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">STF determina pagamento de benefício assistencial a idosos</h5>
                    <p className="card-text">A decisão do STF sobre o pagamento de benefícios assistenciais.</p>
                    <a href="https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=541617&ori=1" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Leia mais</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src={newsImage3} alt="Notícia 6" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Acordo de Previdência Social entre Brasil e EUA</h5>
                    <p className="card-text">Informações sobre o acordo de previdência social entre Brasil e EUA.</p>
                    <a href="https://www.gov.br/mre/pt-br/consulado-washington/aposentadoria-acordo-brasil-eua" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Leia mais</a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img src={newsImage1} alt="Notícia 7" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Não é permitido descontar acima de 30% para pagamento de empréstimos consignados</h5>
                    <p className="card-text">Saiba mais sobre as regras para descontos em empréstimos consignados.</p>
                    <a href="https://www.jusbrasil.com.br/artigos/nao-e-permitido-descontar-acima-de-30-do-salario-soldo-aposentadoria-para-pagamento-de-emprestimos-consignados/1483674989" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Leia mais</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src={newsImage2} alt="Notícia 8" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">STF determina pagamento de benefício assistencial a idosos</h5>
                    <p className="card-text">A decisão do STF sobre o pagamento de benefícios assistenciais.</p>
                    <a href="https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=541617&ori=1" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Leia mais</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src={newsImage3} alt="Notícia 9" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Acordo de Previdência Social entre Brasil e EUA</h5>
                    <p className="card-text">Informações sobre o acordo de previdência social entre Brasil e EUA.</p>
                    <a href="https://www.gov.br/mre/pt-br/consulado-washington/aposentadoria-acordo-brasil-eua" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Leia mais</a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>

      <section id="videos" className="my-5">
        <h2>Vídeos</h2>
        <Carousel controls={true} indicators={true}>
          <Carousel.Item>
            <div className="row">
              <div className="col-md-4">
                <a href="https://www.youtube.com/watch?v=w_yW9UgC--8" target="_blank" rel="noopener noreferrer">
                  <img className="d-block w-100" src="https://img.youtube.com/vi/w_yW9UgC--8/mqdefault.jpg" alt="Vídeo 1" />
                </a>
              </div>
              <div className="col-md-4">
                <a href="https://www.youtube.com/watch?v=5bMDrtNoHos" target="_blank" rel="noopener noreferrer">
                  <img className="d-block w-100" src="https://img.youtube.com/vi/5bMDrtNoHos/mqdefault.jpg" alt="Vídeo 2" />
                </a>
              </div>
              <div className="col-md-4">
                <a href="https://www.youtube.com/watch?v=-1YJp8-X8WU" target="_blank" rel="noopener noreferrer">
                  <img className="d-block w-100" src="https://img.youtube.com/vi/-1YJp8-X8WU/mqdefault.jpg" alt="Vídeo 3" />
                </a>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-md-4">
                <a href="https://www.youtube.com/watch?v=X8CfP3iyK4M" target="_blank" rel="noopener noreferrer">
                  <img className="d-block w-100" src="https://img.youtube.com/vi/X8CfP3iyK4M/mqdefault.jpg" alt="Vídeo 4" />
                </a>
              </div>
              <div className="col-md-4">
                <a href="https://www.youtube.com/watch?v=KeK5gkLk4uY" target="_blank" rel="noopener noreferrer">
                  <img className="d-block w-100" src="https://img.youtube.com/vi/KeK5gkLk4uY/mqdefault.jpg" alt="Vídeo 5" />
                </a>
              </div>
              <div className="col-md-4">
                <a href="https://www.youtube.com/watch?v=QivYmubnWjE" target="_blank" rel="noopener noreferrer">
                  <img className="d-block w-100" src="https://img.youtube.com/vi/QivYmubnWjE/mqdefault.jpg" alt="Vídeo 6" />
                </a>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-md-4">
                <a href="https://www.youtube.com/watch?v=wsvlbHSDoUw" target="_blank" rel="noopener noreferrer">
                  <img className="d-block w-100" src="https://img.youtube.com/vi/wsvlbHSDoUw/mqdefault.jpg" alt="Vídeo 7" />
                </a>
              </div>
              <div className="col-md-4">
                <a href="https://www.youtube.com/watch?v=MsaE6L5YZFA" target="_blank" rel="noopener noreferrer">
                  <img className="d-block w-100" src="https://img.youtube.com/vi/MsaE6L5YZFA/mqdefault.jpg" alt="Vídeo 8" />
                </a>
              </div>
              <div className="col-md-4">
                <a href="https://www.youtube.com/watch?v=VQSuE56DS3M" target="_blank" rel="noopener noreferrer">
                  <img className="d-block w-100" src="https://img.youtube.com/vi/VQSuE56DS3M/mqdefault.jpg" alt="Vídeo 9" />
                </a>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* <section id="testimonials" className="my-5">
        <h2>Depoimentos</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card testimonial-card">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>O serviço da EasyPrev Brasil foi essencial para meu planejamento de aposentadoria no exterior.</p>
                  <footer className="blockquote-footer">Cliente Satisfeito - 25/07/2024</footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card testimonial-card">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>Recebi um atendimento personalizado e eficiente. Recomendo a todos!</p>
                  <footer className="blockquote-footer">Cliente Feliz - 18/07/2024</footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card testimonial-card">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>A EasyPrev Brasil superou minhas expectativas. Muito obrigado pelo suporte!</p>
                  <footer className="blockquote-footer">Cliente Agradecido - 23/06/2024</footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card testimonial-card">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>Excelente serviço! Toda a equipe está de parabéns!</p>
                  <footer className="blockquote-footer">Cliente Contente - 15/06/2024</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <ScheduleModal show={showModal} handleClose={handleClose} />
    </main>
  );
}

export default Home;
