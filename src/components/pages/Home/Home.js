import React, { Fragment, Component } from 'react';

import { connect } from 'react-redux'; 
import {Link} from 'react-router-dom'; 

import photo3 from '../../../images/Basix_1400x.jpg'; 
import photo2 from '../../../images/Basix_900.jpg'; 
import photo1 from '../../../images/Basix_700.jpg'; 

import SectionHeader from '../../SectionHeader'; 
import './_home.scss'; 
import video from '../../../images/mainvideo2.mp4'; 
import FeaturedCollection from '../../FeaturedCollection/FeaturedCollection';
import FeaturedProduct from '../../FeaturedProduct'; 


class Home extends Component {
 
  render () { 
    const { products, history } = this.props
  
    return (
      <Fragment>
        {/* Hero Section */}
        <section 
          id="main-image" 
          className="MainImage" 
          data-aos="zoom-out"
          data-aos-duration="1300"
          data-aos-easing="ease-in-sine"
        > 
          <picture className="MainImage__image">
            <source media="(min-width: 1100px)" srcSet={photo3} />
            <source media="(min-width: 800px)" srcSet={photo2} />
            <img src={photo1} alt="Person sitting" className="MainImage__image"/>
          </picture>
          
          <div className="MainImage__textArea">
            <span className="MainImage__text">Essentials</span>
            <Link to="/products" className="MainImage__cta">Shop The Collection</Link>
          </div>
        </section>
  
        {/* Featured Collection */}
        <section className="Section">    
          <SectionHeader title="new in"/>
          <FeaturedCollection history={history}/>
        </section>
  
        {/* Video */}
        <section className="Section" style={{padding: '0'}}>
          <video className="Home__Video" src={video} autoPlay loop muted playsInline />
        </section> 
  
        {/* Featured Product */}
        <section className="Section">
          <div className="Container">
            <SectionHeader title="Featured Product"/>
            {products.length > 0 ? <FeaturedProduct product={this.props.products[0]}/> : null}     
          </div>
        </section>
  
      </Fragment>
    );
  }

  

} 

const mapStateToProps = state => {
  return {
    products: state.firestoreProducts
  }
}

export default connect(mapStateToProps)(Home);
