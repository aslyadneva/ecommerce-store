import React, { Component } from 'react'; 

import Breadcrumbs from './Breadcrumbs'; 
import Separator from '../../Separator'; 
import CustomerInfo from './CustomerInfo'; 
import ShippingMethod from './ShippingMethod'; 
import Payment from './Payment'; 
import OrderComplete from './OrderComplete'; 

class CheckoutForm extends Component {
  state = { 
    page: 1, 
    order: null, 
    orderComplete: false, 
    email: '', firstName: '', lastName: '', address: '', city: '', country: '', state: '', zipCode: '', phone: '', 
    shippingMethod: 'standard', 
    cardNumber: '1234 5678 9110 6754', cardHolderName: 'Mary Smith', cardExpiry: '04/26', cardSecurityCode: '***'
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
  }

  handleChange = (valueName, value) => {
    this.setState({ [valueName]: value })
  }

  handleSubmit = () => {
    const order = {
      customer: 
        {
          email: this.state.email,
          firstName: this.state.firstName, 
          lastName: this.state.lastName, 
          address: this.state.address, 
          city: this.state.city, 
          country: this.state.country, 
          state: this.state.state, 
          zipCode: this.state.zipCode, 
          phone: this.state.phone, 
        }, 
      shippingMethod: this.state.shippingMethod, 
      payment: 
        {
          cardNumber: this.state.cardNumber, 
          cardHolderName: this.state.cardHolderName, 
          cardExpiry: this.state.cardExpiry, 
          cardSecurityCode: this.state.cardSecurityCode
        }, 
      products: this.props.products
    }
    this.setState({order: order})
    
    console.log(order); 
    this.setState({orderComplete: true})
  }

  render() {
    const { page, orderComplete, order } = this.state; 
    const { email, firstName, lastName, address, city, country, state, zipCode, phone, 
    shippingMethod,
    cardNumber, cardHolderName, cardExpiry, cardSecurityCode } = this.state; 

    return (
      <div className="CheckoutForm">
        {orderComplete ? <OrderComplete orderDetails={order}/> : null}
        {orderComplete ? null : <Breadcrumbs page={page}/> }

        {!orderComplete ? <Separator/> : null}

        {!orderComplete && page === 1 && 
          <CustomerInfo 
            email={email} 
            firstName={firstName} lastName={lastName} address={address} city={city} country={country} state={state} zipCode={zipCode} phone={phone} 
            change={this.handleChange} next={this.nextPage}
            page={page}
          />
        }

        {!orderComplete && page === 2 && 
          <ShippingMethod 
            shippingMethod={shippingMethod}
            change={this.handleChange} next={this.nextPage} prev={this.previousPage}
            page={page}
          />
        }   

        {!orderComplete && page === 3 && 
          <Payment 
            cardNumber={cardNumber} cardHolderName={cardHolderName} cardExpiry={cardExpiry} cardSecurityCode={cardSecurityCode}
            change={this.handleChange} next={this.handleSubmit} prev={this.previousPage}
            page={page}
          />
        }          
      </div>
    )
  }
}

export default CheckoutForm
