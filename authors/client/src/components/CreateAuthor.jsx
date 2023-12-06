import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'

const CreateAuthor = (props) => {
    const navigate=useNavigate()
    const [name, setName]=useState("")
    const [errors, setErrors]=useState([])
    const {authors, setAuthors}=props
    
    const handleSubmit=(e)=>{

        e.preventDefault()

        axios.post('http://localhost:8000/api/createAuthor', {
            name
        })
        .then(res=>{
            console.log(res); 
            console.log(res.data);
            navigate("/")

        })
        .catch(err=>{
            console.log(err)
            setErrors(err.response.data.error.errors);
            console.log("error1", errors)
        })  

    }
    const handleCancel=()=>{
        navigate("/")
    }
  return (
    <div>
        <h1>Create new author!</h1>
        <Link to={"/"}>Home</Link>
        <form onSubmit={handleSubmit}>
        
            <label >Author Name:</label>
            <input type="text" name="name"  onChange={(e)=>setName(e.target.value)} />
            { errors.name ? 
                        <p>{errors.name.message}</p>
                        : null
                    }
            <button>Create Author</button>
        </form>
        <button onClick={handleCancel}>Cancel</button>
    </div>
  )
}

export default CreateAuthor