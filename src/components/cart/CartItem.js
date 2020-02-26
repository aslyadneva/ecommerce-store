import React, {Component} from 'react';
import { Link } from 'react-router-dom'; 


class CartItem extends Component {

  handleClick = (e) => {
    e.preventDefault(); 
    this.props.remove(this.props.item);
  }

  render () {
    return (
      <div className="CartItemWrapper">
        <div className="CartItem">
          <div className="CartItem__ImageWrapper AspectRatio">
            <img src={this.props.image}/>
          </div>
          
          <div className="CartItem__Info">
  
            <h2 className="CartItem__Title Heading">{this.props.title}</h2>
  
            <div className="CartItem__Meta Heading Text--subdued">
              <p className="CartItem__Variant">medium</p>
              <div className="CartItem__PriceList">
                <span className="CartItem__Price Price">
                  <span className="money">{`$${this.props.price}`}</span>
                </span>
              </div>
            </div>

            <div>{this.props.item.quantity}</div>
  
            <div className="CartItem__Actions Heading Text--subdued">

              {/* // Quantity Selector Buttons  */}
              {/* <div className="CartItem__QuantitySelector">
                <div className="QuantitySelector">
                  <Link className="QuantitySelector__Button Link Link--primary">
                    <i className="fas fa-minus"></i>
                  </Link>

                  <Field name="product quantity" component={this.renderInput}/>
                  
  
                  <Link className="QuantitySelector__Button Link Link--primary">
                    <i className="fas fa-plus"></i>
                  </Link>
                </div>
              </div> */}
  
              {/* Remove Button */}
              <button 
                onClick={this.handleClick}
              >
                Remove
              </button>
            </div>
  
          </div>
        </div>  
      </div>
    );
  }
  
}

export default CartItem;