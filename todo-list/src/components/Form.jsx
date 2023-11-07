import React, {useState} from "react"

const Form= props=>{
    const {todoList, setTodoList}=props
    const [todo, setTodo]= useState("")
    

    const handleSubmit = e=>{
        e.preventDefault()
        let newTodoObj={
            text:todo,
            isCompleted: false
        }
        setTodoList([...todoList, newTodoObj])
        console.log(newTodoObj)
        console.log(todoList)
        setTodo("")
    }
    // const handleTodo=e=>{
    //     setTodo(e.target.value)
    // }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Add todo</label>
                <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            </div>
            <button>Submit</button>
        </form>
    )
}
export default Form