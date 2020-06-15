import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import {NavLink} from 'react-router-dom'; 
import { connect } from 'react-redux'; 
import {closeSideNav} from '../actions';

class SideNav extends Component {
  isAuthorized = () => {
    if (this.props.isSignedIn) {
      return '/account'
    } else {
      return '/login'
    }
  }  

  render()  {
    const { isOpen, openSearch } = this.props; 
    return ReactDOM.createPortal(
      <div 
        className="Cart__Modal" 
        style={{visibility: isOpen ? "visible" : "hidden"}} 
        onClick={this.props.closeSideNav}
      >
      <section className="SideNav" onClick={e => e.stopPropagation()}>

        <header className="SideNav__Header">
          <button onClick={this.props.closeSideNav}>
            <i className="fas fa-times"></i>
          </button>
        </header>   

        <main className="SideNav__Main">
          <div className="SideNav__Main__Wrapper">
            <nav className="SideNav__Main__PrimaryNav">
                <div className="NavItem">
                  <NavLink to="/" onClick={this.props.closeSideNav}>HOME</NavLink>
                </div>
                <div className="NavItem">
                  <NavLink to="/products" onClick={this.props.closeSideNav}>SHOP</NavLink>
                </div> 
                <div className="NavItem">
                  <NavLink to="/products" onClick={this.props.closeSideNav}>CLEARANCE</NavLink>
                </div>
            </nav>
            
            <nav className="SideNav__Main__SecondaryNav">
                <ul>
                  {/* <li><NavLink  to={this.isAuthorized} onClick={this.props.closeSideNav}>Account</NavLink></li> */}
                  <li><NavLink to="/" onClick={openSearch}>Search</NavLink></li>          
                </ul>
            </nav>
          </div>
        </main>

        <footer className="SideNav__Footer">          
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </footer>
        
      </section>
      </div>
      , 
      document.querySelector('#sidenav')
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.sideNav,
    isSignedIn: state.auth.isSignedIn
  }
}
export default connect (mapStateToProps, {closeSideNav})(SideNav); 


