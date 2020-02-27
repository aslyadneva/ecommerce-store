import { combineReducers } from 'redux'; 
import authReducer from './authReducer'; 
import authInitReducer from './authInitReducer';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';
import { reducer as formReducer } from 'redux-form'; 

export default combineReducers({
  cart: cartReducer,
  isInitialized: authInitReducer,
  auth: authReducer, 
  products: productsReducer,
  form: formReducer
});  