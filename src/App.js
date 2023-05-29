import "./App.css";
import data from "./data/data.json"
import React, { useState } from 'react';


function App() {
  console.log(data);
  
  // something about this part is incorrect - needs to be fixed //
  const [allProducts, setAllProducts] = useState(data)

  return (
    <>
    <div className="header">
      <h1>Product Page</h1>
    </div>
    <div>
      <h1>Hello, Student!</h1>
    </div>
    <div className="footer">
      <h6>Created using React</h6>
    </div>            
    </>
  );
}

export default App;
