import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import { connect } from 'react-redux';
import { closeCart, removeFromCart } from '../../actions';  
import CartItem from './CartItem'; 


class Cart extends Component {
  handleRemove = (item) => {
    this.props.removeFromCart(item); 
  } 

  renderCartContent (cartItems) {
    if (cartItems.length === 0) { return (<p className="Heading h5 Cart__empty">Your cart is empty</p>); } 
 
    return (
      <div className="Cart__itemList">
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
    ); 
  }

  renderTotal (cartItems) {
    return cartItems.reduce((acc, product)=> acc + product.price, 0); 
  }

  renderCartFooter(cartItems) {
    if (cartItems.length !== 0) {
      return (
        <div className="Cart__checkout">
            <button className="Button Button--full Button--primary Cart__checkoutButton"type="submit">
              <span className="Cart__checkoutSpan">Checkout</span>
              <span>{`$${this.renderTotal(cartItems).toFixed(2)}`}</span>
            </button>
        </div>
      ); 
    }

    return null;
  } 

  render () {
    const { cartItems, isOpen } = this.props; 
    return ReactDOM.createPortal (
      <div className="Cart__Modal" style={{visibility: isOpen ? "visible" : "hidden"}} onClick={this.props.closeCart}>

        <div className="Cart" onClick={e => e.stopPropagation()}>
          <div className="Cart__header">
            <span className="Heading h4">Cart</span>
            <button onClick={this.props.closeCart}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          <form className="Cart__content">             
            {this.renderCartContent(cartItems)}           
            {this.renderCartFooter(cartItems)}        
          </form>
        </div>

      </div>, 

      document.querySelector('#cart')
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









