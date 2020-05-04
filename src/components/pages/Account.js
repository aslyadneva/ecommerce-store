import React, {Component} from 'react';
import { connect } from 'react-redux'; 
import { trySignOut, setNavColor } from '../../actions'; 

class Account extends Component {

  componentDidMount () {
    this.props.setNavColor('opaque'); 
  } 

  componentWillUnmount() {
    this.props.setNavColor(null);
  }   

  handleClick = () => {
    this.props.trySignOut(this.props.history); 
  }

  render () {
    return (
      <section className="Login">
        <h1>LOGOUT</h1>
        <button onClick={this.handleClick}>Log Me Out</button>
        <p>Welcome user name!</p>
      </section>
    );
  }  
}

export default connect (null, {trySignOut, setNavColor })(Account);