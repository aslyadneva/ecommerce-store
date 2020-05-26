import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { addToCart } from '../actions'; 
import ProductForm from './ProductForm/ProductForm'; 

class FeaturedProduct extends Component {

  // Callback for ProductForm
  onSubmit = (size) => {
    const { image, name, price, id } = this.props.product;

    // a product obj with a quantity and size is sent to addToCart()
    this.props.addToCart({ id, name, image, price, quantity: 1, size })
  }

  render () {
    const { image, name, price, description } = this.props.product; 

    return (
      <section className="Product Product--featured">
          {/* Product Image */}  
          <div className="Product__Gallery">    
            <img className="Product__Image" src={image} alt={name}></img>
          </div>  

          {/* Product Info */}
          <div className="Product__Info">       
              <div className="Product__Meta">
                <h1 className="Heading h2">{name}</h1>     
                <span className="Heading Text--subdued h4">{`$${price}`}</span>     
                <p className="ProductMeta__Description">{description}</p>
              </div>
              <ProductForm initialValues={{ quantity: 1, size: "Small" }} onSubmit={this.onSubmit}/>
          </div>
      </section>
    );
  }    

}


export default connect(null, {addToCart})(FeaturedProduct);