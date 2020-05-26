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
import Search from './Search';

class App extends Component {
  state = {
    searchOpen: false
  }

  componentDidMount () {
    this.props.initAuth();
  }  

  renderPrivateRoute = () => {
    if (this.props.signedIn === 'pending') {
      return <div>Loading...</div>
    } else if (this.props.signedIn) {
      return <Account/>
    } else {
      return <Redirect to="/login"/>
    }
  }

  openSearch = () => {
    this.setState({searchOpen : true})
  }

  closeSearch = () => {
    this.setState({searchOpen : false})
  }

  render () {
    const {searchOpen} = this.state
    const {signedIn, checkingOut, products} = this.props

    return (   
      <Fragment> 
          {searchOpen && <Search close={this.closeSearch}/>}
          <SideNav/>
          <Route path="/" component={Cart}/>
          <Modal/>
              {this.props.checkingOut ? null : <Navigation openSearch={this.openSearch}/>}                    
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/account" exact>
                  {this.renderPrivateRoute()}
                </Route>               
                <Route path="/login" exact> 
                  {signedIn ? <Redirect to="/account"/> : <Login/>}
                </Route>                                    
                <Route path="/products" exact component={ProductList}/>
                <Route path="/products/:name" exact component={Product}/>
                <Route path="/checkout" exact>
                  {checkingOut ? <Checkout/> : <Redirect to="/"/>}
                </Route>
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
