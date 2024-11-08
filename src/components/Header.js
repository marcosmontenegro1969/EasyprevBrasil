import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../img/logo_EasyPrevBrasil_2.png';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false); // Estado para controlar a expansão do menu

  const scrollToTop = (e) => {
    e.preventDefault();

    // Se o usuário já estiver na página inicial, rola para o topo
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Se estiver em outra página, redireciona para a home
      navigate('/');
    }
    setExpanded(false); // Fecha o dropdown após uso
  };

  // Nova função para navegar para a página inicial e rolar para a seção
  const navigateToSection = (id) => {
    navigate('/'); // Navega para a página inicial
    setTimeout(() => {
      const section = document.querySelector(id);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 100, // Ajuste conforme necessário
          behavior: 'smooth'
        });
      }
    }, 0); // Delay para garantir que a navegação aconteça primeiro
    setExpanded(false); // Fecha o dropdown após uso
  };

  return (
    <header className="App-header">
      <Navbar expand="lg" variant="dark" fixed="top" expanded={expanded}>
        
        <Navbar.Brand href="/" className="navbar-brand" onClick={scrollToTop}>
          <img src={logo} alt="EasyPrev Brasil" className="logo" />
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)} // Alterna o estado de expansão
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-justified">
            <Nav.Link onClick={() => navigateToSection('#about')}>QUEM SOMOS</Nav.Link>
            <Nav.Link onClick={() => navigateToSection('#services')}>SERVIÇOS</Nav.Link>

            {/* <NavDropdown title="BENEFÍCIOS" id="benefitsDropdown"> */}
            <NavDropdown title="APOSENTADORIA" id="retirementDropdown">
              <NavDropdown title="Por Idade" id="byAgeDropdown">
                <NavDropdown.Item as={Link} to="/beneficios/1" onClick={() => setExpanded(false)}>Urbana</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/beneficios/2" onClick={() => setExpanded(false)}>Rural</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/beneficios/3" onClick={() => setExpanded(false)}>Pessoa com Deficiência</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Por Tempo de Contribuição" id="byContributionTimeDropdown">
                <NavDropdown.Item as={Link} to="/beneficios/4" onClick={() => setExpanded(false)}>Pessoa com Deficiência</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/beneficios/5" onClick={() => setExpanded(false)}>Pessoa sem Deficiência</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown.Item as={Link} to="/beneficios/6" onClick={() => setExpanded(false)}>Por Invalidez</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/beneficios/7" onClick={() => setExpanded(false)}>De Autônomo</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/beneficios/8" onClick={() => setExpanded(false)}>Especial</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/beneficios/9" onClick={() => setExpanded(false)}>Servidor Público</NavDropdown.Item>
            </NavDropdown>

              {/* <NavDropdown title="Auxílio" id="assistanceDropdown">
                <NavDropdown.Item as={Link} to="/beneficios/10">Auxílio Acidente</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/beneficios/11">Auxílio Doença</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/beneficios/12">Auxílio Reclusão</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown.Item as={Link} to="/beneficios/13">Salário Maternidade</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/beneficios/14">Salário Família</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/beneficios/15">Pensão por Morte</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/beneficios/16">Amparo a Idoso e Pessoa com Deficiência</NavDropdown.Item> */}
            {/* </NavDropdown> */}
            
            <Nav.Link onClick={() => navigateToSection('#news')}>NOTÍCIAS</Nav.Link>
            <Nav.Link onClick={() => navigateToSection('#videos')}>VÍDEOS</Nav.Link>
            <Nav.Link onClick={() => navigateToSection('#testimonials')}>DEPOIMENTOS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
