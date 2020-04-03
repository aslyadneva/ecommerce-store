import React, {Component} from 'react';
import QuantityForm from '../QuantityForm'; 
import {connect} from 'react-redux'; 
import { increaseQuantity, decreaseQuantity } from '../../actions'; 
import './cart.css'; 


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
    const { image, title, size, price, quantity } = this.props; 
    return (
      <div className="CartItemWrapper">
        <div className="CartItem">
          <div className="CartItem__ImageWrapper AspectRatio">
            <img src={image} alt={title}/>
          </div>
          
          <div className="CartItem__Info">
  
            <h2 className="CartItem__Title Heading">{title}</h2>
  
            <div className="CartItem__Meta Heading Text--subdued">
              <p className="CartItem__Variant">{size}</p>
              <div className="CartItem__PriceList">
                <span className="CartItem__Price Price">
                  <span className="money">{`$${price}`}</span>
                </span>
              </div>
            </div>
  
            <div className="CartItem__Actions Heading Text--subdued">

              {/* // Quantity Selector Buttons  */}
              <QuantityForm 
                quantity={quantity} 
                onIncrease={this.increaseItemQuantity} 
                onDecrease={this.decreaseItemQuantity}
              />
  
              {/* Remove Button */}
              <button onClick={this.handleClick}>
                Remove
              </button>
            </div>
  
          </div>
        </div>  
      </div>
    );
  }
  
}

export default connect (null, { increaseQuantity, decreaseQuantity })(CartItem);