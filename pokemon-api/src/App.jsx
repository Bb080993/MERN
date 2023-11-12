import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const[characterList, setCharacterList]=useState([])

  useEffect( ()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    .then(res=>{setCharacterList( res.data.results)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  return (
    <>
      <div className="pokemon">

      {characterList.map( (character, idx) => { return (<ul key={idx}><li>{character.name}</li></ul>) 
        })}

      </div>
    </>
  )
}

export default App
