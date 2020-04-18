import { SET_NAV } from '../actions/types'; 

export default (state = null, action) => {
  switch (action.type) {
    case SET_NAV: 
      return action.payload
    default: 
    return state 
  }
}