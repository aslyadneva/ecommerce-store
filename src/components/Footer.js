import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom'; 

class Footer extends PureComponent {
  // shouldComponentUpdate (nextProps, nextState) {
  //   if(this.state !== nextState) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  render () {
    return (
      <footer className="Footer">
  
        <div className="Footer__menu">
          <h5 className="Heading h6 Footer__heading">Menu</h5>
          <nav className="Footer__nav">
            <Link to="#" className="Footer__link">Search</Link>
            <Link to="#" className="Footer__link">FAQ</Link>
            <Link to="#" className="Footer__link">Store Policy</Link>
            <Link to="#" className="Footer__link">Returns &amp; Exchanges</Link>
            <Link to="#" className="Footer__link">Size Chart</Link>
            <Link to="#" className="Footer__link">My Account</Link>
            <Link to="#" className="Footer__link">Influencers</Link>
            <Link to="#" className="Footer__link">Contact</Link>
            <Link to="#" className="Footer__link">Privacy</Link>
          </nav>
        </div>
  
        <div className="Footer__delivery">
          <h5 className="Heading h6 Footer__heading">Delivery Charges</h5>
          <p className="Footer__link">STANDARD (US): (5-10 BUSINESS DAYS) $6.95</p>
          <p className="Footer__link">International: (5-10 BUSINESS DAYS) $16.99</p>
  
          <div className="Footer__socials">
          <Link to="#" className="Footer__icon"><i className="fab fa-facebook-f"/></Link>
          <Link to="#" className="Footer__icon"><i className="fab fa-twitter"/></Link>
          <Link to="#" className="Footer__icon"><i className="fab fa-instagram"/></Link>
          <Link to="#" className="Footer__icon"><i className="fab fa-youtube"/></Link>      
        </div>
        </div>
  
        <div className="Footer__copyright">
          <Link to="/">
            &copy; BrandName
          </Link>
        </div>
        
      </footer>
    ); 
  }
  
}

export default Footer;