import React, {Component} from 'react';
import { connect } from 'react-redux'; 
import { signOut } from '../../actions'; 

class Account extends Component {
  constructor () {
    super(); 
    this.handleClick = this.handleClick.bind(this); 
  }
  handleClick () {
    this.props.signOut(); 
  }

  render () {
    return (
      <div>
        <h1>LOGOUT</h1>
        <button onClick={this.handleClick}>Log Me Out</button>
        <p>Welcome user name!</p>
      </div>
    );
  }  
}

export default connect (null, { signOut })(Account);