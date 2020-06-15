import { OPEN_SORT, CLOSE_SORT, SORT, CLEAR_SORT} from '../actions/types'; 

const INITIAL_STATE = {
  sortTab: false, 
  sortedProducts: []
} 

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_SORT: 
      return {...state, sortTab: true}
    case CLOSE_SORT: 
      return {...state, sortTab: false}
    case SORT: 
      const { sortType, products } = action.payload; 
      console.log(products)

      // SORT alpabetically a-z 
      function compareAlpha (a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }    
        // names must be equal
        return 0;
      }

      // SORT alpabetically Z-A
      function compareAlphaZ (a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }    
        // names must be equal
        return 0;
      }

      // SORT numerically LOW to HIGH 
      function compareNumeric (a, b) {
        var priceA = a.price;
        var priceB = b.price; 
        if (priceA < priceB) {
          return -1;
        }
        if (priceA > priceB) {
          return 1;
        }    
      
        return 0;
      }

      // SORT numerically HIGH to LOW
      function compareNumericHigh (a, b) {
        var priceA = a.price;
        var priceB = b.price; 
        if (priceA > priceB) {
          return -1;
        }
        if (priceA < priceB) {
          return 1;
        }    
      
        return 0;
      }

      let newSortedProducts; 
      if (sortType === 'alpha') {
        newSortedProducts = [...products].sort(compareAlpha);       
      } else if (sortType === 'alphaZ') {
        newSortedProducts = [...products].sort(compareAlphaZ);       
      } else if (sortType === 'numericLow') {
        newSortedProducts = [...products].sort(compareNumeric); 
      } else if (sortType === 'numericHigh') {
        newSortedProducts = [...products].sort(compareNumericHigh); 
      }

      return {...state, sortedProducts: newSortedProducts}
    
    case CLEAR_SORT: 
      return {...state, sortedProducts: []}
      
    default: 
    return state
  }

}