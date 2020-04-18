import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'; 

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
  constructor () {
    super(); 
    this.appRef = React.createRef(); 
    this.state = { body: null}
  }

  componentDidMount () {
    this.props.initAuth();
  }  

  render () {
    const { sortTab, cartOpen } = this.props; 
    // if (sortTab && this.state.body || cartOpen && this.state.body) {
    //   this.setState({body: this.state.body.style = "overflow: hidden"})
    // } else if (!sortTab && this.state.body) {
    //   this.setState({body: this.state.body.style = "overflow: auto"})
    // }
    // console.log(this.props.checkingOut); 

    return (  
      <Fragment>
          <SideNav/>
          <Route path="/" component={Cart}/>
          <Modal/>
              {this.props.checkingOut ? null : <Navigation/>}            
                
                  <Switch>
                      <Route path="/" exact component={Home}/>
                      <Route path="/login" exact component={Login}/>
                      <Route path="/account" exact component={Account}/>
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
    checkingOut: state.checkOut.inProgress
  }
}

export default connect(mapStateToProps, {initAuth})(App);
