import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProductForm from './components/ProductForm';
import AllProducts from './components/AllProducts';
import Nav from './components/Nav'
import OneProduct from './components/OneProduct'
import Main from './views/Main'
import Update from './components/Update'


//essentials
//components
//lifting state
//forms
//state
//useEffect
//axios
//import BrowserRouter, Routes, and Route from "react-router-dom"
function App() {
  return (
    <div className="App">

      <h1>Product Manager</h1>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route index element={<Main/>}/>
          {/* < Route path="/createProduct" element= {<ProductForm/>}/> */}
          <Route path="/oneProduct/:id" element={<OneProduct/>}/>
          <Route path="/updateProduct/:id" element={<Update/>}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;

