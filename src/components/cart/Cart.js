import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeCart } from '../../actions';  
import CartItem from './CartItem'; 


class Cart extends Component {
  render () {
    return (
      <div 
        className="Drawer Drawer--fromRight" 
        aria-hidden={this.props.isOpen ? "false" : "true"}
        id="sidebar-cart"
      >

        <div className="Drawer__Header Drawer__Header--bordered Drawer__Container">

          <span className="Drawer__Title Heading u-h4">Cart</span>

          <button 
            onClick={this.props.closeCart}
            className="Drawer__Close Icon-Wrapper--clickable"
          >
            <i className="Icon Icon--close fas fa-times"></i>
          </button>

        </div>

        <form className="Drawer__Content">
          <div className="Drawer__Main">

            {/* <p className="Cart__Empty Heading u-h5">Your cart is empty</p> */}

            <div className="Drawer__Container">
              <div className="Cart__ItemList">
                <CartItem />
                <CartItem />
              </div>
            </div>

          </div>

          <div className="Drawer__Footer">
            <button className="Cart__Checkout Button Button--primary Button--full" type="submit">
              <span>Checkout</span>
              <span className="Button__SeparatorDot"></span>
              <span className="money">$165.99</span>
            </button>
          </div>
        </form>

      </div>
    );
  }
  
}
const mapStateToProps = state => {
  return { isOpen: state.cart.isOpen }
}
export default connect (mapStateToProps, {closeCart})(Cart);