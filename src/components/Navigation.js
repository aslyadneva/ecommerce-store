import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { connect } from 'react-redux'; 

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
      <header>
        <div>
          <nav>
            <ul>
              <li><NavLink to="/">HOME</NavLink></li>
            </ul>
            <ul>
              <li><NavLink to="/collections/productlist">SHOP</NavLink></li>
            </ul>
          </nav>
        </div>
        <div>
          <NavLink to="/">
            <h1>Brand Name</h1>
          </NavLink>       
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to={this.isAuthorized}>Account</NavLink>             
              </li>
              <li>Search</li>
              <li>Cart</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect (mapStateToProps)(Navigation);
