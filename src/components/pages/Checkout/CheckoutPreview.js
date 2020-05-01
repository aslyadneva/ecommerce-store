import React from 'react'; 
import CheckoutItem from './CheckoutItem'; 

const CheckoutPreview = ({products, isOpen, subTotal, shipping}) => {
  return (
    <div className={`CheckoutPreview ${isOpen ? 'CheckoutPreview--isExpanded' : 'CheckoutPreview--isCollapsed'}`}>

      <div className="CheckoutPreview__items">
        {products.map(product => <CheckoutItem key={`${product.id}-${product.size}`} {...product}/>)}                  
      </div>

      <div className="CheckoutPreview__pricing" style={{color: '#525252'}}>
        <div className="CheckoutPreview__pricing__section" style={{ marginBottom: '1rem'}}>
          Subtotal
          <span>${subTotal.toFixed(2)}</span>
        </div>

        <div className="CheckoutPreview__pricing__section">
          Shipping
          <span>{shipping === 0 ? 'TBD' : `$${shipping}`}</span>
        </div>
      </div>

      <div className="CheckoutPreview__total">
        <span className="CheckoutPreview__total__text">Total</span>
        <div className="CheckoutPreview__total__price">
          <span className="CheckoutPreview__currency">USD</span>
          <span className="CheckoutPreview__totalDue">${!shipping ? subTotal.toFixed(2) : (subTotal + shipping).toFixed(2)}</span>
        </div>
      </div>

    </div>         
  )
}

export default CheckoutPreview; 
