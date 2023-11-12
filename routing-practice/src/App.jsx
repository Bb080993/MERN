import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate, useParams} from "react-router-dom"
import './App.css'
import Home from "./components/Home"
import Param from "./components/Param"

function App() {
  

  return (
    <>
      <BrowserRouter>
          
        <Routes>
          <Route path="/home" element={<Home/>}/>
          {/* element must be wrapped in </> */}
          <Route path="/:word" element={<Param/>}/>
          <Route path="/:word/:color/:colorTwo" element={<Param/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
