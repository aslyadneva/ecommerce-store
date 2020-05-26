import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { addToCart, setNavColor } from '../../../actions'; 
import ProductForm from '../../ProductForm/ProductForm'; 

class Product extends Component {

  componentDidMount () {
    this.props.setNavColor('opaque'); 
  } 

  componentWillUnmount() {
    this.props.setNavColor(null);
  }   

  // Callback for ProductForm
  onSubmit = (size) => {
    const { image, name, price, id } = this.props.product;

    // a product obj with a quantity and size is sent to addToCart()
    this.props.addToCart({ id, name, image, price, quantity: 1, size })
  }
 
  render () {
    const { image, name, price, description } = this.props.product; 

    return (
      <section className="Product">
          {/* Product Image */}  
          <div className="Product__Gallery">    
            <img className="Product__Image" src={image} alt={name}></img>
          </div>  

          {/* Product Info */}
          <div className="Product__Info">       
              <div className="Product__Meta">
                <h1 className="Heading h2">{name}</h1>     
                <span className="Heading Text--subdued h4">{`$${price}`}</span>     
                {/* <p>or 4 interest free installments of bla bla bla</p> */}
                <p className="ProductMeta__Description">{description}</p>
              </div>
              <ProductForm onSubmit={this.onSubmit}/>
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

export default connect(mapStateToProps, {addToCart, setNavColor })(Product);