import React from 'react'; 
import CheckoutItem from './CheckoutItem'; 

const CheckoutPreview = ({products}) => {
  return (
    <div className="CheckoutPreview">

      <div className="CheckoutPreview__items">
        {products.map(product => <CheckoutItem  {...product}/>)}                  
      </div>

      <div className="CheckoutPreview__pricing">Pricing Summary</div>

      <div className="CheckoutPreview__total">
        <span className="CheckoutPreview__total__text">Total</span>
        <div className="CheckoutPreview__total__price">
          <span className="CheckoutPreview__currency">USD</span>
          <span className="CheckoutPreview__totalDue">$69.99</span>
        </div>
      </div>

    </div>         
  )
}

export default CheckoutPreview; 
