import React, {Component} from 'react'; 
import ReactDOM from 'react-dom'; 
import { connect } from 'react-redux';
import ProductTile from './ProductTile/ProductTile';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
  return {
    products: state.firestoreProducts
  }
}

class Search extends Component {
  state = {
    searchInput: '', 
    searchResults: []
  }

  handleChange = (event) => {
    this.setState({searchInput: event.target.value}, 
      () => { this.state.searchInput !== '' 
      ? this.setState({searchResults: this.props.products.filter(product => product.name.toLowerCase().includes(this.state.searchInput))})
      : this.setState({searchResults: []})   
    })
  }

  componentDidUpdate (prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.close()
    }
  }

  render () {
    const {close} = this.props
    const {searchInput, searchResults} = this.state

    return ReactDOM.createPortal(

      <div className="Search">
        <div className="Search__bar">
          <input 
            className="Search__input Heading" 
            type="text" 
            placeholder="Search..."
            value={searchInput}
            onChange={this.handleChange}
          />
          <i onClick={() => close()} style={{color: '#1c1b1b', cursor: 'pointer'}} className="fas fa-times fa-2x"/>
        </div>
        <div className="Search__results">
          {searchResults.length > 0 && 
             <div className="Search__title">        
              <span className="Heading Text--subdued h7">{`${searchResults.length} result${searchResults.length > 1 ? 's' : ''}`}</span>
             </div>
          }
         
          <div className="Search__content">
            {searchInput.length > 0 && searchResults.length < 1 
              ? <p>No results could be found</p> 
              : searchResults.map(item => (<ProductTile key={item.id} id={item.id} image={item.image} name={item.name} price={item.price}/>))
            }
          </div>      
        </div>
      </div>,  
  
      document.querySelector('#modal') 
    )
  }  
}

export default connect(mapStateToProps)(withRouter(Search)); 