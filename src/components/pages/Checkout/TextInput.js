import React from 'react'

const TextInput = ({type, placeholder, label, name, value, change}) => {
  // let inputContent; 

  // if(error === '') {
  //   inputContent = (
  //     <input  
  //       className="TextInput__input" 
  //       type={type}
  //       placeholder={placeholder} 
  //       name={name}
  //       value={value}
  //       onChange={change}  
  //       noValidate    
  //     />
  //   )
  // } else if (error) {
  //   inputContent = (
  //     <Fragment>
  //       <input  
  //       className="TextInput__input TextInput__input--error" 
  //       type={type}
  //       placeholder={placeholder} 
  //       name={name}
  //       value={value}
  //       onChange={change}  
  //       noValidate    
  //       />
  //       <span className="TextInput__errorText">{error}</span>
  //     </Fragment>
  //   )
  // }
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
        noValidate    
      />
    </div>
  )
}

export default TextInput; 
