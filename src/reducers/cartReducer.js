import { OPEN_CART, CLOSE_CART, ADD_TO_CART, REMOVE_FROM_CART  } from '../actions/types'; 

const INITIAL_STATE = {
  isOpen: false,
  products: {}, 
  numOfProducts: null,
  total: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  
    case OPEN_CART: 
      return {...state, isOpen: true};

    case CLOSE_CART: 
      return {...state, isOpen: false};

    case ADD_TO_CART:  
      
      return {
        ...state, 
       
      };

    case REMOVE_FROM_CART: 
      const removedItem = action.payload; 
    
      return {
        ...state
      };

    default: 
      return state; 
  }
}