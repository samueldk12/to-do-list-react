import { useState } from 'react'
import { Header } from './components/Header'
import { Task } from './components/Task'

import './global.css'

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <>
      <Header/>
      <div>
        {
          tasks.map((task)=>{
            return <Task/>
          })
        }
      </div>
    </>
  )
}

export default App
