import taskbar from './TaskBar.module.css'
import {PlusCircle} from 'phosphor-react'

export function TaskBar(){
    return (
        <>
            <form className={taskbar.taskForm}>
                <textarea className={taskbar.taskValueInput} placeholder='Adicione uma nova tarefa' />
                <button  type="submit">Criar <PlusCircle/></button>
            </form>
        </>
    )
}