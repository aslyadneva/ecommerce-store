import React, { Fragment, Component } from 'react';

import { connect } from 'react-redux'; 

import mainImage from '../../../images/photo1.jpg'; 
import SectionHeader from '../../SectionHeader'; 
import freeShipping from '../../../images/free-shipping.gif'; 
import './_home.scss'; 
import video from '../../../images/mainvideo2.mp4'; 
import FeaturedCollection from '../../FeaturedCollection/FeaturedCollection';
import FeaturedProduct from '../../FeaturedProduct'; 


class Home extends Component {
 
  render () {
    const styles = {
      backgroundImage: `url(${mainImage})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    } 
  
    return (
      <Fragment>
        {/* Hero/Slideshow Section */}
        <section 
          id="main-image" 
          className="MainImage" 
          style={styles} 
          data-aos="zoom-out"
          data-aos-duration="1300"
          data-aos-easing="ease-in-sine"
        >
          <button>Shop Now</button>
        </section>

        {/* Free Shipping GIF */}
        {/* <section>
          <img className="Home__FreeShipping__Image" src={freeShipping}/>
        </section>  */}
  
        {/* Featured Collection */}
        <section className="Section">    
          <SectionHeader title="Featured Collection"/>
          <FeaturedCollection/>
        </section>
  
        {/* Video */}
        <section className="Section" style={{padding: '0'}}>
          <video className="Home__Video" src={video} autoPlay loop muted/>
        </section> 
  
        {/* Featured Product */}
        <section className="Section">
          <div className="Container">
            <SectionHeader title="Featured Product"/>
            <FeaturedProduct product={this.props.products[0]}/>
          </div>
        </section>
  
      </Fragment>
    );
  }

  

} 

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(Home);
