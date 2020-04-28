import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Breadcrumbs = ({ page }) => {

  const getStyles = (page, type) => {
    if (page === 2 && type === 'shipping') {
      return {
        color: '#333333', 
        fontWeight: '500'
      }
    } else if (page > 2 && type === 'shipping') {
      return {
        color: '#caa98a', 
        fontWeight: 'normal'
      }
    } else if (page === 3 && type === 'payment') {
      return {
        color: '#333333', 
        fontWeight: '500'
      }
    } 
  }

  return (
    <nav className="Breadcrumbs">

      <Link to="/cart" className="Breadcrumbs__item" >
        <span style={{color: '#caa98a'}}>Cart</span>
        <i className="fas fa-chevron-right"></i>
      </Link> 

      <div className="Breadcrumbs__item">
        <span 
          style={{
            color: page === 1 ? '#333333' : '#caa98a', 
            fontWeight: page === 1 ? '500' : 'normal'
            }}
          >
            Information
        </span>
        <i className="fas fa-chevron-right"></i>
      </div>

      <div className="Breadcrumbs__item">
        <span style={getStyles(page, 'shipping')}>
          Shipping
        </span>
        <i className="fas fa-chevron-right"></i>
      </div>

      <div className="Breadcrumbs__item">
        <span style={getStyles(page, 'payment')}>Payment</span>
      </div>
    </nav>
  )
}

export default Breadcrumbs; 
