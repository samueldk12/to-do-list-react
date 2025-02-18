import { useState } from 'react'
import { Header } from './components/Header'
import { Task } from './components/Task'
import { TaskBar } from './components/TaskBar'

import app from './App.module.css'

import './global.css'

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <>
      <Header/>
      <div className={app.taskBody}>
        <TaskBar/>
        <div className={app.textQuanti}>
          <strong className={app.createdTextTasks}>Tarefas criadas <strong className={app.qtdCreatedTasks}>{tasks.length}</strong></strong>
          <strong className={app.qtdTextFinishedTasks}>Concluídas <strong className={app.qtdCreatedTasks}>0 de {tasks.length}</strong></strong>
        </div>
        <div className={app.tasks}>
            {
              tasks.map((task)=>{
                return <Task/>
              })
            }
        </div>
      </div>
    </>
  )
}

export default App
