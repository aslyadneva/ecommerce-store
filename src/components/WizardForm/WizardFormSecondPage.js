import React from 'react'; 
import { Field, reduxForm } from 'redux-form';
import Radio from '@material-ui/core/Radio';
import renderRadioGroup from './renderRadioGroup'; 

const WizardFormSecondPage = ({ handleSubmit, previousPage }) => { 

  return (
    <form onSubmit={handleSubmit}>

      <div className="Wizard__shippingMethod">
        <h3>Shipping Method</h3>

        {/* <Field name="shippingMethod" component={renderRadioGroup}>
          <Radio value="standard" label="Standard Shipping (7-14 business days)" />
          <Radio value="express" label="Express Shipping (1-3 business days)" />
        </Field> */}

        <label>
          <Field name="shippingMethod" component="input" type="radio" value="standard" />
          {' '}
          Standard Shipping (7-14 business days)
          <span>$5.99</span>
        </label>

        <label>
          <Field name="shippingMethod" component="input" type="radio" value="express" />
          {' '}
          Express Shipping (1-3 business days)
          <span>$10.99</span>
        </label>
      </div>

      
      <div>
        <button type="button" className="previous" onClick={previousPage}>Previous</button>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', 
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(WizardFormSecondPage); 
