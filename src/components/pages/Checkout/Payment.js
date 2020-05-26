import React, { Component, Fragment } from 'react'; 

import TextInput from './TextInput';

import ButtonGroup from './ButtonGroup'; 


class Payment extends Component {
  handleReturn = (event) => {
    event.preventDefault(); 
    this.props.prev(); 
  }

  handleSubmit = (event) => {
    event.preventDefault(); 
    this.props.next(); 
  }

  handleChange = (event) => {
    this.props.change(event.target.name, event.target.value); 
  }

  render() {
    return (
      <Fragment>
      <form onSubmit={this.handleSubmit}>
          <h2 className="CheckoutForm__heading">Payment</h2>
          {/* <p>All transactions are secure and encrypted</p> */}

          <div className="formGrid">
          <TextInput 
            type='text'
            placeholder='Card Number' 
            label='Card Number' 
            name='cardNumber' 
            value={this.props.cardNumber}
            change={this.handleChange}
          />

          <TextInput 
            type='text'
            placeholder='Name on card' 
            label='Name on card' 
            name='cardHolderName' 
            value={this.props.cardHolderName}
            change={this.handleChange}
          />

            <div className="formGrid formGrid--half">
              <TextInput 
                type='text'
                placeholder='Expiration date (MM/YY)' 
                label='Expiration date' 
                name='cardExpiry' 
                value={this.props.cardExpiry}
                change={this.handleChange}
              />

            
              <TextInput 
                  type='password'
                  placeholder='Security code' 
                  label='Security code' 
                  name='cardSecurityCode' 
                  value={this.props.cardSecurityCode}
                  change={this.handleChange}
              />
            </div>
           
          </div>

      <ButtonGroup page={this.props.page} goBack={this.handleReturn} />
      </form>
      </Fragment>
    )
  }
}

export default Payment; 
