import "./App.css";
import CategorySelect from "./components/CategorySelect/CategorySelect";
import Products from "./components/Products/Products";
import data from "./data/data.json"
import React, { useState, useEffect } from 'react';
import { processCategories } from "./utils";


function App() {
  
  const [displayProducts, setDisplayProducts] = useState(data.products);
  const [selectedCategory, setSelectedCategory] = useState('')
  const [alphabetize, setAlphabetize] = useState('a-z')

  const categories = processCategories(data.products);

  //Category Filter//
  useEffect (() => {
    let filteredProducts = data.products;
    
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter((product) => product.category.includes(selectedCategory));
    }

    filteredProducts.sort((a, b) => {
      if (a.title < b.title){return -1;}
      if (a.title > b.title){return 1;}
      return 0;})
    
    setDisplayProducts(filteredProducts);
    
 }, [selectedCategory]);

  //Alphabetize Filter//
  useEffect (() => {

    let convertLC = displayProducts;
    let converted = convertLC.filter((product) => product.title.toLowerCase());    
    let alphabetizeProducts = converted;

    alphabetizeProducts.sort((a, b) => {
      if (a.title < b.title){return -1;}
      if (a.title > b.title){return 1;}
      return 0;})
    
      
    if (alphabetize === 'a-z') {
      setDisplayProducts(alphabetizeProducts); 
      console.log(alphabetizeProducts)     
    } else {
      if (alphabetize === 'z-a') {
        alphabetizeProducts.reverse();
        setDisplayProducts(alphabetizeProducts);
        console.log(alphabetizeProducts);     
      }}
    }, [alphabetize]); 


  return (
    <>
    <header className="header">
      <h1>Product Page</h1>
    </header>
    <CategorySelect categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setAlphabetize={setAlphabetize}/>
    <Products products={displayProducts}>
    </Products>
    <div className="footer">
      <h6>Created using React</h6>
    </div>            
    </>
  );
}

export default App;