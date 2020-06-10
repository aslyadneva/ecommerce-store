import { combineReducers } from 'redux'; 
import authReducer from './authReducer'; 
import cartReducer from './cartReducer';
import totalReducer from './totalReducer';
import mainNavReducer from './mainNavReducer';
import sideNavReducer from './sideNavReducer';
import sortReducer from './sortReducer';
import modalReducer from './modalReducer';
import firestoreProductsReducer from './firestoreProductsReducer';
import checkOutReducer from './checkOutReducer';

export default combineReducers({
  mainNav: mainNavReducer, 
  cart: cartReducer,
  total: totalReducer,
  sideNav: sideNavReducer,
  sort: sortReducer, 
  modalDistance: modalReducer, 
  auth: authReducer, 
  firestoreProducts: firestoreProductsReducer, 
  checkOut: checkOutReducer
});  