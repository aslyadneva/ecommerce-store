import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form'; 

class Newsletter extends Component {

  handleSubmit (e) {
    e.preventDefault()
  }

  render () {
    return (
      <form className="Section Newsletter" autoComplete="off" onSubmit={this.handleSubmit}>
       
       <div className="Newsletter__container">
          <h3 className="Heading h4 Newsletter__heading">Sign Up for Our Newsletter</h3>
          <p className="Newsletter__text">GET 20% OFF YOUR FIRST ORDER, EXCLUSIVE ACCESS TO SALES AND HOT NEW ARRIVALS.</p>

          <div className="Newsletter__formContainer"> 
            <div className="Newsletter__formGroup">
              <label htmlFor="firstName">First</label>
              <input name="firstName" type="text" id="firstName" placeholder="First Name" autoComplete="off"/>
            </div>

            <div className="Newsletter__formGroup">
              <label htmlFor="lastName">Last</label>
              <input name="lastName" type="text" id="lastName" placeholder="Last Name" autoComplete="new-password"/>
            </div>

            <div className="Newsletter__formGroup">
              <label htmlFor="birthday">Birthday</label>
              <input name="birthday" type="text" id="birthday" placeholder="Birthday" autoComplete="new-password"/>
            </div>

            <div className="Newsletter__formGroup">
              <label htmlFor="email">Email</label>
              <input name="email" type="email" id="email" placeholder="Email" autoComplete="new-password"/>
            </div>
          </div>

          {/* <div>
            <Field name="first name" label="First" component={this.renderInput}/>
            <Field name="last name" label="Last" component={this.renderInput}/>
            <Field name="birthday" label="Birthday(MM/DD/YYYY)" component={this.renderInput}/>
          </div>

          
            <Field name="email" label="Email" component={this.renderInput}/> */}
            <button className="Button Button--primary Button--full">Subscribe</button>
        </div>

      </form>
    );
  }  
}

export default Newsletter; 
// export default reduxForm({
//   form: 'newsletterSignUp'
// })(Newsletter);