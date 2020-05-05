import { 
  CHANGE_AUTH,
  OPEN_CART, CLOSE_CART, ADD_TO_CART, REMOVE_FROM_CART,
  DECREASE_QUANTITY, INCREASE_QUANTITY, 
  OPEN_SIDENAV, CLOSE_SIDENAV, 
  OPEN_SORT, CLOSE_SORT, SORT, GET_SORT_DISTANCE, 
  SET_NAV, 
  CHECKING_OUT, 
  UPDATE_SUBTOTAL, 
  ADD_SHIPPING, 
  CLEAR_CART, CLEAR_TOTAL, CLEAR_SORT} from './types'; 

import googleAuthApi from '../apis/googleAuth'; 

const googleAuthApiInstance = new googleAuthApi(); 
let browserHistory; 

export const initAuth = () => {

  return function (dispatch) {    
    try {
      googleAuthApiInstance.init(dispatch);
    } catch (err) {
      console.log(err);
    }
  }
}

export const changeAuth = () => {
  let currentUser; 
  const isSignedIn = googleAuthApiInstance.isSignedIn(); // returns either true or false 

  if (isSignedIn) {
    try {
      currentUser = googleAuthApiInstance.getCurrentUser()
    } catch (err) {
      console.log(err);
    }
    
  }

  // if (browserHistory && isSignedIn) {
  //   browserHistory.replace('/account')
  // } 
  // else if (browserHistory && !isSignedIn) {
  //   console.log(browserHistory); 
  //   browserHistory.replace('/')
  // }

  return function (dispatch) {
    dispatch({
      type: CHANGE_AUTH, 
      payload: {signedIn: isSignedIn, user: currentUser}
    })
  }  
}

export const trySignIn = (history) => {  
  browserHistory = history; 
  return function (dispatch) {
    try {
      googleAuthApiInstance.signIn();
    } catch (err) {
      console.log(err);
    }
  }
};

export const trySignOut = (history) => {
  browserHistory = history; 
  return function () {
    try {
      googleAuthApiInstance.signOut(); 
    } catch (err) {
      console.log(err);
    }
  }
};

















export const openCart = () => {
  return {
    type: OPEN_CART
  }; 
}; 

export const closeCart = () => {
  return {
    type: CLOSE_CART
  }; 
};

export const clearCart = () => {
  return {
    type: CLEAR_CART
  }; 
};

export const addShipping = (type) => {
  return {
    type: ADD_SHIPPING, 
    payload: type
  }
}

export const clearTotal = () => {
  return {
    type: CLEAR_TOTAL
  }
}

export const addToCart = (product) => {

  return function (dispatch, getState){
    const { cart } = getState(); 

    dispatch({
      type: ADD_TO_CART, 
      payload: {product, cartItems: cart.products}
    })
    
    dispatch({
      type: UPDATE_SUBTOTAL, 
      payload: getState().cart.products
    })
  }

};

export const removeFromCart = (product) => {
  return function (dispatch, getState){

    dispatch({
      type: REMOVE_FROM_CART,  
      payload: product
    })
    
    dispatch({
      type: UPDATE_SUBTOTAL, 
      payload: getState().cart.products
    })

  }; 
};

export const increaseQuantity = (product) => {

  return function (dispatch, getState) {

    const { cart } = getState();

    dispatch({
      type: INCREASE_QUANTITY,  
      payload:  {productToIncrease: product, cartItems: cart.products }
    })

    dispatch({
      type: UPDATE_SUBTOTAL, 
      payload: getState().cart.products
    })
  }

};

export const decreaseQuantity = (product) => {

  return function (dispatch, getState) {

    const { cart } = getState();

    dispatch({
      type: DECREASE_QUANTITY,  
      payload:  {productToDecrease: product, cartItems: cart.products }
    })

    dispatch({
      type: UPDATE_SUBTOTAL, 
      payload: getState().cart.products
    })
  }
  
};

export const openSideNav = () => {
  return {
    type: OPEN_SIDENAV
  }; 
}; 

export const closeSideNav = () => {
  return {
    type: CLOSE_SIDENAV
  }; 
}; 

export const openSort = () => {
  return {
    type: OPEN_SORT
  }; 
};  

export const closeSort = () => {
  return {
    type: CLOSE_SORT
  }; 
}; 

export const sort = (sortType) => {

  return function (dispatch, getState) {

    const { products } = getState(); 

    dispatch({
      type: SORT, 
      payload: {sortType: sortType, products: products}
    });
    
    dispatch(closeSort())
  }
}; 

export const clearSort = () => {
  return {
    type: CLEAR_SORT
  }; 
}; 

export const getSortDistance = (distance) => {
  return {
    type: GET_SORT_DISTANCE,
    payload: distance
  }; 
}; 

export const setNavColor = (path) => {
  return {
    type: SET_NAV,
    payload: path
  }; 
}; 

export const checkingOut = (value) => {
  return {
    type: CHECKING_OUT, 
    payload: value
  }; 
}; 
 
