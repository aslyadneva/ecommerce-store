import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class QuantityForm extends Component {

  render () {
    return (
      <div className="CartItem__QuantitySelector">
        <div className="QuantitySelector">

          <button onClick ={this.props.handleSubmit(() => this.props.onDecrease(this.props.initialValues.itemQuantity))} className="QuantitySelector__Button" >
            <i className="fas fa-minus"></i>
          </button>

          <Field
            name="itemQuantity"
            component="input"
            type="text"
            placeholder={this.props.initialValues.itemQuantity}
          />
                   
          <button onClick ={this.props.handleSubmit(() => this.props.onIncrease())} className="QuantitySelector__Button">
            <i className="fas fa-plus"></i>
          </button>

        </div>
      </div> 
    );
  }
}

export default reduxForm({form: 'quantityForm', enableReinitialize: true})(QuantityForm)

