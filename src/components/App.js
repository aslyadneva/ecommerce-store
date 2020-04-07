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
 
class App extends Component {
  constructor () {
    super(); 
    this.appRef = React.createRef(); 
    this.state = { body: null}
  }

  componentDidMount () {
    this.props.initAuth();
    const bodyElement = this.appRef.current.parentElement.parentElement; 
    console.log(bodyElement); 
    this.setState({body : bodyElement}); 
  } 

  render () {
    const { sortTab, cartOpen } = this.props; 
    // if (sortTab && this.state.body || cartOpen && this.state.body) {
    //   this.setState({body: this.state.body.style = "overflow: hidden"})
    // } else if (!sortTab && this.state.body) {
    //   this.setState({body: this.state.body.style = "overflow: auto"})
    // }

    return (  
      <Fragment>
          <SideNav/>
          <Cart/>
          <Modal/>
          <div className="PageContainer" ref={this.appRef}>
              <Navigation />
              <main id="main">       
                  <Switch>
                      <Route path="/" exact component={Home}/>
                      <Route path="/login" exact component={Login}/>
                      <Route path="/account" exact component={Account}/>
                      <Route path="/products" exact component={ProductList}/>
                      <Route path="/products/:name" exact component={Product}/>
                  </Switch>
              </main>  
              <Newsletter /> 
              <Footer/>
          </div>    
      </Fragment> 
    );
  }  
}

const mapStateToProps = state => {
  return {
    sortTab: state.sort.sortTab,
    cartOpen: state.cart.isOpen
  }
}

export default connect(mapStateToProps, {initAuth})(App);
