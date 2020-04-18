import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 

class ButtonGroup extends Component {
  renderNext = (page) => {
    if (page === 1) {
      return 'Continue to shipping'
    } else if (page === 2) {
      return 'Continue to payment'
    } else {
      return 'Pay now'
    }
  }

  renderPrev = (page) => {
    if (page === 1) {
      return (
        <Link to='/cart' className="ButtonGroup__previous">
          <i className="fas fa-chevron-left"/>
          Return to cart
        </Link>
      )
    } else if (page > 1) {
      return (
        <button className="ButtonGroup__previous" onClick={this.props.goBack}>
          <i className="fas fa-chevron-left"/>
          {page === 2 ? 'Return to information' : 'Return to shipping'}
        </button>
      )
    }
  }
  render() {
    const { page } = this.props;    

    return (
      <div className="ButtonGroup">  

        {this.renderPrev(page)}

        <button type="submit" className="ButtonGroup__continue">
          {this.renderNext(page)}
        </button>

      </div>
    )
  }
}

export default ButtonGroup; 
