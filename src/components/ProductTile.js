import React from 'react';
import { Link } from 'react-router-dom'; 


function ProductTile({id, image, name, price}) {
  return (
    <div className="ProductItem">
      <div className="ProductItem__Wrapper">

        <Link to={`/products/${id}`}>
          <div className="AspectRatio">
            <img 
              className=""
              src={image}
              alt={name}
            >
            </img>
          </div>
        </Link>

        <div className="ProductItem__Info ProductItem__Info--center">
          <h2 className="ProductItem__Title Heading">
            <Link to={`/products/${id}`}>{name}</Link>            
          </h2>
          <div className="ProductItem__PriceList Heading">
            <span className="Price">
              <span className="Text--subdued">{`$${price}`}</span>
            </span>
          </div>
        </div>



      </div>
    </div>
  );
}

export default ProductTile;