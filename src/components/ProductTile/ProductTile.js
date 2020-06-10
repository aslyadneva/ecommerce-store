import React from 'react';
import { Link } from 'react-router-dom'; 
 
 
const ProductTile = ({ id, image, name, price, animationDelay}) => {
  return (
    <div 
      className="ProductTile" 
      data-aos="fade-right" 
      data-aos-easing="ease-in-sine" 
      data-aos-once="true"
      data-aos-duration="1000"
      data-aos-delay={`${animationDelay}00`}
    >

      <div style={{overflow: 'hidden'}}>
        <Link to={`/products/${id}`}>    
          <img className="ProductTile__Image"src={image} alt={name}/>      
        </Link> 
      </div>    

      <div className="ProductTile__Info">
        <Link to={`/products/${id}`}> <h2 className="ProductTile__heading Heading">{name}</h2> </Link>  
        <span className="ProductTile__price Text--subdued">{`$${price}`}</span>  
      </div>   

    </div>          
  );
}

export default ProductTile;