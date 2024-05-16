import { useState } from 'react'
import Wrapper from './components/ToDoWrapper'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Wrapper/>
    </>
  )
}

export default App
