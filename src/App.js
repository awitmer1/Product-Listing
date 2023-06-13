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
    
    filteredProducts.sort((a, b) => {
      if (a.title < b.title){return -1;}
      if (a.title > b.title){return 1;}
      return 0;})

    if (selectedCategory) {
     filteredProducts = filteredProducts.filter((product) => product.category.includes(selectedCategory));
    }

    setDisplayProducts(filteredProducts);

    
 }, [selectedCategory]);

  //Alphabetize Filter//
  useEffect (() => {

    let alphabetizeProducts = [...displayProducts];
    
    // let convertLC = [...displayProducts];
    // let converted = convertLC.filter((product) => product.title.toLowerCase());    
    // let alphabetizeProducts = converted;
   
    
    if (alphabetize === 'a-z') {
      
      alphabetizeProducts.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
  
        if (titleA < titleB){return -1;}
        if (titleA > titleB){return 1;}
        return 0;}
      )} else if (alphabetize === 'z-a') {
        alphabetizeProducts.reverse();     
      }
      
      setDisplayProducts(alphabetizeProducts); 

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