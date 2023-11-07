import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Display from './components/Display'

function App() {
  
  const [todoList, setTodoList]=useState([])

  return (
    <>
     
     <Form todoList={todoList} setTodoList={setTodoList}/>
     <Display todoList={todoList} setTodoList={setTodoList}/>
    </>
  )
}

export default App
