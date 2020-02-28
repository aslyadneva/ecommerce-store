import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { addToCart, openCart } from '../../actions'; 
import ProductForm from '../ProductForm'; 


class Product extends Component {
  // Callback for ProductForm
  onSubmit = ({ quantity, size }) => {
    const { image, name, price, id } = this.props.product;

    // a product obj with a quantity and size is sent to addToCart()
    this.props.addToCart({ id, name, image, price, quantity, size })
  }

  render () {
    const { image, name, price, description } = this.props.product; 

    return (
      <section className="Product Product--medium">
        <div className="Product__Wrapper">

          {/* Product Image */}
          <div className="Product__Gallery Product__Gallery--stack Product__Gallery--withThumbnails">
            <div className="Product__Slideshow Carousel">
              <img src={image} alt={name}></img>
            </div>           
          </div> 
          
          {/* Product Details */}
          <div className="Product__InfoWrapper">
            <div className="Product__Info">
              <div className="Container">

                {/* Product Description */}
                <div className="ProductMeta">
                  <h1 className="ProductMeta__Title Heading u-h2">{name}</h1>
                  <div className="ProductMeta__PriceList Heading">
                    <span className="ProductMeta__Price Price Text--subdued u-h4">{`$${price}`}</span>     
                  </div>
                  <p className="afterpay-paragraph">or 4 interest free installments of bla bla bla</p>
                  <div className="ProductMeta__Description Rte">
                    <p>{description}</p>
                  </div>            
                </div>
              
                {/* Product Form */}
                <ProductForm 
                  initialValues={{ quantity: 1, size: "Small" }}
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
    product: state.products.filter(product => product.id === ownProps.match.params.name)[0]
  }
}

export default connect(mapStateToProps, {addToCart, openCart})(Product);