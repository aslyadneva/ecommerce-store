import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { connect } from 'react-redux'; 
import { openCart, openSideNav } from '../actions'; 

class Navigation extends React.Component {
  constructor () {
    super(); 
    this.state = { scrollPosition: 0 }
    this.handleScroll = this.handleScroll.bind(this); 
    this.isAuthorized = this.isAuthorized.bind(this); 
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  } 

  handleScroll () {
    this.setState({ scrollPosition: window.pageYOffset })
  }

  isAuthorized (props) {
    if (this.props.isSignedIn) {
      return '/account'
    } else {
      return '/login'
    }
  }  

  renderNumOfCartItems (cartItems) {
    return cartItems.reduce((acc, product)=> acc + product.quantity, 0); 
  }

  renderNavStyle (navStyle) {
    if (navStyle) {
      return 'MainNav' 
    } else if (!navStyle && this.state.scrollPosition < 15) {
      return 'MainNav MainNav--transparent'
    } else if ((!navStyle && this.state.scrollPosition > 15)) {
      return 'MainNav'
    }
  }

  render () {
    const { cartItems, mainNav, openSearch } = this.props; 
    return (
        <header className={this.renderNavStyle(mainNav)}>     

              {/* SMALL Device Only*/}
              <NavLink className="MainNav__sideNavButton" to="#" onClick={this.props.openSideNav}>
                <i className="fas fa-bars"></i>
              </NavLink>   
              {/* SMALL Device */}      

              {/* ALL Devices */}
              <h1 className="MainNav__Logo" style={{letterSpacing: '6px'}}>
                <NavLink to="/"> <span style={{fontWeight: '200'}}>BRAND</span>NAME</NavLink>             
              </h1>
              {/* ALL Devices */}
          
              {/* LARGE Device Only */}
              <nav className="MainNav__SecondaryNav">       
                {/* <NavLink className="Heading Text--subdued" to={this.isAuthorized}>ACCOUNT</NavLink>                   */}
                <NavLink className="Heading Text--subdued" to="#" onClick={openSearch}>SEARCH</NavLink>         
                <NavLink className="Heading h6" to="#" onClick={this.props.openCart}>CART (<span>{this.renderNumOfCartItems(cartItems)}</span>)</NavLink>
              </nav>
              {/* LARGE Device  */}

              {/* SMALL Device  Only*/}
              <NavLink className="MainNav__CartButton" to="#" onClick={this.props.openCart}>
                <i className="fas fa-shopping-bag"></i>
              </NavLink>
              {/* SMALL Device */}
          

              {/* LARGE Device Only */}
              <nav className="MainNav__MainNav">
                <NavLink className="Heading h6" to="/">HOME</NavLink>
                <NavLink className="Heading h6" to="/products">SHOP</NavLink>   
                <NavLink className="Heading h6" to="/">MEDIA</NavLink>   
                <NavLink className="Heading h6" to="/">LOOKBOOK</NavLink>       
              </nav>
              {/* LARGE Device  */}
        </header>
    );
  } 
}

const mapStateToProps = state => {
  return { 
    isSignedIn: state.auth.isSignedIn, 
    cartItems: state.cart.products,
    mainNav: state.mainNav
  }
}

export default connect (mapStateToProps, { openCart,openSideNav })(Navigation);
