import React from 'react'
import {useParams, useNavigate, Link } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from 'react' 

const OneProduct = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    const [product, setProduct]=useState({})
    

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then(res=>{
                console.log(res)
                setProduct(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [])

    const handleDelete=()=>{
        axios.delete(`http://localhost:8000/api/oneProduct/${id}`)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
        navigate("/")
    }
  return (
    <div>
        <h2>One Product</h2>
        <p>Title: {product.title}</p>
        <p>Price: ${product.price}</p>
        <p>Description: { product.description}</p>
        <Link to={`/updateProduct/${product._id}`}>Update product details</Link>
        <br/>
        <button onClick={(e)=>handleDelete(product._id)}>Delete</button>
    </div>
  )
}

export default OneProduct