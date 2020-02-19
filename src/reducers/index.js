import { combineReducers } from 'redux'; 
import authReducer from './authReducer'; 
import authInitReducer from './authInitReducer';

export default combineReducers({
  isInitialized: authInitReducer,
  auth: authReducer
});  