import { combineReducers } from 'redux'; 
import authReducer from './authReducer'; 
import authInitReducer from './authInitReducer';
import cartReducer from './cartReducer';
import totalReducer from './totalReducer';
import mainNavReducer from './mainNavReducer';
import sideNavReducer from './sideNavReducer';
import sortReducer from './sortReducer';
import modalReducer from './modalReducer';
import productsReducer from './productsReducer';
import checkOutReducer from './checkOutReducer';
import { reducer as formReducer } from 'redux-form'; 

export default combineReducers({
  mainNav: mainNavReducer, 
  cart: cartReducer,
  total: totalReducer,
  sideNav: sideNavReducer,
  sort: sortReducer, 
  modalDistance: modalReducer, 
  isInitialized: authInitReducer,
  auth: authReducer, 
  products: productsReducer,
  checkOut: checkOutReducer, 
  form: formReducer
});  