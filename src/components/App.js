import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'; 

import { connect } from 'react-redux'; 
import { initAuth } from '../actions'; 

import Navigation from './Navigation'; 
import Newsletter from './Newsletter'; 
import Footer from './Footer';
import Home from './pages/Home/Home'; 
import ProductList from './pages/ProductList/ProductList';
import Product from '../components/pages/Product/Product'; 
import Login from './pages/Login';
import Account from './pages/Account';
import Cart from './cart/Cart'; 
import SideNav from './SideNav'; 
import Modal from './Modal'; 
import Checkout from './pages/Checkout/Checkout'; 

class App extends Component {

  componentDidMount () {
    this.props.initAuth();
  }  

  render () {

    return (   
      <Fragment> 
          <SideNav/>
          <Route path="/" component={Cart}/>
          <Modal/>
              {this.props.checkingOut ? null : <Navigation/>}                    
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/account" exact component={Account}/>
                <Route path="/login" exact component={Login}/>                   
                <Route path="/products" exact component={ProductList}/>
                <Route path="/products/:name" exact component={Product}/>
                <Route path="/checkout" exact component={Checkout}/>
              </Switch>
              {this.props.checkingOut ? null :  <Newsletter />}  
              {this.props.checkingOut ? null :  <Footer/>}                
      </Fragment> 
    );
  }  
}

const mapStateToProps = state => {
  return {
    sortTab: state.sort.sortTab,
    cartOpen: state.cart.isOpen, 
    checkingOut: state.checkOut.inProgress, 
    signedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, {initAuth})(App);
