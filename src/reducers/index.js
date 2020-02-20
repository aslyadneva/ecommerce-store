import { combineReducers } from 'redux'; 
import authReducer from './authReducer'; 
import authInitReducer from './authInitReducer';
import cartIsOpenedReducer from './cartIsOpenedReducer';

export default combineReducers({
  cart: cartIsOpenedReducer,
  isInitialized: authInitReducer,
  auth: authReducer, 
});  