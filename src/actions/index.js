import { INIT_AUTH, SIGN_IN, SIGN_OUT } from './types'; 

let auth; 

//initAuth needs to be called when the App first loads (aka from it's componentDidMount())
export const initAuth = () => {

  //1) Load the Auth2 library (this adds new methods to the gapi objects)


  //2) Initialize Auth2 Library with our ID 
  // ONLY do this step when the Auth2 library is finished loading duh 
  return function (dispatch) {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '157064655345-kbmdvrq88mknudq5k72kp028d75ugpkn.apps.googleusercontent.com', 
        scope: 'email'
      });
      dispatch({ type: INIT_AUTH }); 
    }); 

  }
}



export const signIn = () => { 
  auth = window.gapi.auth2.getAuthInstance(); //returns an object with all necessary sign in/sign out methods
  auth.signIn(); 
  return {
    type: SIGN_IN
  };
};

export const signOut = () => {
  auth.signOut(); 
  return {
    type: SIGN_OUT
  };
};