import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"

const AllProducts = (props) => {
    const navigate= useNavigate()
    const {removeFromDom, products, setProducts}=props

    useEffect(()=>{
        axios.get("http://localhost:8000/api/allProducts")
        .then(res=>{
            console.log(res)
            setProducts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, []
    )
    const handleDelete=(_id)=>{
        axios.delete(`http://localhost:8000/api/oneProduct/${_id}`)
        .then(res=>{
            console.log(res)
            removeFromDom(_id)
        })
        .catch(err=>{
            console.log(err)
        })
        navigate("/")
    }
  return (
    <div>
        <h1>All Products!</h1>
        {
            products.map((product)=>(
                <div key={product._id}>
                    <h2>{product.title}</h2>
                    {/* <p>${product.price}</p>
                    <p>{product.description}</p> */}
                    <Link to={`/oneProduct/${product._id}`}>Details</Link>
                    <br/>
                    <Link to={`/updateProduct/${product._id}`}>Update product details</Link>
                    <br/>
                    <button onClick={(e)=>handleDelete(product._id)}>Delete</button>

                </div>
            ))
        }
    </div>
  )
}

export default AllProducts


