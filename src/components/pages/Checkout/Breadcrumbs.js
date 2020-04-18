import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Breadcrumbs = ({ page }) => {
  return (
    <nav className="Breadcrumbs">

      <Link to="/cart" className="Breadcrumbs__item" >
        <span style={{color: '#caa98a'}}>Cart</span>
        <i className="fas fa-chevron-right"></i>
      </Link>

      <div className="Breadcrumbs__item">
        <span style={{color: page === 1 ? '#333333' : '#caa98a', fontWeight: page === 1 ? '500' : 'normal'}}>Information</span>
        <i className="fas fa-chevron-right"></i>
      </div>

      <div className="Breadcrumbs__item">
        <span>Shipping</span>
        <i className="fas fa-chevron-right"></i>
      </div>

      <div className="Breadcrumbs__item">
        <span>Payment</span>
      </div>
    </nav>
  )
}

export default Breadcrumbs; 
