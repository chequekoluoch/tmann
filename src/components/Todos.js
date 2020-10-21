import React from 'react'
import { Checkbox, IconButton, Typography, ListItem } from '@material-ui/core'
import { CloseIcon } from '@material-ui/icons/Close'
const Todos = ({ todo, removeTodo, toggleComplete}) => {
    return (
       
        <ListItem style={{display:'flex'}}>
        <Checkbox
        checked={todo.completed} 
        onClick={()=>toggleComplete(todo.id)}
        />
            <Typography
            variant="body1"
            style={{
                textDecoration:todo.completed ? "line-through":null
            }}
            >{todo.task}</Typography>
        <IconButton
        onClick={()=>removeTodo(todo.id)}>
            <CloseIcon />
            </IconButton>
        </ListItem>
       
    )
}

export default Todos
