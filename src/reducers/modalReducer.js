import { GET_SORT_DISTANCE } from '../actions/types'; 

export default (state = null, action) => {
  switch (action.type) {
    case GET_SORT_DISTANCE: 
      return action.payload
    default: 
    return state
  }

}