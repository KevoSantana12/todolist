import React from 'react'
import { useState } from 'react'


const ToDoForm = ({addTodo}) => {
  const [task, setTask] = useState("")

  const handledChangeTask = (event) => {
    setTask(event.target.value)
  }

  const saveTask = (event) => {
    event.preventDefault();
    addTodo(task)
    setTask("")
  }

  return (
    <form className='ToDoForm' onSubmit={saveTask}>
      <input type='text' className='todo-input' placeholder='What is the task today?' value={task} onChange={handledChangeTask}/>
      <button type='submit' className='todo-btn' >Add Task</button>
    </form>
  )
}

export default ToDoForm
