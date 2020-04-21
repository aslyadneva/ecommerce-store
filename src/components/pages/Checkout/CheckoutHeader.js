import React from 'react'; 
import {Link} from 'react-router-dom'; 

const CheckoutHeader = ({ size }) => {
  return (
    <header className={`CheckoutHeader CheckoutHeader--${size}`}>
      <Link to='/'>
        <span style={{fontWeight: '300'}}>Brand</span> Name
      </Link>  
    </header>
  )
}

export default CheckoutHeader; 
