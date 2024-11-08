import React from 'react';
import './InputSelect.css';

function InputSelect({ name, label, value, onChange, options }) {
  return (
    <div className={`grupo_Selects`}>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
      <label htmlFor={name} className={`label_Contorno`}>
        {label}
      </label>
    </div>
  );
}

export default InputSelect;
