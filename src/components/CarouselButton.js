import React from 'react'

const CarouselButton = ({direction, click}) => {
  return (
    <button className={`CarouselButton CarouselButton--${direction}`} onClick={click}>
      <i className={`fas fa-chevron-${direction}`}></i>
    </button>
  )
}

export default CarouselButton; 
