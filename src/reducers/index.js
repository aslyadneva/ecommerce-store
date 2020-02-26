import { combineReducers } from 'redux'; 
import authReducer from './authReducer'; 
import authInitReducer from './authInitReducer';
import cartIsOpenedReducer from './cartIsOpenedReducer';
import productsReducer from './productsReducer';
import { reducer as formReducer } from 'redux-form'; 

export default combineReducers({
  cart: cartIsOpenedReducer,
  isInitialized: authInitReducer,
  auth: authReducer, 
  products: productsReducer,
  form: formReducer
});  