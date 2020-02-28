import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeCart, removeFromCart } from '../../actions';  
import CartItem from './CartItem'; 


class Cart extends Component {
  handleRemove = (item) => {
    this.props.removeFromCart(item); 
  }

  renderCartContent (cartItems) {
    if (cartItems.length === 0) { return (<p className="Cart__Empty Heading u-h5">Your cart is empty</p>); } 

    return (
      <div className="Drawer__Container">
          <div className="Cart__ItemList">

            {cartItems.map(item => {
              return (
                <CartItem 
                  item = {item}
                  key = {item.id}
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
        <div className="Drawer__Footer">
            <button className="Cart__Checkout Button Button--full" type="submit">
              <span>Checkout</span>
              <span className="Button__SeparatorDot"></span>
              <span className="money">{`$${this.renderTotal(cartItems)}`}</span>
            </button>
        </div>
      ); 
    }

    return null;
  }

  render () {
    const { cartItems, isOpen } = this.props; 
    return (
      <div id="sidebar-cart" className="Drawer Drawer--fromRight" aria-hidden={isOpen ? "false" : "true"}>
        <div className="Drawer__Header Drawer__Header--bordered Drawer__Container">
          <span className="Drawer__Title Heading u-h4">Cart</span>
          <button onClick={this.props.closeCart} className="Drawer__Close Icon-Wrapper--clickable">
            <i className="Icon Icon--close fas fa-times"></i>
          </button>
        </div>

        <form className="Drawer__Content">
          <div className="Drawer__Main">          
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









