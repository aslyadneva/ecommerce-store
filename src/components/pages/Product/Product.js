import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'; 
import { addToCart, setNavColor } from '../../../actions'; 
import ProductForm from '../../ProductForm/ProductForm'; 
import Loading from '../../Loading';

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
    const { product } = this.props;

    return (
      <section className="Product">

        {product && 
          <Fragment>
            < div className="Product__Gallery">
              <img className="Product__Image" src={product.image} alt={product.name}></img>
            </div>  
      
            <div className="Product__Info">
              <div className="Product__Meta">
                <h1 className="Heading h2">{product.name}</h1>
                <span className="Heading Text--subdued h4">{`$${product.price}`}</span>
                {/* <p>or 4 interest free installments of bla bla bla</p> */}
                <p className="ProductMeta__Description">{product.description}</p>
              </div>
              <ProductForm onSubmit={this.onSubmit} />
            </div>
          </Fragment>
        }

      {!product && <Loading/>}
          
      </section>
    );
  }    

}

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.firestoreProducts.filter(product => product.id === ownProps.match.params.name)[0]
  }
}

export default connect(mapStateToProps, {addToCart, setNavColor })(Product);