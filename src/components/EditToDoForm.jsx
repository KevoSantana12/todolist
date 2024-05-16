import React from 'react'
import { useState } from 'react'


const EditToDoForm = ({editTodo, taskid}) => {
  const [task, setTask] = useState(taskid.task)

  const handledChangeTask = (event) => {
    setTask(event.target.value)
  }

  const saveTask = (event) => {
    event.preventDefault();
    editTodo(task, taskid.id)
    setTask("")
  }

  return (
    <form className='ToDoForm' onSubmit={saveTask}>
      <input type='text' className='todo-input' placeholder='Update task' value={task} onChange={handledChangeTask}/>
      <button type='submit' className='todo-btn' >Update Task</button>
    </form>
  )
}

export default EditToDoForm
