import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Toast } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './ScheduleModal.css';
import InputLogin from './InputLogin';
import InputTextArea from './InputTextArea';
import InputSelect from './InputSelect';

function ScheduleModal({ show, handleClose }) {
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    explanation: '',
    phone: '',
    whatsapp: '',
    email: '',
    preference: 'whatsapp',
    bestTime: ''
  });

  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      ...(name === 'phone' && { whatsapp: value })
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!validateCPF(formData.cpf)) {
      setShowToast(true);
      setToastMessage('CPF inválido');
      return;
    }
  
    if (!validateEmail(formData.email)) {
      setShowToast(true);
      setToastMessage('Email inválido');
      return;
    }
  
    const excelLine = `${formData.name};${formData.cpf};${formData.email};${formData.explanation};${formData.phone};${formData.whatsapp};${formData.preference};${formData.bestTime}`;
    const emailContent = {
      name: formData.name,
      cpf: formData.cpf,
      explanation: formData.explanation,
      phone: formData.phone,
      whatsapp: formData.whatsapp,
      email: formData.email,
      preference: formData.preference,
      bestTime: formData.bestTime,
      excel_line: excelLine
    };
  
    setLoading(true);
    emailjs.send('service_pgw0ldr', 'template_t4j2xcd', emailContent, 'TBAHdIpKdATNbC0Bo')
      .then((result) => {
        setShowToast(true);
        setToastMessage('Email enviado com sucesso!, aguarde o contato de nossa equipe');
        setFormData({
          name: '',
          cpf: '',
          explanation: '',
          phone: '',
          whatsapp: '',
          email: '',
          preference: 'whatsapp',
          bestTime: ''
        });
        setLoading(false);
        handleClose();
      }, (error) => {
        setToastMessage('Erro ao enviar email: ' + error.text);
        setShowToast(true);
        setLoading(false);
      });
  };
    
  const handleCloseWithClear = () => {
    setFormData({
      name: '',
      cpf: '',
      explanation: '',
      phone: '',
      whatsapp: '',
      email: '',
      preference: 'whatsapp',
      bestTime: ''
    });
    handleClose();
  };

  const validateCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
  
    let sum = 0;
    let remainder;
    for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;
  
    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    return remainder === parseInt(cpf.substring(10, 11));
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  const handleKeyPress = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleCloseWithClear} centered>
        <Modal.Header style={{ backgroundColor: 'var(--color-dark-blue)', 
                               color: 'var(--color-white)', 
                               padding: '1rem 1rem', 
                               borderBottom: '2px solid var(--color-gold)' }}>
          <Modal.Title>Agende sua Consulta</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit} id="scheduleForm" style={{ cursor: loading ? 'wait' : 'default' }}>
            <Form.Group controlId="formName">
              <InputLogin
                type="text"
                name="name"
                label="Nome Completo"
                value={formData.name}
                onChange={handleChange}
                autoComplete="off"
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group controlId="formCPF">
                  <InputLogin
                    type="text"
                    name="cpf"
                    label="CPF"
                    value={formData.cpf}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <InputLogin
                    type="email"
                    name="email"
                    label="Email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formDescription">
              <InputTextArea
                name="explanation"
                label="Breve Explicação"
                value={formData.explanation}
                onChange={handleChange}
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group controlId="formPhone">
                <InputLogin
                    type="text"
                    name="phone"
                    label="Fone (apenas números)"
                    value={formData.phone}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formWhatsapp">
                <InputLogin
                    type="text"
                    name="whatsapp"
                    label="WhatsApp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group controlId="formPreference">
                  <InputSelect
                    name="preference"
                    label="Preferência"
                    value={formData.preference}
                    onChange={handleChange}
                    options={[
                      { value: 'whatsapp', label: 'Whatsapp' },
                      { value: 'voz', label: 'Voz' },
                      { value: 'email', label: 'Email' }
                    ]}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formBestTime">
                  <InputLogin
                    type="text"
                    name="bestTime"
                    label="Melhor Horário"
                    value={formData.bestTime}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', backgroundColor: 'var(--color-dark-blue)', borderTop: '2px solid var(--color-gold)' }}>
          <Button variant="enviar" type="submit" form="scheduleForm" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar'}
          </Button>
          <Button variant="fechar" onClick={handleCloseWithClear} disabled={loading}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'var(--color-gold)',
          border: '2px solid var(--color-light-blue)',
          color: 'var(--color-dark-blue)',
          zIndex: 1060,
        }}>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
    </>
  );
}

export default ScheduleModal;

