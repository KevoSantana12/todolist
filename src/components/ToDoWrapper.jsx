import React, { useEffect, useState } from 'react'
import Form from './ToDoForm'
import ToDosList from './ToDo'
import { v4 as uuidv4 } from 'uuid';
uuidv4();


const ToDoWrapper = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log(todos)
  }

  useEffect(() => {
    console.log(todos)
  }, [todos]) 

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done</h1>
      <Form addTodo={addTodo}/>

      {todos.map((todo, index)=>(
        <ToDosList task={todo} key={index} toggleComplete={toggleComplete}/>
        ))
      }
    </div>
  )
}

export default ToDoWrapper
