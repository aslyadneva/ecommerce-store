import { 
  INIT_AUTH, 
  SIGN_IN, 
  SIGN_OUT,  
  OPEN_CART,  
  CLOSE_CART, 
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_QUANTITY, 
  INCREASE_QUANTITY, 
  OPEN_SIDENAV, 
  CLOSE_SIDENAV, 
  OPEN_SORT, 
  CLOSE_SORT, SORT, GET_SORT_DISTANCE, SET_NAV } from './types'; 
// import { actionTypes } from 'redux-form';

let auth; 

//initAuth needs to be called when the App first loads (aka from it's componentDidMount())
export const initAuth = () => {

  //1) Load the Auth2 library (this adds new methods to the gapi objects)


  //2) Initialize Auth2 Library with our ID 
  // ONLY do this step when the Auth2 library is finished loading duh 
  return function (dispatch) {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '157064655345-kbmdvrq88mknudq5k72kp028d75ugpkn.apps.googleusercontent.com', 
        scope: 'email'
      });
      dispatch({ type: INIT_AUTH }); 
    }); 

  }
}



export const signIn = () => { 
  auth = window.gapi.auth2.getAuthInstance(); //returns an object with all necessary sign in/sign out methods
  auth.signIn(); 
  return {
    type: SIGN_IN
  };
};

export const signOut = () => {
  auth.signOut(); 
  return {
    type: SIGN_OUT
  };
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

export const addToCart = (product) => {

  return function (dispatch, getState){
    const { cart } = getState(); 

    dispatch({
      type: ADD_TO_CART, 
      payload: {product, cartItems: cart.products}
    })    
  }

};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,  
    payload: product
  }; 
};

export const increaseQuantity = (product) => {

  return function (dispatch, getState) {

    const { cart } = getState();

    dispatch({
      type: INCREASE_QUANTITY,  
      payload:  {productToIncrease: product, cartItems: cart.products }
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
 
