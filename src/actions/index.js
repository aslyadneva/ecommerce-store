import {
  CHANGE_AUTH,
  OPEN_CART,
  CLOSE_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  OPEN_SIDENAV,
  CLOSE_SIDENAV,
  OPEN_SORT,
  CLOSE_SORT,
  SORT,
  GET_SORT_DISTANCE,
  SET_NAV,
  CHECKING_OUT,
  UPDATE_SUBTOTAL,
  ADD_SHIPPING,
  CLEAR_CART,
  CLEAR_TOTAL,
  CLEAR_SORT,
  GET_PRODUCTS,
} from "./types";

import googleAuthApi from "../apis/googleAuth";
import { firestore } from "../firebase";

const googleAuthApiInstance = new googleAuthApi();

export const initAuth = () => {
  return function (dispatch) {
    try {
      googleAuthApiInstance.init(dispatch);
    } catch (err) {
      console.log(err);
    }
  };
};

export const changeAuth = () => {
  let currentUser;
  const isSignedIn = googleAuthApiInstance.isSignedIn(); // returns either true or false

  if (isSignedIn) {
    try {
      currentUser = googleAuthApiInstance.getCurrentUser();
    } catch (err) {
      console.log(err);
    }
  }

  return function (dispatch) {
    dispatch({
      type: CHANGE_AUTH,
      payload: { signedIn: isSignedIn, user: currentUser },
    });
  };
};

export const trySignIn = () => {
  return function () {
    try {
      googleAuthApiInstance.signIn();
    } catch (err) {
      console.log(err);
    }
  };
};

export const trySignOut = () => {
  return function () {
    try {
      googleAuthApiInstance.signOut();
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProducts = () => {
  return function (dispatch) {
    firestore
      .collection("products")
      .get()
      .then((items) => {
        // console.log(items);
        return items.docs.map((item) => {
          let itemObj = {
            id: item.id,
            ...item.data(),
          };
          return itemObj;
        });
      })
      .then((itemsArr) => dispatch({ type: GET_PRODUCTS, payload: itemsArr }))
      .catch((err) => console.log("This is the error", err));
  };
};

export const openCart = () => {
  return {
    type: OPEN_CART,
  };
};

export const closeCart = () => {
  return {
    type: CLOSE_CART,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const addShipping = (type) => {
  return {
    type: ADD_SHIPPING,
    payload: type,
  };
};

export const clearTotal = () => {
  return {
    type: CLEAR_TOTAL,
  };
};

export const addToCart = (product) => {
  return function (dispatch, getState) {
    const { cart } = getState();

    dispatch({
      type: ADD_TO_CART,
      payload: { product, cartItems: cart.products },
    });

    dispatch({
      type: UPDATE_SUBTOTAL,
      payload: getState().cart.products,
    });
  };
};

export const removeFromCart = (product) => {
  return function (dispatch, getState) {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: product,
    });

    dispatch({
      type: UPDATE_SUBTOTAL,
      payload: getState().cart.products,
    });
  };
};

export const increaseQuantity = (product) => {
  return function (dispatch, getState) {
    const { cart } = getState();

    dispatch({
      type: INCREASE_QUANTITY,
      payload: { productToIncrease: product, cartItems: cart.products },
    });

    dispatch({
      type: UPDATE_SUBTOTAL,
      payload: getState().cart.products,
    });
  };
};

export const decreaseQuantity = (product) => {
  return function (dispatch, getState) {
    const { cart } = getState();

    dispatch({
      type: DECREASE_QUANTITY,
      payload: { productToDecrease: product, cartItems: cart.products },
    });

    dispatch({
      type: UPDATE_SUBTOTAL,
      payload: getState().cart.products,
    });
  };
};

export const openSideNav = () => {
  return {
    type: OPEN_SIDENAV,
  };
};

export const closeSideNav = () => {
  return {
    type: CLOSE_SIDENAV,
  };
};

export const openSort = () => {
  return {
    type: OPEN_SORT,
  };
};

export const closeSort = () => {
  return {
    type: CLOSE_SORT,
  };
};

export const sort = (sortType) => {
  return function (dispatch, getState) {
    const { firestoreProducts } = getState();

    dispatch({
      type: SORT,
      payload: { sortType: sortType, products: firestoreProducts },
    });

    dispatch(closeSort());
  };
};

export const clearSort = () => {
  return {
    type: CLEAR_SORT,
  };
};

export const getSortDistance = (distance) => {
  return {
    type: GET_SORT_DISTANCE,
    payload: distance,
  };
};

export const setNavColor = (path) => {
  return {
    type: SET_NAV,
    payload: path,
  };
};

export const checkingOut = (value) => {
  return {
    type: CHECKING_OUT,
    payload: value,
  };
};
