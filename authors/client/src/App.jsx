import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import {BrowserRouter, Routes, Route, Link, useParams, useNavigate} from 'react-router-dom'
import AllAuthors from './components/AllAuthors'
import CreateAuthor from './components/CreateAuthor'
import UpdateAuthor from './components/UpdateAuthor'


function App() {
  const [authors, setAuthors]=useState([])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllAuthors authors={authors} setAuthors={setAuthors}/>}></Route>
          <Route path="/create" element={<CreateAuthor authors={authors} setAuthors={setAuthors}/>}/>
          <Route path="/update/:id" element={<UpdateAuthor />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
