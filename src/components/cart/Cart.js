import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeCart, removeFromCart } from '../../actions';  
import CartItem from './CartItem'; 
import './cart.css'; 


class Cart extends Component {
  handleRemove = (item) => {
    this.props.removeFromCart(item); 
  }

  renderCartContent (cartItems) {
    if (cartItems.length === 0) { return (<p>Your cart is empty</p>); } 

    return (
      <div >
          <div >

            {cartItems.map(item => {
              return (
                <CartItem 
                  item = {item}
                  key = {`${item.id}-${item.size}`}
                  title={item.name}
                  image={item.image}
                  size={item.size}
                  price={item.price}
                  quantity={item.quantity}
                  remove={this.handleRemove}
                />
              );
            })}

          </div>
      </div>
    ); 
  }

  renderTotal (cartItems) {
    return cartItems.reduce((acc, product)=> acc + product.price, 0); 
  }

  renderCartFooter(cartItems) {
    if (cartItems.length !== 0) {
      return (
        <div>
            <button type="submit">
              <span>Checkout</span>
              <span ></span>
              <span >{`$${this.renderTotal(cartItems)}`}</span>
            </button>
        </div>
      ); 
    }

    return null;
  } 

  render () {
    const { cartItems, isOpen } = this.props; 
    return (
      <div id="sidebar-cart" style={{visibility: isOpen ? "visible" : "hidden"}} className="Cart">
        <div>
          <span >Cart</span>
          <button onClick={this.props.closeCart}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <form>
          <div>          
            {this.renderCartContent(cartItems)}           
          </div>
          {this.renderCartFooter(cartItems)}        
        </form>

      </div>
    );
  }
  
}
const mapStateToProps = state => {
  return { 
    isOpen: state.cart.isOpen, 
    cartItems: state.cart.products
  }
}
export default connect (mapStateToProps, { closeCart, removeFromCart })(Cart);









