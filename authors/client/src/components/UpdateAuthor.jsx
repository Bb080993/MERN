import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate} from 'react-router-dom'

const UpdateAuthor = (props) => {
    const { id } = useParams()
    const [name, setName]=useState("")
    const [errors, setErrors]=useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                console.log(res)
                console.log(res.data)
                setName(res.data.author.name)
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit=(e)=>{
        
            e.preventDefault();
            axios.patch(`http://localhost:8000/api/author/${id}`, {name})
                .then(res => {
                    console.log(res);
                    navigate("/"); 
                })
                .catch(err => {
                    console.log( err)
                    setErrors(err.response.data.error.errors);
                    console.log("error1", errors)
                })
        
    }
    const handleCancel=()=>{
        navigate("/")
    }


  return (
    <div>
        <h1>Update Author</h1>
        <Link to={'/'}>Home</Link>
        <form onSubmit={handleSubmit}>
            <label >Author Name:</label>
            <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)} }/>
            { errors.name ? 
                        <p>{errors.name.message}</p>
                        : null
                    }
            <button>Update Author</button>
        </form>
        <button onClick={handleCancel}>Cancel</button>
    </div>
  )
}

export default UpdateAuthor