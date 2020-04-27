import { 
  OPEN_CART, 
  CLOSE_CART, 
  ADD_TO_CART, 
  REMOVE_FROM_CART, 
  INCREASE_QUANTITY, 
  DECREASE_QUANTITY, CLEAR_CART  } from '../actions/types'; 

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
       
        return cartItems.map(cartItem => {
          if (cartItem.id === productToIncrease.id && cartItem.size === productToIncrease.size) {
            
            return {
              ...cartItem, 
              price: cartItem['price'] + (productToIncrease.price/productToIncrease.quantity),
              quantity: cartItem['quantity'] + 1,         
            }
          } else {
            return {...cartItem}
          }
        })
      }
      
      return {...state, products: getIncreasedProducts()};
    
    case DECREASE_QUANTITY: 
      
      function getDecreasedProducts () {
        const { productToDecrease, cartItems } = action.payload;
        
        return cartItems.map(cartItem => {
          if (cartItem.id === productToDecrease.id && cartItem.size === productToDecrease.size) {

            return {
              ...cartItem, 
              price: cartItem['price'] - (productToDecrease.price/productToDecrease.quantity),
              quantity: cartItem['quantity'] - 1,         
            }
          } else {
            return {...cartItem}
          }
        })
        }

      return {...state, products: getDecreasedProducts()};
    
    case CLEAR_CART: 
      return  {
        ...state, products: []
      }

    default: 
      return state; 
  }
}