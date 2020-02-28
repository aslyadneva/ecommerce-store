import bluejeans from '../images/bluejeans.jpeg'; 
import blackjeans from '../images/blackjeans.jpeg'; 
import whitejeans from '../images/whitejeans.jpeg'; 

const INITIAL_STATE = [
  {
    "id": "black-jeans", 
    "name": "Black Jeans",  
    "description": "The product desciption is black jeans", 
    "image": blackjeans,
    "sizes": ["small", "medium", "large"],
    "price": 100
  }, 
  {
    "id": "blue-jeans", 
    "name": "Blue Jeans", 
    "description": "The product desciption is black jeans", 
    "image": bluejeans,
    "sizes": ["small", "medium", "large"],
    "price": 100
  },
  {
    "id": "white-jeans", 
    "name": "White Jeans", 
    "description": "The product desciption is black jeans", 
    "image": whitejeans,
    "sizes": ["small", "medium", "large"],
    "price": 100
  }
]

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default: 
      return state; 
  }
}