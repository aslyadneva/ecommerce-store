import {  INIT_AUTH  } from '../actions/types'; 

const INITIAL_STATE = {
  isInitialized: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INIT_AUTH: 
      return {...state, isInitialized: true};
    default: 
      return state; 
  }
}