import React, { Component } from 'react'; 

import WizardFormFirstPage from './WizardFormFirstPage'; 
import WizardFormSecondPage from './WizardFormSecondPage'; 
import WizardFormThirdPage from './WizardFormThirdPage'; 
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

class WizardForm extends Component {
  state = { 
    page: 1, 
    email: '', 
    firstName: '', 
    lastName: '', 
    address: '', 
    city: '', 
    country: '',
    state: '', 
    zipCode: '', 
    phone: '', 
    shippingMethod: '', 
    cardNumber: '', 
    cardHolderName: '', 
    cardExpiry: '', 
    cardSecurityCode: ''
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
  }

  handleChange = (valueName, value) => {
    this.setState({ [valueName]: value })
  }

  render() {

    const { onSubmit } = this.props;
    const { page } = this.state;
    const { 
      email, firstName, lastName, address, city, country, state, zipCode, phone, 
      shipingMethod, 
      cardNumber, cardHolderName, cardExpiry, cardSecurityCode} = this.state; 
    
    let renderForm; 

    if (page === 1) {
      renderForm = (
        <WizardFormFirstPage        
          nextPage={this.nextPage}
          handleChange={this.handleChange}
          values={email, firstName, lastName, address, city, country, state, zipCode, phone}
          email={email}
          country={country}
          state={state}
          zipCode={zipCode}
          phone={phone}
        />
      )
    } else if (page === 2) {
      renderForm = (
        <WizardFormSecondPage 
          prevPage={this.previousPage}       
          nextPage={this.nextPage}
          handleChange={this.handleChange}
          values={shipingMethod}
        />
      )
    } else if (page === 3) {
      renderForm = (
        <WizardFormSecondPage 
          prevPage={this.previousPage}         
          handleChange={this.handleChange}
          values={cardNumber, cardHolderName, cardExpiry, cardSecurityCode}
        />
      )
    }
    
    return (
      <div className="Wizard">
        <Breadcrumbs separator={<NavigateNextIcon fontSize="large" />} aria-label="breadcrumb" style={{paddingBottom: '2.1rem'}}>
          <div style={{color:'#caa98a'}}>Cart</div>
          <div style={{color: this.state.page === 1 ? 'black' : '#caa98a'}}>Information</div>
          <div style={{color: this.state.page === 2 ? 'black' : '#caa98a'}}>Shipping</div>
          <div style={{color: this.state.page === 3 ? 'black' : '#caa98a'}}>Payment</div>     
        </Breadcrumbs>    

        {renderForm}
      </div>
    );
  }
}

export default WizardForm; 
