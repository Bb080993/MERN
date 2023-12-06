import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate} from 'react-router-dom'

const AllAuthors = (props) => {
  const navigate=useNavigate()
  const {authors, setAuthors}=props

    const removeFromDom=(authorId)=>{
      setAuthors(authors.filter(author=>author._id != authorId))
    }

    useEffect(()=>{
      axios.get("http://localhost:8000/api/authors")
      .then(res=>{
          console.log(res)
          setAuthors(res.data.authors)
      })
      .catch(err=>{
          console.log(err)
      })
  }, []
  )
    const handleDelete=(_id)=>{
        axios.delete(`http://localhost:8000/api/author/${_id}`)
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
      <h1>Favorite Authors</h1>
      <Link to={"/create"}>Create an author</Link>
      <h2>Authors and Actions</h2>

        {
          authors.map((author)=>(
            <div key={author._id}>
              
                  <p >{author.name}</p>
                  <p ><Link to={`/update/${author._id}`}>Update Author</Link>
                      <button onClick={(e)=>handleDelete(author._id)}>Delete</button></p>
            
            </div>
))}

       
          
    </div>
  
)}

export default AllAuthors