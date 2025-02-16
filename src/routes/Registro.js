import { useState } from "react";
import "./Registro.css";
import logo from './assets/logo.png';

const Registro = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const previousStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="registro-page">
      <div className="breadcrumb">
        <a href="/">HOME</a> / Registro
      </div>
      <div className="container">
        <div className="div-logo-registro">
            <img src={logo} alt="Logo" className="logo-registro" />
        </div>
        <div className="steps">
          {[1, 2, 3].map((num) => (
            <>
              <div key={num} className={`step ${num <= step ? "active" : ""}`}>{num}</div>
              {num < 3 && <div className="line"></div>}
            </>
          ))}
        </div>

        {step === 1 && (
          <div className="form-step active">
            <div className="form-group">
              <label>Nome Completo</label>
              <input type="text" placeholder="Digite seu nome completo" />
            </div>
            <div className="form-group">
              <label>CPF</label>
              <input type="text" placeholder="Digite seu CPF" maxLength="14" />
            </div>
            <div className="form-group">
              <label>Data de Nascimento</label>
              <input type="date" />
            </div>
            <a href="/login" className="logar">Já tem uma conta?</a>
            <button className="btn" onClick={nextStep}>Próximo &gt;</button>
          </div>
        )}

        {step === 2 && (
          <div className="form-step active">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Digite seu email" />
            </div>
            <div className="form-group">
              <label>Telefone</label>
              <input type="text" placeholder="Digite seu telefone" maxLength="15" />
            </div>
            <button className="btn-voltar" onClick={previousStep}>&lt; Voltar</button>
            <button className="btn" onClick={nextStep}>Próximo &gt;</button>
          </div>
        )}

        {step === 3 && (
          <div className="form-step active">
            <div className="form-group">
              <label>Código de Confirmação</label>
              <input type="text" placeholder="Digite o código enviado" />
            </div>
            <button className="btn-voltar" onClick={previousStep}>&lt; Voltar</button>
            <a href="index.html" className="btn">Confirmar</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registro;
