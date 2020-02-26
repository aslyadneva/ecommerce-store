import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; 

class Newsletter extends Component {
  renderInput ({input, label}) {
    return (
      <div>
        <label>{label}</label>
        <input {...input}/>
      </div>
    );
  }

  onSubmit (formValues) {
    console.log(formValues); 
  }

  render () {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div>
          <div>Sign Up for Our Newsletter</div>
          <div>GET 20% OFF YOUR FIRST ORDER, EXCLUSIVE ACCESS TO SALES AND HOT NEW ARRIVALS.</div>
          <div>
            <Field name="first name" label="First" component={this.renderInput}/>
            <Field name="last name" label="Last" component={this.renderInput}/>
            <Field name="birthday" label="Birthday(MM/DD/YYYY)" component={this.renderInput}/>
          </div>

          <div>
            <Field name="email" label="Email" component={this.renderInput}/>
            <button>Subscribe</button>
          </div>
        </div>
      </form>
    );
  }  
}

export default reduxForm({
  form: 'newsletterSignUp'
})(Newsletter);