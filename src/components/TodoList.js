import React from 'react'
import Todos from './Todos'
import { List } from '@material-ui/core'

const TodoList = ({ todos, removeTodo, toggleComplete}) => {
    return (
        <List>
         {todos.map(todo=>(
             <Todos key={todo.id} todo={todo} removeTodo={removeTodo} toggleComplete={toggleComplete}/>
         ))}   
        </List>
    )
}

export default TodoList
