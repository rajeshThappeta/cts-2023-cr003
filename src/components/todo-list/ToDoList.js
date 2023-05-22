import {useContext} from 'react'
import './ToDoList.css'
import { todoContextObj } from '../../contexts/todoContext'

function ToDoList() {

   //get state from Store
   let [todos,setToDos]=useContext(todoContextObj)

  return (
    <div>
       <p className="display-6 text-info">List of Tasks</p>
       <ul>
        {
          todos.map((task,index)=><li key={index}>{task}</li>)
        }
       </ul>
    </div>
  )
}

export default ToDoList