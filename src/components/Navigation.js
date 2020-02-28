import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { connect } from 'react-redux'; 
import { openCart } from '../actions'; 

class Navigation extends React.Component {
  constructor () {
    super(); 
    this.isAuthorized = this.isAuthorized.bind(this); 
  }

  isAuthorized (props) {
    if (this.props.isSignedIn) {
      return '/account'
    } else {
      return '/login'
    }
  } 

  render () {
    return (
      <div className="shopify-section--header">
        <header className="Header">
          <div className="Header__Wrapper">

            <div className="Header__FlexItem Header__FlexItem--fill">
              <nav className="Header__MainNav">
                <ul className="HorizontalList HorizontalList--spacingExtraLoose">
                  <li className="HorizontalList__Item">
                    <NavLink className="Heading u-h6" to="/">HOME</NavLink>
                  </li>
                  <li className="HorizontalList__Item">
                    <NavLink className="Heading u-h6" to="/products">SHOP</NavLink>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="Header__FlexItem">
              <h1 className="Header__Logo">
                <NavLink className="Header__LogoLink" to="/"> Brand Name</NavLink>             
              </h1>
                      
            </div>

            <div className="Header__FlexItem Header__FlexItem--fill">
              <nav className="Header__SecondaryNav">
                <ul className="HorizontalList HorizontalList--spacingLoose">
                  <li className="HorizontalList__Item">
                    <NavLink className="Heading Link--primary Text--subdued u-h8" to={this.isAuthorized}>ACCOUNT</NavLink>             
                  </li>
                  <li className="HorizontalList__Item">
                    <NavLink className="Heading Link--primary Text--subdued u-h8" to="/">SEARCH</NavLink>
                  </li>
                  <li className="HorizontalList__Item">
                    <NavLink to="#" className="Heading u-h6" onClick={this.props.openCart}>
                      CART (<span className="Heading">{this.props.numOfCartItems}</span>)
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>

          </div>
        </header>
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return { 
    isSignedIn: state.auth.isSignedIn, 
    numOfCartItems: state.cart.products.length 
  }
}

export default connect (mapStateToProps, {openCart})(Navigation);
