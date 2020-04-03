import { 
  OPEN_CART, 
  CLOSE_CART, 
  ADD_TO_CART, 
  REMOVE_FROM_CART, 
  INCREASE_QUANTITY, 
  DECREASE_QUANTITY  } from '../actions/types'; 

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
      return {
        ...state, 
        products: state.products.filter((product) => product !== action.payload)
      };

    case INCREASE_QUANTITY: 

      function getIncreasedProducts () {
        const itemToIncrease = action.payload;
        const currentItemToIncrease = state.products.filter(product => product.id === itemToIncrease.id && product.size === itemToIncrease.size)[0];
        const newIncreasedItem = {
        ...currentItemToIncrease, 
        quantity: currentItemToIncrease.quantity+1,
        price: currentItemToIncrease.price + (currentItemToIncrease.price/currentItemToIncrease.quantity)
        }

        const increasedItemsArray = state.products.filter(product => product !== currentItemToIncrease);
        return [...increasedItemsArray, newIncreasedItem, ]
      }
      
      return {...state, products: getIncreasedProducts()};
    
    case DECREASE_QUANTITY: 
      
      function getDecreasedProducts () {
        const itemToDecrease = action.payload;
        const currentItemToDecrease = state.products.filter(product => product.id === itemToDecrease.id && product.size === itemToDecrease.size)[0];
        const newDecreasedItem = {
        ...currentItemToDecrease, 
        quantity: currentItemToDecrease.quantity-1,
        price: currentItemToDecrease.price - (currentItemToDecrease.price/currentItemToDecrease.quantity)
        }

        const decreasedItemsArray = state.products.filter(product => product !== currentItemToDecrease);
        return [...decreasedItemsArray, newDecreasedItem]
        }

      return {...state, products: getDecreasedProducts()};

    default: 
      return state; 
  }
}