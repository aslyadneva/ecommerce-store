import { CHECKING_OUT } from '../actions/types'; 

const INITIAL_STATE = {
  inProgress: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECKING_OUT: 
      return {...state, inProgress: action.payload}

    default: 
    return state 
  }
}