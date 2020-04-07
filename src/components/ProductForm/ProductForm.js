import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
// import './_productForm.scss'; 

class ProductForm extends Component {
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render () { 
    return ( 
      //handleSubmit is a built in Redux Form function that calls your method of choice
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ProductForm">

        <div className="ProductForm__Variants"> 
          <label className="ProductForm__Label">Size:</label>
          <ul className="ProductForm__List">
            <li className="ProductForm__Item">
                <Field className="SizeSwatch__Radio" id="small" name="size" component="input" type="radio" value="Small" />{' '}
                <label htmlFor="small" className="SizeSwatch">Small</label>
            </li>

            <li className="ProductForm__Item">
                <Field className="SizeSwatch__Radio" id="medium" name="size" component="input" type="radio" value="Medium" />{' '}
                <label htmlFor="medium" className="SizeSwatch">Medium</label>
            </li>

            <li className="ProductForm__Item">
                <Field className="SizeSwatch__Radio" id="large" name="size" component="input" type="radio" value="Large" />{' '}
                <label htmlFor="large" className="SizeSwatch">Large</label>
            </li>
          </ul> 
        </div> 

        <button className="Button Button--secondary Button--full" type="submit">Add To Cart</button>
      </form>
    );
  }  
}

export default reduxForm({form: 'productForm'})(ProductForm)