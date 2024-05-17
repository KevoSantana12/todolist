import React from 'react'
import { useState } from 'react'


const EditToDoForm = ({editTodo, task}) => {
  const [value, setTask] = useState(task.task)

  const handledChangeTask = (event) => {
    setTask(event.target.value)
  }

  const saveTask = (event) => {
    event.preventDefault();
    editTodo(value, task.id)
  }

  return (
    <form className='ToDoForm' onSubmit={saveTask}>
      <input type='text' className='todo-input' placeholder='Update task' value={value} onChange={handledChangeTask}/>
      <button type='submit' className='todo-btn' >Update Task</button>
    </form>
  )
}

export default EditToDoForm
