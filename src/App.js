import "./App.css";
import CategorySelect from "./components/CategorySelect/CategorySelect";
import Products from "./components/Products/Products";
import Product from "./components/Product/Product";
import data from "./data/data.json"
import React, { useState } from 'react';


function App() {
  console.log(data);
  
  // something about this part is incorrect - needs to be fixed //
  // const [allProducts, setAllProducts] = useState(data)

  const [displayProducts, setDisplayProducts] = useState(data)

  const productsToSend = data.products

  


  return (
    <>
    <header className="header">
      <h1>Product Page</h1>
    </header>
    <Products products={productsToSend}>
    </Products>
    <div className="footer">
      <h6>Created using React</h6>
    </div>            
    </>
  );
}

export default App;  




// // Working display of product information //
  // const allProducts = data.products.map((product) => {
  //   return (
  //     <>
  //     <p>{product.title}</p>
  //     <p>{product.description}</p>
  //     <p>{product.price}</p>
  //     <p>{product.discountPercentage}</p>
  //     <p>{product.category}</p>
  //     <p>{product.brand}</p>
  //     <p>{product.stock}</p>
  //     <p>{product.rating}</p>
  //     </>
  //   )
  // })