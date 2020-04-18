import React from 'react'; 
import { Field, reduxForm } from 'redux-form';
import renderTextField from './renderTextField'; 

const WizardFormThirdPage = ({ handleSubmit, previousPage }) => { 

  return (
    <form onSubmit={handleSubmit}>
      <div className="Wizard__payment">
        <h3>Payment</h3>
        <p>All transactions are secure and encrypted.</p>

        {/* Card Number */}
        <Field 
          name="cardNumber" 
          type="phone" 
          component={renderTextField} 
          label="Card number" 
          defaultValue="123456789"
        />

        {/* Name on Card */}
        <Field 
          name="cardHolderName" 
          type="text" 
          component={renderTextField} 
          label="Name on card" 
        />

        {/* Expiration Date */}
        <Field 
          name="cardExpiry" 
          type="phone" 
          component={renderTextField} 
          label="Expiration date (MM/YY)" 
        />

        {/* Security Code */}
        <Field 
          name="cardSecurityCode" 
          type="phone" 
          component={renderTextField} 
          label="Security Code" 
        />
      </div>
      
      <div>
        <button onClick={previousPage}>Return to shipping</button>
        <button type="submit" className="next">Pay Now</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', 
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(WizardFormThirdPage); 
