import React from 'react';
import { Link } from 'react-router-dom'; 


const ProductTile = ({id, image, name, price}) => {
  return (
    <div className="ProductTile">

      <Link to={`/products/${id}`}>    
        <img className="ProductTile__Image"src={image} alt={name}></img>       
      </Link>     

      <div className="ProductTile__Info">
        <Link to={`/products/${id}`}> <h2 className="Heading">{name}</h2> </Link>  
        <span className="Text--subdued">{`$${price}`}</span>  
      </div>   

    </div>         
  );
}

export default ProductTile;