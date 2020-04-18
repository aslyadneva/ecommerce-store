import React from 'react'

const TextInput = ({type, placeholder, label, name, value, change}) => {
  return (
    <div className="TextInput">
      <label className="TextInput__label">{label}</label>

      <input 
        className="TextInput__input" 
        type={type}
        placeholder={placeholder} 
        name={name}
        value={value}
        onChange={change}       
      />

    </div>
  )
}

export default TextInput; 
