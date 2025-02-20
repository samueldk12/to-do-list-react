import { ChangeEvent, useState } from 'react'
import { Header } from './components/Header'
import { Task } from './components/Task'
import { PlusCircle } from 'phosphor-react'
import { v4 as uuid } from 'uuid'

import app from './App.module.css'

import './global.css'

interface Task{
  isFinished: boolean,
  content: string,
  id: string
}

function App() {
  const [newTaskText, setNewTaskText] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])
  const completedTasks = tasks.filter(task => task.isFinished).length;

  function handleChangeTaskText(event: ChangeEvent<HTMLTextAreaElement>){
    setNewTaskText(event.target.value)
  }

  function handleCompleteTask(id: string, isCompleted: boolean){

    setTasks(tasks.map(task => {
        if(task.id == id){
          task.isFinished = isCompleted
        }
        return task
     }))
  }

  function handleDeleteTask(id: string){
        const taskIdDeletedOne = tasks.filter(task => {
            return id != task.id
        })

        setTasks(taskIdDeletedOne)
  }

  function handleCreateTask(event: ChangeEvent<FormDataEvent>){
    event.preventDefault()
    const newTask: Task = { 
      content: newTaskText,
      isFinished: false,
      id: uuid()
    }
    setTasks((prevTasks) => [...prevTasks, newTask])
    setNewTaskText('')
  }

  return (
    <>
      <Header/>
      <div className={app.taskBody}>
        <div className={app.taskBar}>
            <form onSubmit={handleCreateTask} className={app.taskForm}>
                <textarea onChange={handleChangeTaskText} value={newTaskText} className={app.taskValueInput} placeholder='Adicione uma nova tarefa' />
                <button  type="submit">Criar <PlusCircle/></button>
            </form>
        </div>
        <div className={app.textQuanti}>
          <strong className={app.createdTextTasks}>
            Tarefas criadas <strong className={app.qtdCreatedTasks}>{tasks.length}</strong>
          </strong>
          <strong className={app.qtdTextFinishedTasks}>
            Concluídas <strong className={app.qtdCreatedTasks}>{completedTasks} de {tasks.length}</strong>
          </strong>
        </div>
        <div>
          
        </div>
        <div className={app.tasks}>
            {tasks.map((task, index) => (
              <Task id={task.id} onDeleteFunction={handleDeleteTask} onCompletedFunction={handleCompleteTask} key={index} content={task.content} isCompleted={task.isFinished} />
            ))}
        </div>
      </div>
    </>
  )
}

export default App
 