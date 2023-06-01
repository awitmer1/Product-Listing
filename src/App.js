import "./App.css";
import CategorySelect from "./components/CategorySelect/CategorySelect";
import Products from "./components/Products/Products";
import data from "./data/data.json"
import React, { useState, useEffect } from 'react';
import { processCategories } from "./utils";


function App() {
  
  console.log(data);

  const [displayProducts, setDisplayProducts] = useState(data.products);
  const [selectedCategory, setSelectedCategory] = useState('')

  const categories = processCategories(data.products);

  //Category Filter//
  useEffect (() => {
    let filteredProducts = data.products;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter((product) => product.category.includes(selectedCategory));
    }

    setDisplayProducts(filteredProducts);
  })

  return (
    <>
    <header className="header">
      <h1>Product Page</h1>
    </header>
    <CategorySelect categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
    <Products products={displayProducts}>
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