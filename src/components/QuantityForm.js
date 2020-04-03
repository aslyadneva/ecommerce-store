import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class QuantityForm extends Component {

  render () {
    return (
      <div className="CartItem__QuantitySelector">
        <div className="QuantitySelector">

          <button onClick ={(e) => {e.preventDefault(); this.props.onDecrease()}} className="QuantitySelector__Button" >
            <i className="fas fa-minus"></i>
          </button>

          <div>{this.props.quantity}</div>
          {/* <Field
            name="itemQuantity"
            component="input"
            type="text"
            placeholder={this.props.initialValues.itemQuantity}
          /> */}
                   
          <button onClick ={(e) => {e.preventDefault(); this.props.onIncrease()}} className="QuantitySelector__Button">
            <i className="fas fa-plus"></i>
          </button>

        </div>
      </div> 
    );
  }
}

export default QuantityForm; 

