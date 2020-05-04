import { CHANGE_AUTH } from '../actions/types'; 

const INITIAL_STATE = {
  isSignedIn: null
}
 
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_AUTH: 
      return {...state, isSignedIn: action.payload};

    default: 
      return state; 
  }
} 