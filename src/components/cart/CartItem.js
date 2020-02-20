import React from 'react';
import { Link } from 'react-router-dom'; 

function CartItem(props) {
  return (
    <div className="CartItemWrapper">
      <div className="CartItem">
        <div className="CartItem__ImageWrapper AspectRatio"></div>
        <div className="CartItem__Info">

          <h2 className="CartItem__Title Heading">Item Title</h2>

          <div className="CartItem__Meta Heading Text--subdued">
            <p className="CartItem__Variant">medium</p>
            <div className="CartItem__PriceList">
              <span className="CartItem__Price Price">
                <span className="money">$99.99</span>
              </span>
            </div>
          </div>

          <div className="CartItem__Actions Heading Text--subdued">

            <div className="CartItem__QuantitySelector">
              <div className="QuantitySelector">
                <Link className="QuantitySelector__Button Link Link--primary">
                  <i className="fas fa-minus"></i>
                </Link>
                <input className="QuantitySelector__CurrentQuantity" type="text" value="2"></input>
                <Link className="QuantitySelector__Button Link Link--primary">
                  <i className="fas fa-plus"></i>
                </Link>
              </div>
            </div>

            <Link className="CartItem__Remove Link Link--undeline Link--undelineShort">Remove</Link>
          </div>

        </div>
      </div>  
    </div>
  );
}

export default CartItem;