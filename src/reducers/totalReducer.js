import { 
  UPDATE_SUBTOTAL, ADD_SHIPPING, CLEAR_TOTAL 
} from '../actions/types'; 

const INITIAL_STATE = {
  subTotal: 0, 
  shipping: 0
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UPDATE_SUBTOTAL: 
      const cartProducts = action.payload
      return {
        ...state, 
        subTotal: cartProducts.reduce((acc, product)=> acc + product.price, 0)      
      }
    case ADD_SHIPPING: 
      const shippingMethod = action.payload; 
      return {
        ...state, 
        shipping: shippingMethod === 'standard' ? 6.95 : 16.99      
      }
    case CLEAR_TOTAL:
      return {
        subTotal: 0, 
        shipping: 0
      }
    default: 
      return state
  }
}