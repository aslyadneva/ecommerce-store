import { OPEN_CART, CLOSE_CART, ADD_TO_CART, REMOVE_FROM_CART  } from '../actions/types'; 

const INITIAL_STATE = {
  isOpen: false,
  products: [], 
  total: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  
    case OPEN_CART: 
      return {...state, isOpen: true};

    case CLOSE_CART: 
      return {...state, isOpen: false};

    case ADD_TO_CART: 
      // addedItem is the entire added product object 
      const addedItem = action.payload; 

      // IF the added item is already in the cart, increase the original item's quantity by +1 , and return the original item
      // OTHERWISE just return the addedItem 
      function determineProduct (addedItem) {
        const sameProduct = state.products.find(product => product.id === addedItem.id); 
        if (sameProduct) {
          sameProduct.quantity +=1; 
          return sameProduct
        }
        return addedItem; 
      }

      // This is either the object of a new product being added or an object of a product that was added more than once
      // with an increased quantity value 
      const itemToBeAdded = determineProduct(addedItem); 

      const itemsWithoutDuplicates = state.products.filter(product => product.id !== itemToBeAdded.id); 
      const newItemsArr = [...itemsWithoutDuplicates, itemToBeAdded]; 
      

      function determineTotalPrice (newItemsArr) {
        const pricesPerProduct = [];
        newItemsArr.forEach(product => pricesPerProduct.push(product.quantity * product.price)); 

        // add all the price items in the pricesPerProduct array  
        const totalPrice = pricesPerProduct.reduce((accumulator, currentValue) => accumulator + currentValue); 

        return totalPrice; 
      }
 
      return {
        ...state, 
        products: newItemsArr, 
        total: determineTotalPrice(newItemsArr)
      };

    case REMOVE_FROM_CART: 
      const removedItem = action.payload; 
      const newProducts = state.products.filter(product => {
        return product.id !== removedItem.id
      })
      const totalAfterRemoved = state.total - removedItem.price
      return {
        ...state, products: [...newProducts], total: totalAfterRemoved
      };

    default: 
      return state; 
  }
}