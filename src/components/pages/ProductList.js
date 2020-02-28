import React from 'react';
import ProductTile  from '../ProductTile'; 
import { connect } from 'react-redux'; 

function ProductList({ products }) {
  return (
    <main>
      <div>

        {/* Toolbar */}
        <div className="CollectionToolbar CollectionToolbar--top CollectionToolbar--reverse">
        </div>

        {/* Main List Section */}
        <div className="CollectionInner">

          <div className="CollectionInner__Products">

            <div className="ProductListWrapper">

              <div className="ProductList ProductList--grid ProductList--removeMargin Grid">

                {products.map(product => {
                  return (
                    <div key={product.id} className="Grid__Cell 1/2--phone 1/3--tablet-and-up 1/4--lap-and-up">
                      <ProductTile                     
                        id={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                      />
                    </div>
                  );
                })}
                
              </div>

            </div>
          </div>

        </div>
        
      </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(ProductList);