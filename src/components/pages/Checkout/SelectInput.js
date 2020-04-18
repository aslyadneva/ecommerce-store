import React from 'react'

const SelectInput = ({placeholder, name, value, change, options}) => {
  return (
    <div className="SelectInput">
      <label className="SelectInput__label">Label</label>

      <select 
        className="SelectInput__select" 
        placeholder="Select something" 
        value={value}
        name={name}
        onChange={change}
      > 
        <option value='' defaultValue>{placeholder}</option>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>

      <div className="SelectInput__caret">
        <i className="fas fa-caret-down"/>
      </div>
    </div>
  )
}

export default SelectInput; 