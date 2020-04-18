import React, {Component} from 'react'; 

import TextField from '@material-ui/core/TextField'; 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'; 

import renderTextField from './renderTextField'; 
import renderSelectField from './renderSelectField'; 
import validate from './validate'; 

const countries = ['United States']; 
const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']; 

class WizardFormFirstPage extends Component { 
  continue = (event) => {
    event.preventDefault(); 
    this.props.nextPage(); 
  }

  handleChange = (event) => {
    console.log(event.target.name, event.target.value)
    this.props.handleChange(event.target.name, event.target.value)
  }

  render () {
    const { values, handleChange } = this.props; 
    
    return (
      <form autoComplete="off">
        <TextField 
          // error
          // helperText='helper text'
          fullWidth
          id="outlined-basic" 
          label="Email" 
          variant="outlined" 
          name = 'email'
          onChange={this.handleChange}  
          color='secondary'  
          
        />

        <TextField 
          // error
          // helperText='helper text'
          fullWidth
          id="outlined-basic" 
          label="First name" 
          variant="outlined" 
          name = 'firstName'
          onChange={this.handleChange}             
        />

        <TextField 
          // error
          // helperText='helper text'
          fullWidth
          id="outlined-basic" 
          label="Last name" 
          variant="outlined" 
          name = 'lastName'
          onChange={this.handleChange}             
        />  

        <TextField 
          // error
          // helperText='helper text'
          fullWidth
          id="outlined-basic" 
          label="Address" 
          variant="outlined" 
          name = 'address'
          onChange={this.handleChange}             
        />  

        <TextField 
          // error
          // helperText='helper text'
          fullWidth
          id="outlined-basic" 
          label="City" 
          variant="outlined" 
          name = 'city'
          onChange={this.handleChange}             
        />  

        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="Country"

            value={this.props.country}
            name='country'
            onChange={this.handleChange}        
          >
            {countries.map(country => (<MenuItem key={country} value={country}>{country}</MenuItem>))}
          </Select>
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            label="State"

            value={this.props.state}
            name="state"
            onChange={this.handleChange}        
          >
            {states.map(state => (<MenuItem key={state} value={state}>{state}</MenuItem>))}
          </Select>
        </FormControl>

        <TextField 
          // error
          // helperText='helper text'
          fullWidth
          id="outlined-basic" 
          label="Zip code" 
          variant="outlined" 
          value={this.props.zipCode}
          name = 'zipCode'
          onChange={this.handleChange}             
        />  

        <TextField 
          // error
          // helperText='helper text'
          fullWidth
          id="outlined-basic" 
          label="Phone" 
          variant="outlined" 
          value={this.props.phone}
          name = 'phone'
          onChange={this.handleChange}             
        />  

        <div className="Wizard__buttonGroup"> 
            <Link to='/cart' className="Wizard__previous">Return to cart</Link>
            <button type="submit" className="Wizard__continue">Continue to shipping</button>
        </div> 












  
        {/* <div className="Wizard__contact">
          <h2 className="Wizard__heading">Contact Information</h2>
          <Field initialValues="hi" bla="Bla" name="email" component={renderTextField} label="Email"/>
        </div>
  
        <div className="Wizard__shippingAddress">
          <h2 className="Wizard__heading">Shipping Address</h2>
          <Field name="firstName" component={renderTextField} label="First name"/>      
          <Field name="lastName" component={renderTextField} label="Last name"/>
          <Field name="address" component={renderTextField} label="Address" />
          <Field name="city" component={renderTextField} label="City"/>
          <Field name="country" component={renderSelectField} label="Country">
            <option value="" />
            {countries.map(country => (<option key={country} value={country}>{country}</option>))}
          </Field>    
          <Field name="state" component={renderSelectField} label="State">
            <option value="" />
            {states.map(state => (<option key={state} value={state}>{state}</option>))}  
          </Field>
          <Field name="zipCode" component={renderTextField} label="ZIP Code"/>
          <Field name="phone" component={renderTextField} label="Phone"/>     
        </div>
  
        <div className="Wizard__buttonGroup">
            <Link to='/cart' className="Wizard__previous">Return to cart</Link>
            <button type="submit" className="Wizard__continue">Continue to shipping</button>
        </div> */}
        
       
      </form>
    )
  }
  
}

export default WizardFormFirstPage; 
