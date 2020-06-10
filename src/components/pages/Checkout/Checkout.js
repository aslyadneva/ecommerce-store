import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import { checkingOut, clearCart, clearTotal } from '../../../actions'; 
import axios from 'axios'; 

import CheckoutHeader from './CheckoutHeader'; 
import CheckoutToggle from './CheckoutToggle'
import CheckoutPreview from './CheckoutPreview'; 
import CheckoutForm from './CheckoutForm'; 
import CheckoutFooter from './CheckoutFooter'; 


class Checkout extends Component {
  state = {
    order: null, 
    orderSummary: false 
  } 

  componentWillUnmount() {
    this.props.checkingOut(false);
  } 

  handleToggleClick = () => {
    this.state.orderSummary ? this.setState({ orderSummary: false }) : this.setState({ orderSummary: true }) 
  }

  handlePaymentComplete = (order) => {
    // Send order to DB 
    axios.post(`https://react-e-commerce-65275.firebaseio.com/orders.json`, order)
      .then(
        response => {
          console.log(response); 
          this.setState({order: order}, () => this.handleCleanUp())       
        }
      )
      .catch(error => console.log(error));
  }

  handleCleanUp = () => {
    // Clear cart and total state 
    this.props.clearCart(); 
    this.props.clearTotal(); 

    // Show order details  
  }
  
  render () {
    const { products, subTotal, shipping } = this.props; 
    const { orderSummary, order } = this.state; 
 
    return (
      <section className="Checkout">

        <CheckoutHeader size='small'/> 

        <CheckoutToggle 
          click={this.handleToggleClick} 
          total={subTotal ? subTotal + shipping : order.total} 
          orderSummary={orderSummary}
        />

        <div className="Checkout__content">

          <div className="Checkout__wrap">
            <main className="Checkout__main">
              <CheckoutHeader size='large'/>
              <CheckoutForm 
                order={this.state.order}
                onPayment={this.handlePaymentComplete}
              />
              <CheckoutFooter />
            </main>

            <aside className="Checkout__aside">
              <CheckoutPreview 
                products={products.length > 0 ? products : order.products} 
                subTotal={subTotal ? subTotal : order.subTotal} 
                shipping={order ? order.shippingAmount : shipping} 
                isOpen={orderSummary}
              />
            </aside>
          </div> 

        </div>

      </section>
    ); 
  }
}

const mapStateToProps = state => {
  return {
    products: state.cart.products, 
    subTotal: state.total.subTotal, 
    shipping: state.total.shipping
  }
}

export default connect(mapStateToProps, {checkingOut, clearCart, clearTotal})(Checkout);  
