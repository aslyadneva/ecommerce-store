import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import { signIn, signOut } from '../actions'; 

class GoogleAuth extends Component {

  componentDidMount() {

    window.gapi.load('client:auth2', () => {
      const id = '157064655345-kbmdvrq88mknudq5k72kp028d75ugpkn.apps.googleusercontent.com'; 

        window.gapi.client.init({clientId: id, scope: 'email'})
          .then(()=> {
            this.auth = window.gapi.auth2.getAuthInstance(); //returns an object with all necessary sign in/sign out methods
            this.onAuthChange(this.auth.isSignedIn.get()); //returns a boolean true or false 
            this.auth.isSignedIn.listen(this.onAuthChange)
          });
    }); 

  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn()
    } else {
      this.props.signOut()
    }
  }

  onSignOut = () => {
    this.auth.signOut(); 
  }

  onSignIn = () => {
    this.auth.signIn(); 
  }

  renderAuthButton () {
    if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOut}>Sign out</button>
      );
    } else {
      return (
        <button onClick={this.onSignIn}>Sign In</button>
      );
    }
  }

  render() {
    return (
    <div>{this.renderAuthButton()}</div>
    ); 
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect (mapStateToProps, {signIn, signOut})(GoogleAuth); 