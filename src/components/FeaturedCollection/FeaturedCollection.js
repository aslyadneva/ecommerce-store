import React from 'react'
import {Link} from 'react-router-dom'; 
import {connect} from 'react-redux'; 

const FeaturedCollection = ({products}) => {
  return (
    <div className="TabPanel">
      <div className="Carousel">
        {products.map(product => {
          return (
            <div className="Carousel__Item">
              <Link>
                <div className="Carousel__ImageWrapper">
                  <img src={product.image}/>
                </div>
              </Link>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          );
        })}
      </div>
      <div className="Container">
        <div className="SectionFooter">
          <Link className="Button Button--primary"> View all products</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(FeaturedCollection); 
