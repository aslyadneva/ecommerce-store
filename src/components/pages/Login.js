import React, {Component} from 'react';

import { connect } from 'react-redux'; 
import { signIn } from '../../actions'; 

class Login extends Component {

  handleClick = () => {
    this.props.signIn(); 
  }

  render () {
    return (
      <div>
        <h1>Login</h1>
        <button onClick={this.handleClick}>Sign In with Google</button>
      </div>
    );
  }


  
}

export default connect (null, {signIn})(Login);