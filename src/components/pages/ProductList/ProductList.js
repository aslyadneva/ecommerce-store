import React, { Component } from 'react';
import ProductTile  from '../../ProductTile/ProductTile'; 
import { connect } from 'react-redux'; 
import { openSort, getSortDistance } from '../../../actions'; 

import listHeaderImage from '../../../images/list-header.jpg'; 
import productListHeader from '../../../images/productListHeader.jpg'; 

class ProductList extends Component  {
  constructor() {
    super();  
    this.productSortRef = React.createRef(); 
    this.handleSortPosition = this.handleSortPosition.bind(this); 
  }

  componentDidMount () { 
    window.addEventListener("scroll", this.handleSortPosition);
    let distanceFromTop = this.productSortRef.current.getClientRects()[0].top; 
    this.props.getSortDistance(distanceFromTop); 
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleSortPosition);
  }

  handleSortPosition () {
    let distanceFromTop = this.productSortRef.current.getClientRects()[0].top; 
    this.props.getSortDistance(distanceFromTop); 
  }

  renderProducts (currentProducts, sortedProducts) {
    let productsToRender; 
    if (sortedProducts.length > 0) {
      productsToRender = sortedProducts; 
    } else {
      productsToRender = currentProducts; 
    }

    return productsToRender.map(product => {
      return (                 
        <ProductTile     
          key={product.id}               
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      );
    }); 
  }

  render() {
    const { products, sortTab, openSort, sortedProducts } = this.props; 
  
    return (
      <section className="ProductList">
       
        <header className="ProductList__header" style={{backgroundImage: `url(${productListHeader})`}}>
          <h1 className="Heading h1">Products</h1>
        </header>  
  
        <div className="ProductList__sort" ref={this.productSortRef}>
          <button onClick={() => openSort()} className="Heading Text--subdued h6">
            Sort
            <i className="fas fa-chevron-down"/>
          </button>
        </div> 

        <div className="ProductList__collection">
          {this.renderProducts(products, sortedProducts)}
        </div>
  
      </section>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    products: state.products, 
    sortTab: state.sort.sortTab, 
    sortedProducts: state.sort.sortedProducts
  }
}

export default connect(mapStateToProps, { openSort, getSortDistance })(ProductList);