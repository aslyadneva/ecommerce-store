import bluejeans from '../images/bluejeans.jpeg'; 
import blackjeans from '../images/blackjeans.jpeg'; 
import whitejeans from '../images/whitejeans.jpeg'; 

const INITIAL_STATE = {
  'blue-jeans':
  {
    id: 'blue-jeans', 
    img: bluejeans, 
    name: "Blue Jeans", 
    description: "product description is blue jeans", 
    sizes: ['small', 'medium', 'large'],
    price: 100
  },
  'black-jeans':
  {
    id: 'black-jeans',  
    img: blackjeans, 
    name: "Black Jeans", 
    description: "product description is black jeans", 
    sizes: ['small', 'medium', 'large'],
    price: 50
  },
  'white-jeans':
  {
    id: 'white-jeans', 
    img: whitejeans, 
    name: "White Jeans", 
    description: "product description is white jeans",
    sizes: ['small', 'medium', 'large'], 
    price: 100
  }
}


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default: 
      return state; 
  }
}