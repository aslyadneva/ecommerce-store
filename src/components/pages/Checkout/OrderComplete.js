import React, { Component } from 'react'; 

import OrderDetail from './OrderDetail'; 
import ButtonGroup from './ButtonGroup'; 

class OrderComplete extends Component {
  render() {
    const { orderDetails } = this.props; 
    return (
      <div className="OrderComplete">
        <header className="OrderComplete__header">
          <i className="far fa-check-circle"></i>
          <div className="OrderComplete__thankYou">
            <span className="OrderComplete__orderNumber">Order #1494</span>
            <span className="OrderComplete__thankYou__text">Thank you {orderDetails.customer.firstName}!</span>
          </div>
        </header>

        <div style={{marginBottom: '2rem'}} className="OrderComplete__section">
          <h2 className="CheckoutForm__heading">Your order is confirmed</h2>
          <span style={{color: '#737373'}}>
            We've accepted your order, and we're getting it ready. 
            A confirmation email has been sent to <strong style={{color: '#333333'}}>{orderDetails.customer.email}</strong>.
            Come back to this page for updates on your order status.
          </span>
        </div>

        <div className="OrderComplete__section">
          <h2 className="CheckoutForm__heading">Customer Information</h2>

          <div className="OrderComplete__details">
            <OrderDetail title='Shipping address' content={orderDetails.customer}/>
            <OrderDetail title='Billing address' content={orderDetails.customer}/>
            <OrderDetail title='Shipping method' content={orderDetails.shippingMethod}/>
            <OrderDetail title='Payment method' content={orderDetails.payment}/>
          </div>
        </div>

        <ButtonGroup/>
        
      </div>
    )
  }
}

export default OrderComplete; 
