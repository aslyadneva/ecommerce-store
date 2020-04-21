import React, { Fragment } from 'react'; 

const OrderDetail = ({title, content}) => {

  let details; 
  if (title === 'Shipping address' || title === 'Billing address') {
    details = (
      <Fragment>
        <span>{content.firstName} {content.lastName}</span>
        <br/>
        <span>{content.address}</span>
        <br/>
        <span>{content.city} {content.state} {content.zipCode}</span>
        <br/>
        <span>{content.country}</span>
        <br/>
        <span>{content.phone}</span>
      </Fragment>
    )
  }
  if (title === 'Shipping method') {
    details = content
  }
  if (title === 'Payment method') {
    const lastDigits = content.cardNumber.slice(-4);
    details = `card ending with -- ${lastDigits}`
  }

  return (
    <div className="OrderDetail">
      <span className="OrderDetail__header">{title}</span>
      <div className="OrderDetail__content">
          {details}
      </div>  
    </div>
  )
}

export default OrderDetail; 