import React from 'react';
import './products.css';
import Product from '../Product/Product';


const Products = ({products}) => {
    
    return ( 
        <>
        <div className="products-container">
            <Product products={products}/>            
        </div>
        </>
     );
}
 
export default Products;