import bluejeans from '../images/bluejeans.jpeg'; 
import blackjeans from '../images/blackjeans.jpeg'; 
import whitejeans from '../images/whitejeans.jpeg'; 
import pinkjeans from '../images/pinkjeans.jpeg'; 
import creamjeans from '../images/creamjeans.jpeg'; 

const INITIAL_STATE = [
  {
    "id": "black-jeans", 
    "name": "Black Jeans",  
    "description": "EXCLUSIVELY DESIGNED BY US FOR YOU. In our signature double lined fabric, this tank is just the right mix of casual and sleek. Soft with stretch. Shorter than a normal tank, longer than a crop.", 
    "image": blackjeans,
    "sizes": ["small", "medium", "large"],
    "price": 59.99
  }, 
  {
    "id": "blue-jeans", 
    "name": "Blue Jeans", 
    "description": "EXCLUSIVELY DESIGNED BY US FOR YOU. In our signature double lined fabric, this tank is just the right mix of casual and sleek. Soft with stretch. Shorter than a normal tank, longer than a crop.", 
    "image": bluejeans,
    "sizes": ["small", "medium", "large"],
    "price": 75.99
  },
  {
    "id": "white-jeans", 
    "name": "White Jeans", 
    "description": "EXCLUSIVELY DESIGNED BY US FOR YOU. In our signature double lined fabric, this tank is just the right mix of casual and sleek. Soft with stretch. Shorter than a normal tank, longer than a crop.", 
    "image": whitejeans,
    "sizes": ["small", "medium", "large"],
    "price": 19.99
  }, 
  {
    "id": "pink-jeans", 
    "name": "Pink Jeans", 
    "description": "EXCLUSIVELY DESIGNED BY US FOR YOU. In our signature double lined fabric, this tank is just the right mix of casual and sleek. Soft with stretch. Shorter than a normal tank, longer than a crop.", 
    "image": pinkjeans,
    "sizes": ["small", "medium", "large"],
    "price": 89.99
  }, 
  {
    "id": "cream-jeans", 
    "name": "Cream Jeans", 
    "description": "EXCLUSIVELY DESIGNED BY US FOR YOU. In our signature double lined fabric, this tank is just the right mix of casual and sleek. Soft with stretch. Shorter than a normal tank, longer than a crop.", 
    "image": creamjeans,
    "sizes": ["small", "medium", "large"],
    "price": 59.99
  }
]

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default: 
      return state; 
  }
}