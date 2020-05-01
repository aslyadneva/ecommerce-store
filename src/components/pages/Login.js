import React, {Component} from 'react';

import { connect } from 'react-redux'; 
import { signIn, setNavColor } from '../../actions'; 

class Login extends Component {

  componentDidMount () {
    this.props.setNavColor('opaque'); 
  } 

  componentWillUnmount() {
    this.props.setNavColor(null);
  }   

  handleClick = () => {
    this.props.signIn(); 
  }
 
  render () {
    return (
      <section className="Login">
        <main className="Container Login__wrapper">
          <div className="Login__form">
            <div className="Login__header">
              <h1 className="Heading h1" style={{marginBottom: '2rem'}}>Login</h1>
              <p>Please sign in</p>
            </div>
            <button 
              className="Button Button--primary Button--full" 
              onClick={this.handleClick}
            >
              <i className="fab fa-google" style={{marginRight: '2rem'}}/>
              Sign In with Google
            </button>
          </div>
        </main>
      </section>
    );
  }


  
}

export default connect (null, {signIn, setNavColor})(Login);