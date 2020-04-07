import React, { Fragment, Component } from 'react';

import mainImage from '../../../images/photo1.jpg'; 
import SectionHeader from '../../SectionHeader/SectionHeader'; 
import Product from '../Product/Product'; 
import freeShipping from '../../../images/free-shipping.gif'; 
import './_home.scss'; 
import video from '../../../images/main-video.mp4'; 
import FeaturedCollection from '../../FeaturedCollection/FeaturedCollection';

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
        <section id="main-image" className="MainImage" style={styles}>
          <button>Shop Now</button>
        </section>
  
        {/* Free Shipping GIF */}
        {/* <section>
          <img className="Home__FreeShipping__Image" src={freeShipping}/>
        </section>  */}
  
        {/* Featured Collection */}
        {/* <section className="Section">
          <div className="Container">
            <SectionHeader title="Jeans"/>
          </div>
          <FeaturedCollection/>
        </section> */}
  
        {/* Video */}
        {/* <section className="Section">
          <SectionHeader title="Latest Collection"/>
          <video className="Home__Video" src={video} autoPlay loop muted/>
        </section> */}
  
        {/* Featured Product */}
        {/* <section className="Section">
          <div className="Container">
            <SectionHeader title="Featured Product"/>
          </div>
        </section> */}
  
      </Fragment>
    );
  }

  

} 

export default Home;
