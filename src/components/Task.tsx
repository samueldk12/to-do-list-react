import { ChangeEvent, useState } from 'react';
import task from './Task.module.css'
import {Trash} from 'phosphor-react'

interface TaskProps {
    content: string;
    isCompleted: boolean;
    id: string;
    onDeleteFunction: (id:string)=>void;
    onCompletedFunction: (id: string, isFinished: boolean)=>void;
}

export function Task({content,id, onCompletedFunction, onDeleteFunction,isCompleted = false}: TaskProps){
    const [isFinished, setIsFinished] = useState(true)

    function handleOnDeleteButton(){
        onDeleteFunction(id, )
    }

    function handleOnCompletedFunction(event: ChangeEvent<HTMLInputElement>){
        console.log(event.target.value)
        setIsFinished(!isFinished)
        onCompletedFunction(id, isFinished)
    }
    return (
        <>
            <div className={task.body}>
                <label className={task.isFinished}>
                    <input value={isFinished} onChange={handleOnCompletedFunction} type="checkbox" checked={isCompleted}/>
                    <span ></span>
                </label>
                <p className={task.content}>{content}</p>
                <button className={task.deleteButton} onClick={handleOnDeleteButton}><Trash className={task.trash}/></button>
            </div>
        </>
    )
}