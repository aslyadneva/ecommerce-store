import React, {Component} from 'react';
import { connect } from 'react-redux'; 
import { trySignOut, setNavColor } from '../../actions'; 
import Separator from '../Separator'; 


class Account extends Component {

  componentDidMount () {
    this.props.setNavColor('opaque'); 
  } 

  componentWillUnmount() {
    this.props.setNavColor(null);
  }   

  handleClick = () => {
    this.props.trySignOut(); 
  }

  render () {
    let content; 
    const {user} = this.props
    if (user) {
      content = (
        <main className="Container">         
          <header className="Account__header">
              <span className="Heading Text--subdued h7" style={{marginBottom: '2.5rem', display: 'block', cursor: 'pointer'}} onClick={this.handleClick}>LOGOUT</span> 
              <div style={{marginBottom: '4rem'}}>
                <h1 className="Heading h1" style={{marginBottom: '1rem'}}>My Account</h1>
                <p>Welcome back, {user ? user.firstName: 'UserNAME'}!</p>
              </div>
          </header>    
          <div>
            <div>
              <h2 className="Heading Text--subdued h7">My Orders</h2>
              <Separator/>
              <p>You haven't placed any orders yet.</p>
            </div>
          </div>   
        </main>
      )
    } 
    
    else {
      content = <div>Loading</div>
    }

    return (
      <section className="Account">
        {content}       
      </section>
    );
  }  
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

export default connect (mapStateToProps, {trySignOut, setNavColor })(Account);