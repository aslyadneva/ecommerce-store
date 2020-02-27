import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeCart, removeFromCart } from '../../actions';  
import CartItem from './CartItem'; 


class Cart extends Component {
  handleRemove = (item) => {
    this.props.removeFromCart(item); 
  }

  renderCartContent () {
    if (this.props.cartItems.length === 0) {
      return (
        <p className="Cart__Empty Heading u-h5">Your cart is empty</p>
      ); 
    } 

    return (
      <div className="Drawer__Container">
          <div className="Cart__ItemList">


            {(this.props.cartItems).map(item => {
              if (item.name )




              return (
                <CartItem 
                  title={item.name}
                  image={item.img}
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

  renderCartFooter() {
    if (this.props.cartItems.length !== 0) {
      return (
        <div className="Drawer__Footer">
            <button className="Cart__Checkout Button Button--full" type="submit">
              <span>Checkout</span>
              <span className="Button__SeparatorDot"></span>
              <span className="money">{`$${this.props.total}`}</span>
            </button>
        </div>
      ); 
    }

    return null;
  }

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
            
            {/* {this.renderCartContent()} */}
            
          </div>

            {/* {this.renderCartFooter()} */}

          
        </form>

      </div>
    );
  }
  
}
const mapStateToProps = state => {
  return { 
    isOpen: state.cart.isOpen, 
    cartItems: state.cart.products, 
    total: state.cart.total
  }
}
export default connect (mapStateToProps, { closeCart, removeFromCart })(Cart);









