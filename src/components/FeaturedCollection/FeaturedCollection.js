import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'; 
import CarouselButton from '../CarouselButton'; 
import ProductTile from '../ProductTile/ProductTile'; 

class FeaturedCollection extends Component {
  constructor (props) {
    super(); 
    this.state = {
      productScrollPos: 0, 
      productScrollWidth: null
    }
    this.productListRef = React.createRef();
  }

  componentDidMount () {
    // const divWidth = this.productListRef.current.clientWidth; 
    // console.log(this.productListRef, window.innerWidth)
    
    this.setState({ productScrollWidth: this.productListRef.current.scrollWidth})
  }

  handleScrollRight = () => {
    let scrollAmount; 

    if (window.innerWidth < 1240) {
      scrollAmount = this.state.productScrollWidth / 0.3333
    } else if (window.innerWidth >= 1240) {
      scrollAmount = this.state.productScrollWidth / 0.25
    }

    let totalScrollAmount = this.state.productScrollPos + scrollAmount;

    this.productListRef.current.scroll({
      top:0,
      left: totalScrollAmount,
      behavior: 'smooth'
    });

    this.setState({productScrollPos: scrollAmount})
  }

  handleScrollLeft = () => {
    this.productListRef.current.scroll({
      top:0,
      left: 0,
      behavior: 'smooth'
    });

    this.setState({productScrollPos: 0})
  }

  render (props) {
    const { products, history } = this.props; 
    const { productScrollPos } = this.state; 
  
    return (
      <Fragment> 
        <div className="FeatureCollection">
          {productScrollPos > 0 ? <CarouselButton direction='left' click={this.handleScrollLeft}/> : null}
          <div className="FeatureCollection__products" ref={this.productListRef}>
              {products.map((product, idx) => { 
                return (
                  <div className="Carousel__Item" key={product.id}>
                    <ProductTile 
                      id={product.id} 
                      image={product.image} 
                      name={product.name} 
                      price={product.price}
                      animationDelay={idx}
                    />
                  </div>
                );
              })}
          </div>
          <CarouselButton direction='right' click={this.handleScrollRight}/>
        </div>
  
        <div className="Container" style={{textAlign: 'center'}}>
            <button style={{marginTop: '8rem'}} className="Button Button--primary" onClick={() => history.push('/products')}> View all products</button>
        </div>
      </Fragment>
    )
  }
  
}

const mapStateToProps = state => {
  return {
    products: state.firestoreProducts
  }
}

export default connect(mapStateToProps)(FeaturedCollection); 
