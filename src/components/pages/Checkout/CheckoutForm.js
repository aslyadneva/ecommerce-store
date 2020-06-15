import React, { Component } from 'react'; 

import {connect} from 'react-redux'; 
import { addShipping } from '../../../actions'; 
import Breadcrumbs from './Breadcrumbs'; 
import Separator from '../../Separator'; 
import CustomerInfo from './CustomerInfo'; 
import ShippingMethod from './ShippingMethod'; 
import Payment from './Payment'; 
import OrderComplete from './OrderComplete'; 

class CheckoutForm extends Component {
  state = { 
    page: 1, 

    email: 'testuser@mail.com', firstName: 'Mary', lastName: 'Smith', address: '1234 Main St', city: 'New York', country: 'United States', state: 'NY', zipCode: '123456', phone: '(123) 456-7891', 
    shippingMethod: '', 
    cardNumber: '1234 5678 9110 6754', cardHolderName: 'Mary Smith', cardExpiry: '04/26', cardSecurityCode: '***',

    errors: {
      email: '', firstName: '', lastName: '', address: '', city: '', zipCode: '', phone: ''
    }
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
  }

  handleChange = (valueName, value) => {
    this.setState({
      [valueName]: value 
    }, () => {
      if (valueName === 'shippingMethod') {
        if (this.state.shippingMethod === 'standard') {
          this.props.addShipping('standard')
        } else if (this.state.shippingMethod === 'express') {
          this.props.addShipping('express')
        }
      }  
    }); 
  }

  handleSubmit = () => {
    const order = {
      customer: 
        { 
          id: 'guest',
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
      products: this.props.products, 
      subTotal: this.props.subTotal, 
      shippingAmount: this.props.shipping, 
      total: this.props.subTotal + this.props.shipping
    }
    this.props.onPayment(order)          
  }
 
  render() {
    const { page, errors } = this.state; 
    const { email, firstName, lastName, address, city, country, state, zipCode, phone, 
    shippingMethod,
    cardNumber, cardHolderName, cardExpiry, cardSecurityCode } = this.state; 
    const { order } = this.props; 

    return (
      <div className="CheckoutForm">
        {order ? <OrderComplete orderDetails={order}/> : null}
        {order ? null : <Breadcrumbs page={page}/> }

        {!order ? <Separator/> : null}

        {!order && page === 1 && 
          <CustomerInfo 
            errors={errors}
            email={email} 
            firstName={firstName} lastName={lastName} address={address} city={city} country={country} state={state} zipCode={zipCode} phone={phone} 
            change={this.handleChange} next={this.nextPage}
            page={page}
          /> 
        }

        {!order && page === 2 && 
          <ShippingMethod 
            shippingMethod={shippingMethod}
            change={this.handleChange} next={this.nextPage} prev={this.previousPage}
            page={page}
          />
        }   

        {!order && page === 3 && 
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

const mapStateToProps = state => {
  return {
    products: state.cart.products, 
    subTotal: state.total.subTotal, 
    shipping: state.total.shipping, 
    user: state.auth.user
  }
}

export default connect(mapStateToProps, {addShipping})(CheckoutForm);
