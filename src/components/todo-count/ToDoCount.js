import {useContext} from 'react'

import { todoContextObj } from '../../contexts/todoContext'
import './ToDoCount.css'

function ToDoCount() {


    //get state from Store
    let [todos,setToDos]=useContext(todoContextObj)

  return (
    <div>
       <p className="display-6 text-info">No of tasks</p>
       <h1>{todos.length}</h1>
    </div>
  )
}

export default ToDoCount