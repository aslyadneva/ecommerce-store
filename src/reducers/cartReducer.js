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
        const { product, cartItems } = action.payload;
    
        const isDuplicateItem = cartItems.filter(cartProduct => cartProduct.id === product.id && cartProduct.size === product.size)[0];
        
        if (isDuplicateItem) {
            const newItem = {
              ...isDuplicateItem, 
              quantity: isDuplicateItem.quantity +1, 
              price: isDuplicateItem.price + product.price
            };

          const newItemsArr = cartItems.filter(cartProduct => cartProduct !== isDuplicateItem); 
          return [newItem, ...newItemsArr]
        }

        return [product, ...cartItems]
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
        const { productToIncrease, cartItems } = action.payload;
        // console.log(cartItems); 
        // console.log(productToIncrease)
        
        let idx = cartItems.findIndex(item => item.id === productToIncrease.id && item.size === productToIncrease.size); 

        const itemToIncrease = cartItems[idx]; 
        const pricePerItem = itemToIncrease.price / itemToIncrease.quantity; 

        itemToIncrease.quantity = itemToIncrease.quantity + 1; 
        itemToIncrease.price = itemToIncrease.price + pricePerItem;

        return [...cartItems]
      }
      
      return {...state, products: getIncreasedProducts()};
    
    case DECREASE_QUANTITY: 
      
      function getDecreasedProducts () {
        const { productToDecrease, cartItems } = action.payload;
        
        let idx = cartItems.findIndex(item => item.id === productToDecrease.id && item.size === productToDecrease.size);  

        const itemToDecrease = cartItems[idx]; 
        const pricePerItem = itemToDecrease.price / itemToDecrease.quantity; 

        itemToDecrease.quantity = itemToDecrease.quantity - 1 ; 
        itemToDecrease.price = itemToDecrease.price - pricePerItem;
        
        return [...cartItems]
        }

      return {...state, products: getDecreasedProducts()};

    default: 
      return state; 
  }
}