import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import {Link} from 'react-router-dom'; 
import { checkingOut } from '../../../actions'; 
import CheckoutPreview from './CheckoutPreview'; 
import CheckoutForm from './CheckoutForm'; 

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';

import Container from '@material-ui/core/Container';
import WizardForm from '../../WizardForm/WizardForm'; 
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Checkout extends Component {
  state = {
    orderSummary: false 
  }

  componentDidMount () {
    this.props.checkingOut(true); 
  } 
  componentWillUnmount() {
    this.props.checkingOut(false);
  } 

  handleSubmit = (values) => {
    // console.log(this.props.form.values)
    console.log(values)
  }

  handleToggleClick = () => {
    this.state.orderSummary ? this.setState({ orderSummary: false }) : this.setState({ orderSummary: true }) 
  }

  render () {
    const { products } = this.props; 
    const { orderSummary } = this.state; 

    return (
      <section className="Checkout">

        <div className="Checkout__form">
          <header className="Checkout__header">
            <Link to='/'>
              <span style={{fontWeight: '300'}}>Brand</span> Name
            </Link>       
          </header>

          <div className="Checkout__summary" onClick={this.handleToggleClick}>
            <div className="Checkout__summary__heading">
              <span className="Checkout__summary__text">
                <i className="fas fa-shopping-cart"/>
                {orderSummary ? 'Hide': 'Show'} order summary <i className={`fas fa-chevron-${orderSummary ? 'up' : 'down'}`}/>
              </span>
              <span className="Checkout__summary__total" >$69.99</span>
            </div>
          </div>
          <div className="Checkout__toggle" style={{display: orderSummary ? 'block' : 'none'}}>
            <CheckoutPreview products={products}/>
          </div>







          <div className="Checkout__content">    

            <div className="Checkout__content__form">
              <CheckoutForm products={products}/>
            </div>

            <footer className="Checkout__footer">
              <p className="Checkout__footer__text">All rights reserved &copy; BrandName</p>
            </footer>

          </div>

        </div>










        <div className="Checkout__preview">
          <CheckoutPreview products={products}/>
        </div>














        {/* <header className="Checkout__header">
          <Link to='/'>
            <span style={{fontWeight: '300'}}>Brand</span> Name
          </Link>       
        </header>

        <ExpansionPanel square style={{backgroundColor: '#fafafa', boxShadow: 'none'}}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{maxWidth: '650px', margin: '0 auto', padding: '0 1.7rem'}}
          > 
           
              <span style={{color: '#caa98a'}}>Show Order Summary</span>
              <span style={{color: '#333333', marginLeft: 'auto'}}>$56.99</span>
            
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {this.props.products.map(product => {
              return (
                <div>
                    {product.name}
                    {product.quantity}
                    {product.size}
                    {product.price.toFixed(2)}
                </div>
              );
            })}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
        <div className="Checkout__wrapper">
          <div className="Checkout__content">
            <div className="Checkout__main">
              <WizardForm onSubmit={this.handleSubmit}/>
            </div>
            
          </div>

          <footer className="Checkout__footer">
            <p>All rights reserved &copy; BrandName</p>
          </footer>
        </div> */}

      </section>
    ); 
  }
}

const mapStateToProps = state => {
  return {
    form : state.form.wizard, 
    products: state.cart.products
  }
}

export default connect(mapStateToProps, {checkingOut})(Checkout);  
