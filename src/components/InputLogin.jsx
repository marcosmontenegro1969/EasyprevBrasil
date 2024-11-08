import React from 'react';
import './InputLogin.css';

function InputLogin({ type, name, label, value, onChange, onFocus, autoComplete }) {
  return (
    <div className="grupo_Inputs">
      <input
        id={name}
        type={type}
        name={name}
        placeholder=" "
        required
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        autoComplete={autoComplete}
      />
      <label htmlFor={name} className="label_Contorno">
        {label}
      </label>
    </div>
  );
}

export default InputLogin;
