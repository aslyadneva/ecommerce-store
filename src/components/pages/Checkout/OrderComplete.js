import React, { Component } from 'react'

class OrderComplete extends Component {
  render() {
    const { orderDetails } = this.props; 
    return (
      <div>
        <header>
          <i class="far fa-check-circle"></i>
          Thank you {orderDetails.customer.firstName}!
        </header>

        <div>
          Your order is confirmed
        </div>

        <div>
          Cusomer Information
        </div>
        
      </div>
    )
  }
}

export default OrderComplete; 
