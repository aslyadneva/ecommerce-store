import React, { Component } from 'react'; 

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'; 
import ButtonGroup from './ButtonGroup'; 

import TextInput from './TextInput'; 
import SelectInput from './SelectInput'; 

const countries = ['United States']; 
const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];


class CustomerInfo extends Component {
  handleChange = (event) => {
    this.props.change(event.target.name, event.target.value); 
  }

  handleSubmit = () => {
    // validate forms 
    this.props.next(); 
  }

  render() {
    return (
      <form className="CustomerInfo" onSubmit={this.handleSubmit}>

        <div className="CustomerInfo__contact">
          <h2 className="checkoutForm__heading">Contact Info</h2>
          <TextInput 
            type='email'
            placeholder='Email' 
            label='Email' 
            name='email' 
            value={this.props.email}
            change={this.handleChange}
          />
        </div>

        <div className="CustomerInfo__address" style={{marginTop: '2rem'}}>
          <h2 className="checkoutForm__heading">Shipping address</h2>
          <div className="formGrid">

           
              <TextInput 
                type='text'
                placeholder='First name' 
                label='First name' 
                name='firstName' 
                value={this.props.firstName}   
                change={this.handleChange}
              />     
              <TextInput 
                  type='text'
                  placeholder='Last name' 
                  label='Last name' 
                  name='lastName' 
                  value={this.props.lastName}     
                  change={this.handleChange}
              />
         

          <TextInput 
            type='text'
            placeholder='Address' 
            label='Address' 
            name='address' 
            value={this.props.address}     
            change={this.handleChange}
          />  

          <TextInput 
            type='text'
            placeholder='City' 
            label='City' 
            name='city'  
            value={this.props.city}     
            change={this.handleChange}
          />  

         
              <SelectInput 
                placeholder="Country" 
                name="country"
                options={countries}
                change={this.handleChange}
                value={this.props.country}
              />
            

            
              <SelectInput 
                placeholder="State" 
                name='state' 
                options={states} 
                change={this.handleChange}
                value={this.props.state}
              />
           
              <TextInput 
                type='text'
                placeholder='Zip code' 
                label='Zip code' 
                name='zipCode' 
                value={this.props.zipCode}     
                change={this.handleChange}
              />
            

          <TextInput 
            type='phone'
            placeholder='Phone' 
            label='Phone' 
            name='phone' 
            value={this.props.phone}     
            change={this.handleChange}
          />
          </div>

        </div>
        <ButtonGroup page={this.props.page}/>
      </form>
    )
  }
}

export default CustomerInfo; 
