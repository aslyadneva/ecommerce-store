import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import { connect } from 'react-redux';
import { closeCart, removeFromCart, checkingOut } from '../../actions';  
import CartItem from './CartItem'; 
import axios from 'axios'; 


class Cart extends Component {
  handleRemove = (item) => {
    this.props.removeFromCart(item); 
  } 

  handleCheckoutClick = (e) => {
    e.preventDefault(); 
    this.props.closeCart(); 
    this.props.checkingOut(true);
    this.props.history.replace('/checkout');
    // const order = {
    //   items: this.props.cartItems, 
    //   customer: {
    //     name: 'Pandegrosa Bla', 
    //     address: '5 Test street, Winnipeg, Canada', 
    //   }, 
    //   delivery: 'slowest'
    // }
    // axios.post(`https://react-e-commerce-65275.firebaseio.com/orders.json`, order)
    //   .then(
    //     response => {
    //       console.log(response); 
    //       this.props.closeCart(); 
    //     }
    //   )
    //   .catch(error => console.log(error));
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

  renderCartFooter(cartItems, total) {
    if (cartItems.length !== 0) {
      return (
        <div className="Cart__checkout">
            <button 
              onClick={this.handleCheckoutClick} 
              className="Button Button--full Button--primary Cart__checkoutButton"
            >
              <span className="Cart__checkoutSpan">Checkout</span>
              <span>{`$${total.toFixed(2)}`}</span>
            </button>
        </div>
      ); 
    }

    return null;
  } 
 
  render () {
    const { cartItems, isOpen, total } = this.props; 
    return ReactDOM.createPortal (
      <div className="Cart__Modal" style={{visibility: isOpen ? "visible" : "hidden"}} onClick={this.props.closeCart}>

        <div className="Cart" onClick={e => e.stopPropagation()}>
          <div className="Cart__header">
            <span className="Heading h4">Cart</span>
            <button onClick={this.props.closeCart}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="Cart__content">             
            {this.renderCartContent(cartItems)}           
            {this.renderCartFooter(cartItems, total)}        
          </div>
        </div>

      </div>, 

      document.querySelector('#cart')
    );
  }
  
}
const mapStateToProps = state => {
  return { 
    isOpen: state.cart.isOpen, 
    cartItems: state.cart.products, 
    total: state.total.subTotal
  }
}
export default connect (mapStateToProps, { closeCart, removeFromCart, checkingOut })(Cart);









