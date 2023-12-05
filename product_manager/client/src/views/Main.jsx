import AllProducts from "../components/AllProducts";
import ProductForm from "../components/ProductForm";
import React, { useState } from 'react'
import axios from 'axios';

 
 const Main = (props) => {
    const [products, setProducts]=useState([])
    const removeFromDom = personId => {
        setProducts(products.filter(product => product._id != personId)); }
   return (
     <div>
        <ProductForm products={products} setProducts={setProducts}/>
        <AllProducts products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>
     </div>
   )
 }
 
 export default Main