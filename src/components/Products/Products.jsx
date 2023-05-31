import React, { useState } from 'react';
import './products.css';
import Product from '../Product/Product';


const Products = ({products}) => {
    
    // const [displayProducts, setDisplayProducts] = useState(data)
    
    return ( 
        <>
        <div className="products-container">
            <Product products={products}/>            
        </div>
        </>
     );
}
 
export default Products;