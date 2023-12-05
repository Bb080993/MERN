import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const ProductForm = (props) => {
    const navigate=useNavigate();
    const {products, setProducts}=props
    // const [title, setTitle] = useState(""); 
    // const [price, setPrice] = useState();
    // const [description, setDescription] = useState("")
    const[product, setProduct]= useState({
        title:"",
        price:"",
        description:""
    })
    
    const onSubmitHandler = (e) => {
        
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', 
            product)
            .then(res=>{
                console.log(res); 
                console.log(res.data);
                setProducts([...products,  res.data])
                setProduct({
                    title:"",
                    price:0,
                    description:""
                })
            })
            .catch(err=>console.log(err))
        navigate("/")
        
            
    }
    const handleChange=(e)=>{
        setProduct({...product, [e.target.name]: e.target.value})
    }
    return (
        <form onSubmit={onSubmitHandler}>
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
            <input type="submit" value="Create"/>
        </form>
    )
}
export default ProductForm;

