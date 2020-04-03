import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'; 
import { connect } from 'react-redux'; 
import {closeSideNav} from '../actions';

class SideNav extends Component {
  render()  {
    const { isOpen } = this.props; 
    return (
      <section className="SideNav" style={{visibility: isOpen ? 'visible' : 'hidden'}}>

        <header className="SideNav__Header">
          <button onClick={this.props.closeSideNav}>
            <i className="fas fa-times"></i>
          </button>
        </header>   

        <main className="SideNav__Main">
          <div className="SideNav__Main__Wrapper">
            <nav className="SideNav__Main__PrimaryNav">
                <div className="NavItem">
                  <NavLink to="/">HOME</NavLink>
                </div>
                <div className="NavItem">
                  <NavLink to="/products">SHOP</NavLink>
                </div>
                <div className="NavItem">
                  <NavLink to="/products">CLEARANCE</NavLink>
                </div>
            </nav>
            
            <nav className="SideNav__Main__SecondaryNav">
                <ul>
                  <li><NavLink  to="/">Account</NavLink></li>
                  <li><NavLink  to="/">Search</NavLink></li>          
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
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen: state.sideNav
  }
}
export default connect (mapStateToProps, {closeSideNav})(SideNav); 


