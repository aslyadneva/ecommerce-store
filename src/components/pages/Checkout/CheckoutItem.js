import React from 'react'

const CheckoutItem = ({ image, quantity, name, size, price}) => {
  return (
    <div className="CheckoutItem">
      <div className="CheckoutItem__thumbnail">
        <img src={image} alt={name}/>
        <span className="CheckoutItem__quantity">{quantity}</span>
      </div>

      <div className="CheckoutItem__details">
        <span className="CheckoutItem__itemName">{name}</span>
        <span className="CheckoutItem__itemSize">{size}</span>      
      </div>

      <div className="CheckoutItem__price">${price.toFixed(2)}</div>
    </div>
  )
}

export default CheckoutItem; 
