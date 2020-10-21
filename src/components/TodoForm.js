import React, { useState } from 'react'
import {v4 as uuid} from 'uuid'
import { TextField, Button } from '@material-ui/core'

const TodoForm = ({addTodo}) => {
    const [todo, setTodo]=useState({
        id:"",
        task:"",
        completed:false
    })

    const handleChange=e=>{
        setTodo({...todo, task:e.target.value})
    }
    const handleSubmit=e=>{
        e.preventDefault()
        if(todo.task.trim()){
            addTodo({...todo, id:uuid()})
            setTodo({...todo, task:""})
        }

    }
    return (
        <form onSubmit={handleSubmit} className="todo-form">
           <TextField 
           label="Task"
           name="task"
           value={todo.task}
           onChange={handleChange}
           type="text"/> 
           <Button type="submit">Submit</Button>
        </form>
    )
}

export default TodoForm
