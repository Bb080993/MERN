import React, {useState} from "react"

const Display= props=>{
    const{todoList, setTodoList}=props

    // completed w/TA help in dojohall
    const handleCheckbox=(index)=>{
        
        let updatedTodoArr = [ ...todoList]
        todoList[index].isCompleted =  !todoList[index].isCompleted
        console.log(todoList[index].isCompleted)
        setTodoList(updatedTodoArr)
        
    }

    const handleDelete=(e, idxFromFormSubmit)=>{
        e.preventDefault()
        let newTodoList=todoList.filter(  (todo, indexFromFilter)=> {return idxFromFormSubmit!=indexFromFilter})
        setTodoList(newTodoList)
    }
    return(
        todoList.map( (oneTodo, index)=> {
            return <div key={index} style={{display: "inline-block", margin:10}}>
                {/* ternary operator with strikethrough */}
                        <p style={{textDecoration: oneTodo.isCompleted ? "line-through": "None"}}>{oneTodo.text}</p>
                        <input checked={oneTodo.isCompleted} type="checkbox"  onChange={()=>handleCheckbox(index)}/>
                        <form onSubmit={(e)=>handleDelete(e, index)}>
                            {/* maybe pass in todo */}
                            <button>Delete</button>
                        </form>
                    </div>})
    )
}

export default Display