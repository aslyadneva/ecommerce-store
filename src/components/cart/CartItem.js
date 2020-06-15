import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import QuantityForm from '../QuantityForm'; 
import { connect } from 'react-redux'; 
import { increaseQuantity, decreaseQuantity, closeCart } from '../../actions'; 

class CartItem extends Component {

  handleClick = (e) => {
    e.preventDefault(); 
    this.props.remove(this.props.item);
  }

  increaseItemQuantity = () => {
    this.props.increaseQuantity(this.props.item); 
  }

  decreaseItemQuantity = () => {
    if (this.props.quantity === 1) {
      this.props.remove(this.props.item); 
    } else {
      this.props.decreaseQuantity(this.props.item); 
    }  
  }

  render () { 
    const { image, title, size, price, quantity, item: {id} } = this.props; 
    return (
      <div className="CartItem">
        
        <div className="CartItem__image">
          <img src={image} alt={title}/>
        </div>

        <div className="CartItem__content">
          <h2 className="CartItem__title Heading" onClick={() => this.props.closeCart()}><Link to={`/products/${id}`}>{title}</Link></h2>
          
          <div className="CartItem__info Heading Text--subdued">
            <p className="CartItem__Variant">{size}</p>              
            <span className="money">{`$${price.toFixed(2)}`}</span>
          </div>
           
          <div className="CartItem__actions Heading Text--subdued">
            {/* // Quantity Selector Buttons  */}
            <QuantityForm 
              quantity={quantity} 
              onIncrease={this.increaseItemQuantity} 
              onDecrease={this.decreaseItemQuantity}
            />
        
            {/* Remove Button */}
            <span className="CartItem__remove" onClick={this.handleClick}>Remove</span>
          </div>
        </div>
        
      </div>                  
    );
  }
  
}

export default connect (null, { increaseQuantity, decreaseQuantity, closeCart })(CartItem);