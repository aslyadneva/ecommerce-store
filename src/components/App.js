import React, { Component, Fragment, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { initAuth, getProducts, closeSideNav } from "../actions";

import Navigation from "./Navigation";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import Home from "./pages/Home/Home";

import Login from "./pages/Login";
import Account from "./pages/Account";
import Cart from "./cart/Cart";
import SideNav from "./SideNav";
import Modal from "./Modal";
import Checkout from "./pages/Checkout/Checkout";
import Search from "./Search";
import Loading from "./Loading";

const LazyProductList = React.lazy(() =>
  import("./pages/ProductList/ProductList")
);
const LazyProduct = React.lazy(() =>
  import("../components/pages/Product/Product")
);

class App extends Component {
  state = {
    searchOpen: false,
  };

  componentDidMount() {
    // this.props.initAuth();
    this.props.getProducts();
  }

  renderPrivateRoute = () => {
    if (this.props.signedIn === "pending") {
      return <div>Loading...</div>;
    } else if (this.props.signedIn) {
      return <Account />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  openSearch = () => {
    if (this.props.sideNav) {
      this.props.closeSideNav();
    }
    this.setState({ searchOpen: true });
  };

  closeSearch = () => {
    this.setState({ searchOpen: false });
  };

  render() {
    const { searchOpen } = this.state;
    const { signedIn, checkingOut } = this.props;

    return (
      <Fragment>
        {searchOpen && <Search close={this.closeSearch} />}
        {!searchOpen && <SideNav openSearch={this.openSearch} />}
        <Route path="/" component={Cart} />
        <Modal />
        {this.props.checkingOut ? null : (
          <Navigation openSearch={this.openSearch} />
        )}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/account" exact>
            {this.renderPrivateRoute()}
          </Route>
          <Route path="/login" exact>
            {signedIn ? <Redirect to="/account" /> : <Login />}
          </Route>

          <Route
            path="/products"
            exact
            render={(props) => (
              <Suspense fallback={<Loading />}>
                <LazyProductList {...props} />
              </Suspense>
            )}
          />

          <Route
            path="/products/:name"
            exact
            render={(props) => (
              <Suspense fallback={<Loading />}>
                <LazyProduct {...props} />
              </Suspense>
            )}
          />

          <Route path="/checkout" exact>
            {checkingOut ? <Checkout /> : <Redirect to="/" />}
          </Route>
        </Switch>
        {this.props.checkingOut ? null : <Newsletter />}
        {this.props.checkingOut ? null : <Footer />}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sortTab: state.sort.sortTab,
    cartOpen: state.cart.isOpen,
    checkingOut: state.checkOut.inProgress,
    signedIn: state.auth.isSignedIn,
    sideNav: state.sideNav,
  };
};

export default connect(mapStateToProps, {
  initAuth,
  getProducts,
  closeSideNav,
})(App);
