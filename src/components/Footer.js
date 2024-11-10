// import React from 'react';
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoCalendarOutline } from 'react-icons/io5';
import ScheduleModal from './ScheduleModal'; // Importa o ScheduleModal
import './Footer.css';
import instagramIcon from '../img/icons8-instagram-48.svg';

function Footer() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="instagram-container">
          <a href="https://www.instagram.com/easyprevbrasil" target="_blank" rel="noopener noreferrer" className="instagram-link">
            <img src={instagramIcon} alt="Instagram" className="footer-icon" />
            <span className="instagram-text">Instagram</span>
          </a>
        </div>

        <div className="whatsapp-container">
          <a href="https://wa.me/5571992662130?text=Bem-vindo%20ao%20EasyPrevBrasil,%20como%20posso%20lhe%20ajudar?" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="footer-icon" style={{ color: 'var(--color-whatsapp-green)' }}/> 
          </a>
          <a href="https://wa.me/5571992662130?text=Bem-vindo%20ao%20EasyPrevBrasil,%20como%20posso%20lhe%20ajudar?" target="_blank" rel="noopener noreferrer">
            <p><strong>WhatsApp</strong></p>
          </a>
        </div>

        <div className="contact-container">
          <div className="contact-info" onClick={handleShow} style={{ cursor: 'pointer' }}>
            <IoCalendarOutline className="footer-icon" />
            <p style={{ fontSize: '1.2em' }}>Agendar</p>
            </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          Razão Social: SIMPLE TECNOLOGIA DA INFORMACAO LTDA | CNPJ: 31.481.796/0001-75 | Endereço: SALVADOR SHOPPING BUSINESS TORRE AMERICA SALA 911 E 912 - SALVADOR, BA - (71) 99266-2130
        </p>
      </div>

      <ScheduleModal show={showModal} handleClose={handleClose} />
      
    </footer>
  );
}

export default Footer;
