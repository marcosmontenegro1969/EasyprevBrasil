import React from 'react';
import './InputTextArea.css';

function InputTextArea({ name, label, value, onChange, onFocus, rows = 3 }) {
  return (
    <div className={`grupo_TextArea`}>
      <textarea
        id={name}
        name={name}
        placeholder=" "
        required
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        rows={rows}
      />
      <label htmlFor={name} className={`label_Contorno`}>
        {label}
      </label>
    </div>
  );
}

export default InputTextArea;
