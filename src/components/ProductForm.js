import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class ProductForm extends Component {
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render () {
    return ( 
      //handleSubmit is a built in Redux Form function that calls your method of choice
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ProductForm">
        {/* Size Buttons */}
        <div className="ProductForm__Variants">
          <div className="ProductForm__Option ProductForm__Option--labelled">
            <label>
              <span className="ProductForm__Label">
                Size: 
                <button className="ProductForm__LabelLink Link Text--subdued">Size Chart</button>
              </span> 
            </label> 
  
            <ul className="SizeSwatchList HorizontalList HorizontalList--spacingTight">

              <li className="HorizontalList__Item">
                <Field name="size" component="input" type="radio" value="Small" />{' '}
                <label className="SizeSwatch">Small</label>
              </li>
              <li className="HorizontalList__Item">
                <Field name="size" component="input" type="radio" value="Medium" />{' '}
                <label className="SizeSwatch">Medium</label>
              </li>
              <li className="HorizontalList__Item">
                <Field name="size" component="input" type="radio" value="Large" />{' '}
                <label className="SizeSwatch">Large</label>
              </li>

            </ul> 
          </div>        
        </div>
        {/* Size Buttons End */}
        
        <button 
          type="submit"   
          className="ProductForm__AddToCart Button Button--full Button--secondary"
         >
            Add To Cart
        </button>   
      </form>
    );
  }  
}

export default reduxForm({form: 'productForm'})(ProductForm)