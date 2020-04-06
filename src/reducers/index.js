import { combineReducers } from 'redux'; 
import authReducer from './authReducer'; 
import authInitReducer from './authInitReducer';
import cartReducer from './cartReducer';
import sideNavReducer from './sideNavReducer';
import sortReducer from './sortReducer';
import modalReducer from './modalReducer';
import productsReducer from './productsReducer';
import { reducer as formReducer } from 'redux-form'; 

export default combineReducers({
  cart: cartReducer,
  sideNav: sideNavReducer,
  sort: sortReducer, 
  modalDistance: modalReducer, 
  isInitialized: authInitReducer,
  auth: authReducer, 
  products: productsReducer,
  form: formReducer
});  