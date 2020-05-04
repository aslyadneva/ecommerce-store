import React, { Component } from 'react'

class QuantityForm extends Component {

  render () {
    return (  
      <div className="QuantityForm">

        <button onClick ={(e) => {e.preventDefault(); this.props.onDecrease()}} className="QuantityForm__button" >
          <i className="fas fa-minus"></i>
        </button>

        <div>{this.props.quantity}</div>
          {/* <Field
            name="itemQuantity"
            component="input"
            type="text"
            placeholder={this.props.initialValues.itemQuantity}
          /> */}
                   
        <button onClick ={(e) => {e.preventDefault(); this.props.onIncrease()}} className="QuantityForm__button">
          <i className="fas fa-plus"></i>
        </button>

      </div>
    );
  }
}

export default QuantityForm; 

