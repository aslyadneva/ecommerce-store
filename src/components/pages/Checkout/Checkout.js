import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import {Link} from 'react-router-dom'; 
import { checkingOut } from '../../../actions'; 

import CheckoutHeader from './CheckoutHeader'; 
import CheckoutToggle from './CheckoutToggle'
import CheckoutPreview from './CheckoutPreview'; 
import CheckoutForm from './CheckoutForm'; 
import CheckoutFooter from './CheckoutFooter'; 


class Checkout extends Component {
  state = {
    orderSummary: false 
  } 

  // componentDidMount () {
  //   this.props.checkingOut(true); 
  // } 
  // componentWillUnmount() {
  //   this.props.checkingOut(false);
  // } 

  handleToggleClick = () => {
    this.state.orderSummary ? this.setState({ orderSummary: false }) : this.setState({ orderSummary: true }) 
  }
 
  render () {
    const { products, subTotal, shipping } = this.props; 
    const { orderSummary } = this.state; 
 
    return (
      <section className="Checkout">

        <CheckoutHeader size='small'/> 

        <CheckoutToggle click={this.handleToggleClick} total={subTotal + shipping} orderSummary={orderSummary}/>

        <div className="Checkout__content">

          <div className="Checkout__wrap">
            <main className="Checkout__main">
              <CheckoutHeader size='large'/>
              <CheckoutForm products={products} subTotal={subTotal} shipping={shipping}/>
              <CheckoutFooter />
            </main>

            <aside className="Checkout__aside">
              <CheckoutPreview products={products} subTotal={subTotal} shipping={shipping} isOpen={orderSummary}/>
            </aside>
          </div> 

        </div>

      </section>
    ); 
  }
}

const mapStateToProps = state => {
  return {
    form : state.form.wizard, 
    products: state.cart.products, 
    subTotal: state.total.subTotal, 
    shipping: state.total.shipping
  }
}

export default connect(mapStateToProps, {checkingOut})(Checkout);  
