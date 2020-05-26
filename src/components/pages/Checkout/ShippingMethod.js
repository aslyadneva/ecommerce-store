import React, { Component } from 'react'; 

import RadioInput from './RadioInput'; 
import ButtonGroup from './ButtonGroup'; 

class ShippingMethod extends Component {
  handleChange = (event) => {
    this.props.change(event.target.name, event.target.value); 
  }

  handleSubmit = (event) => {
    event.preventDefault(); 
    this.props.next(); 
  }
 
  handleReturn = (event) => {
    event.preventDefault(); 
    this.props.prev(); 
  }

  render() { 
    const { shippingMethod } = this.props; 

    return (
      <form onSubmit={this.handleSubmit}>
        <h2 className="CheckoutForm__heading">Shipping Method</h2>
        <RadioInput selectedOption={shippingMethod} change={this.handleChange}/>     
        <ButtonGroup page={this.props.page} goBack={this.handleReturn}/>
      </form>
    )
  }
}

export default ShippingMethod; 
