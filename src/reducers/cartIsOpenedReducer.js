import { OPEN_CART, CLOSE_CART  } from '../actions/types'; 

const INITIAL_STATE = {
  isOpen: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_CART: 
      return {...state, isOpen: true};
    case CLOSE_CART: 
      return {...state, isOpen: false};
    default: 
      return state; 
  }
}