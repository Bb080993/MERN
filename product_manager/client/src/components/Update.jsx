import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {

    const { id } = useParams(); //this process is identical to the one we used with our Details.js component
    const[product, setProduct]= useState({
        title:"",
        price:0,
        description:""
    })
    const navigate = useNavigate();

    //gets the once products and sets the data on the page to what it was before
    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneProduct/${id}`)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const updatePerson = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/oneProduct/${id}`, product)
            .then(res => {
                console.log(res);
                navigate("/"); 
            })
            .catch(err => console.log(err))
    }
    const handleChange=(e)=>{
        setProduct({...product, [e.target.name]: e.target.value})
    }
  return (
    <div>
        <h1>Update a product:</h1>
        <form onSubmit={updatePerson}>
        <p>
                <label>Title:</label><br/>
                <input type="text" value={product.title} name="title" onChange = {handleChange}/>
            </p>
            <p>
                <label>Price:</label><br/>
                <input type="number" value={product.price} name="price" onChange = {handleChange}/>
            </p>
            <p>
                <label>Description:</label><br/>
                <input type="text" value={product.description} name="description" onChange = {handleChange}/>
            </p>
            <input type="submit" value="Update"/>

        </form>
    </div>
  )
}

export default Update