import React from 'react'; 
import CheckoutItem from './CheckoutItem'; 

const CheckoutPreview = ({products, isOpen}) => {
  return (
    <div className={`CheckoutPreview ${isOpen ? 'CheckoutPreview--isExpanded' : 'CheckoutPreview--isCollapsed'}`}>

      <div className="CheckoutPreview__items">
        {products.map(product => <CheckoutItem  {...product}/>)}                  
      </div>

      <div className="CheckoutPreview__pricing" style={{color: '#525252'}}>
        <div className="CheckoutPreview__pricing__section" style={{ marginBottom: '1rem'}}>
          Subtotal
          <span>$69.99</span>
        </div>

        <div className="CheckoutPreview__pricing__section">
          Shipping
          <span>TBD</span>
        </div>
      </div>

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
