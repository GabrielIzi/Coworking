import React, { useState } from 'react';
import './Login.css';
import logo from './assets/logo.png';

export default function Login() {
  const [cpf, setCpf] = useState('');

  const handleCpfChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1-$2');
    setCpf(value);
  };

  return (
    <div className="login-page">
      <div className="breadcrumb">
        <a href="/">HOME</a> / Login
      </div>

      <div className="Painel-Login">
        <img src={logo} alt="Logo" />
        <div className="Inputs">
          <p>CPF</p>
          <input
            type="text"
            value={cpf}
            onChange={handleCpfChange}
            maxLength="14"
            placeholder="Digite seu CPF"
          />
          <p>Senha</p>
          <input type="password" placeholder="Digite sua senha" />
        </div>

        <ul className="OP-LoginRegistro">
          <li><a href="/Registro">Primeiro Acesso?</a></li>
          <li><a href="#">Esqueceu a Senha?</a></li>
        </ul>

        <div className="social-icons">
          <i className="fa-brands fa-google"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-discord"></i>
        </div>

        <a href="/" className="BTN-acessar">Acessar</a>
      </div>
    </div>
  );
}
