import { OPEN_CART, CLOSE_CART, ADD_TO_CART, REMOVE_FROM_CART  } from '../actions/types'; 

const INITIAL_STATE = {
  isOpen: false,
  products: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  
    case OPEN_CART: 
      return {...state, isOpen: true};

    case CLOSE_CART: 
      return {...state, isOpen: false};

    case ADD_TO_CART: 

      function getProducts () {
        const addedItem = action.payload;
    
        const isDuplicateItem = state.products.filter(product => product.id === addedItem.id && product.size === addedItem.size)[0]
        
        if (isDuplicateItem) {
            const newItem = {...isDuplicateItem, quantity: isDuplicateItem.quantity +1, price: isDuplicateItem.price + addedItem.price};
            const newItemsArr = state.products.filter(product => product !== isDuplicateItem); 
            return [...newItemsArr, newItem]
        }
        return [...state.products, addedItem]
      }
      
      return { 
        ...state, 
        products: getProducts(), 
        isOpen: true
      }

    case REMOVE_FROM_CART: 
      console.log(action.payload); 
      return {
        ...state, 
        products: state.products.filter((product) => product !== action.payload)
      };

    default: 
      return state; 
  }
}