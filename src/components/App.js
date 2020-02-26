import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'; 

import { connect } from 'react-redux'; 
import { initAuth } from '../actions'; 

import Navigation from './Navigation'; 
import Newsletter from './Newsletter'; 
import Footer from './Footer'; 
import Home from './pages/Home'; 
import ProductList from './pages/ProductList'; 
import Product from './pages/Product'; 
import Login from './pages/Login';
import Account from './pages/Account';
import Cart from './cart/Cart'; 

 
class App extends Component {
  componentDidMount () {
    this.props.initAuth();
  }

  render () {
    return (
      <div>
        <Navigation />
        <Cart/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/account" exact component={Account}/>
            <Route path="/products" exact component={ProductList}/>
            <Route path="/products/:name" exact component={Product}/>
          </Switch>
        
        <Newsletter/>
        <Footer/>
      </div>
    );
  }  
}


export default connect(null, {initAuth})(App);
