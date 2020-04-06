import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { connect } from 'react-redux';
import { closeSort, sort } from '../actions'; 


const Modal = ({sortTab, closeSort, sort, topOffset}) => {
  return ReactDOM.createPortal(

    <div className="Modal" onClick={() => closeSort()} style={{visibility: sortTab ? 'visible' : 'hidden'}}>

      <div className="Modal__sort" onClick={e => e.stopPropagation()} style={ {top: `calc(${topOffset}px + 7.2rem)`} }>
        <div className="Modal__header">
          <button onClick={() => closeSort()}>
            <i className="fas fa-times"/>
          </button>
          <span className="Heading h4">Sort</span>
        </div>

        <div className="Modal__content">
          <p onClick={() => sort("alpha")} className="Heading h6 Text--subdued">Alpabetically, A - Z</p>
          <p onClick={() => sort("alphaZ")} className="Heading h6 Text--subdued">Alpabetically, Z - A</p>
          <p onClick={() => sort("numericLow")} className="Heading h6 Text--subdued">Price, low to high</p>
          <p onClick={() => sort("numericHigh")} className="Heading h6 Text--subdued">Price, high to low</p>
        </div>
      </div>
 
    </div>,  

    document.querySelector('#modal')

  )
}

const mapStateToProps = (state) => {
  return {
    sortTab: state.sort.sortTab, 
    topOffset: state.modalDistance
  }
}

export default connect(mapStateToProps, {closeSort, sort})(Modal); 