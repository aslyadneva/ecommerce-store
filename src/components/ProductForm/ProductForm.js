import React, { Component } from 'react'

class ProductForm extends Component {
  state = {
    selectedValue: "Small"
  }

  onSubmit = (event) => {
    event.preventDefault(); 
    this.props.onSubmit(this.state.selectedValue); 
  } 

  handleChange = (event) => {
    this.setState({selectedValue: event.target.value})
  }

  render () { 

    return ( 
      <form onSubmit={this.onSubmit} className="ProductForm">

        <div className="ProductForm__Variants"> 
          <label className="ProductForm__Label">Size:</label>
          <ul className="ProductForm__List">

            <li className="ProductForm__Item">
                <input 
                  className="SizeSwatch__Radio" 
                  id="small" 
                  name="size" 
                  type="radio" 
                  value="Small" 
                  checked={this.state.selectedValue === "Small"}
                  onChange={this.handleChange}
                />
                  {' '}
                <label htmlFor="small" className="SizeSwatch">Small</label>
            </li>

            <li className="ProductForm__Item">
                <input 
                  className="SizeSwatch__Radio" 
                  id="medium" 
                  name="size" 
                  type="radio" 
                  value="Medium" 
                  checked={this.state.selectedValue === "Medium"}
                  onChange={this.handleChange}
                />
                  {' '}
                <label htmlFor="medium" className="SizeSwatch">Medium</label>
            </li>

            <li className="ProductForm__Item">
                <input 
                  className="SizeSwatch__Radio" 
                  id="large" 
                  name="size" 
                  type="radio" 
                  value="Large" 
                  checked={this.state.selectedValue === "Large"}
                  onChange={this.handleChange}
                />
                  {' '}
                <label htmlFor="large" className="SizeSwatch">Large</label>
            </li>
          </ul> 
        </div> 

        <button className="Button Button--secondary Button--full" type="submit">Add To Cart</button>
      </form>
    );
  }  
}

export default ProductForm;