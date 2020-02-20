import React from 'react';
import ProductTile  from '../ProductTile'; 
import bluejeans from '../../images/bluejeans.jpeg'; 
import blackjeans from '../../images/blackjeans.jpeg'; 
import whitejeans from '../../images/whitejeans.jpeg'; 

const products = [
  {
    id: 1, 
    img: bluejeans, 
    name: "Blue Jeans", 
    description: "product description is blue jeans", 
    price: 100
  },
  {
    id: 2,  
    img: blackjeans, 
    name: "Black Jeans", 
    description: "product description is black jeans", 
    price: 50
  },
  {
    id: 3, 
    img: whitejeans, 
    name: "White Jeans", 
    description: "product description is white jeans", 
    price: 100
  },
]

function ProductList() {
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
                  <div className="Grid__Cell 1/2--phone 1/3--tablet-and-up 1/4--lap-and-up">
                    <ProductTile 
                      key={product.id}
                      image={product.img}
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

export default ProductList;