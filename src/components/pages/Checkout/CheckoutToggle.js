import React from 'react'

const CheckoutToggle = ({orderSummary, click}) => {
  return (
    <div className="CheckoutToggle" onClick={click}>
      <div className="CheckoutToggle__heading">

        <span className="CheckoutToggle__text">
          <i className="fas fa-shopping-cart"/>
          {orderSummary ? 'Hide': 'Show'} order summary <i className={`fas fa-chevron-${orderSummary ? 'up' : 'down'}`}/>
        </span>

        <span className="CheckoutToggle__total" >$69.99</span>

      </div>
    </div> 
  )
}

export default CheckoutToggle; 
