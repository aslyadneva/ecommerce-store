import React from 'react'

const RadioInput = ({selectedOption, change}) => {
  return (
    <div className="RadioInput">
      <div className="RadioInput__row">
          <div className="RadioInput__radio">
            <input 
              type="radio" 
              name='shippingMethod' 
              value='standard'
              checked = {selectedOption === 'standard'}
              onChange={change}
            />
          </div>

          <label className="RadioInput__label">
            <span>Standard Shipping (7-14 business days)</span>
            <span className="RadioInput__price">$6.95</span>
          </label>
      </div>

      <div className="RadioInput__row RadioInput__row--last">
          <div className="RadioInput__radio">
            <input 
              type="radio" 
              name='shippingMethod' 
              value='express'
              checked = {selectedOption === 'express'}
              onChange={change}
            />
          </div>

          <label className="RadioInput__label">
            <span>Express Shipping (2-4 business days)</span>
            <span className="RadioInput__price">$16.99</span>
          </label>
      </div>
  
    </div>
  )
}

export default RadioInput; 
