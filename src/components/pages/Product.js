import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { addToCart, openCart } from '../../actions'; 
import ProductForm from '../ProductForm'; 

class Product extends Component {
  //Callback for StreamForm
  onSubmit = (formValues) => {
    const item = this.props.product; 
    const itemToBeAdded = {...formValues, ...item}
    // EXAMPLE!!!! this.props.editStream(this.props.match.params.id, formValues); 
    console.log(itemToBeAdded); 
    // USE FOR LATER this.props.openCart();
  }

  render () {
    return (
      <section className="Product Product--medium">
        <div className="Product__Wrapper">

          {/* Product Image */}
          <div className="Product__Gallery Product__Gallery--stack Product__Gallery--withThumbnails">
            <div className="Product__Slideshow Carousel">
              <img src={this.props.product.img} alt={this.props.product.name}></img>
            </div>           
          </div>
          
          {/* Product Details */}
          <div className="Product__InfoWrapper">
            <div className="Product__Info">
              <div className="Container">

                {/* Product Description */}
                <div className="ProductMeta">
                  <h1 className="ProductMeta__Title Heading u-h2">{this.props.product.name}</h1>
                  <div className="ProductMeta__PriceList Heading">
                    <span className="ProductMeta__Price Price Text--subdued u-h4">{`$${this.props.product.price}`}</span>     
                  </div>
                  <p className="afterpay-paragraph">or 4 interest free installments of bla bla bla</p>
                  <div className="ProductMeta__Description Rte">
                    <p>{this.props.product.description}</p>
                  </div>            
                </div>
              
                {/* Product Form */}
                <ProductForm 
                  initialValues={{ quantity: 1 }}
                  onSubmit={this.onSubmit}
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
  
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.products[ownProps.match.params.name]
  }
}

export default connect(mapStateToProps, {addToCart, openCart})(Product);