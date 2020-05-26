import { changeAuth } from '../actions'; 

export default class GoogleAuth {
  constructor () {
    this.clientId = '157064655345-kbmdvrq88mknudq5k72kp028d75ugpkn.apps.googleusercontent.com';
    this.scope = 'email';
    // this.auth = {auth object}
  };

  init = (dispatch) => {
    window.gapi.load('client:auth2', () => {

      window.gapi.client.init({
        clientId: this.clientId, 
        scope: this.scope,  
        fetch_basic_profile: true
      })  // init returns a promise 

      .then(() => {
        this.auth = window.gapi.auth2.getAuthInstance(); //returns an object with all necessary sign in/sign out methods

        // setting the listen method on the auth obj to listen for successful sign in or sign out
        this.auth.isSignedIn.listen(() => dispatch(changeAuth()));
              
        dispatch(changeAuth());  
      })
    });  
  }

  isSignedIn = () => {
    return this.auth.isSignedIn.get();
  }

  getCurrentUser = () => {
    this.currentUser = this.auth.currentUser.get().getBasicProfile(); 
    return {
      id: this.currentUser.getId(),
      firstName: this.currentUser.getGivenName(), 
      lastName: this.currentUser.getFamilyName(), 
      email: this.currentUser.getEmail()
    }
  }

  signIn = () => {
    this.auth.signIn();
  }
 
  signOut = () => {
    this.auth.signOut();
  }
}