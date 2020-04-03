import { OPEN_SIDENAV, CLOSE_SIDENAV} from '../actions/types'; 

export default (state = false, action) => {
  switch (action.type) {
    case OPEN_SIDENAV: 
      return state = true
    case CLOSE_SIDENAV: 
      return state = false
    default: 
    return state
  }

}