import React from 'react';
import { Link } from 'react-router-dom'; 
 
 
const ProductTile = ({id, image, name, price}) => {
  return (
    <div className="ProductTile">

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