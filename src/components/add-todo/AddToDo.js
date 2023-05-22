import {useState,useContext} from 'react'
import './AddToDo.css'
import { todoContextObj } from '../../contexts/todoContext'

function AddToDo() {


  //get state from Store
  let [todos,setToDos]=useContext(todoContextObj)

  let [task,setTask]=useState("")
 
  //state change handler function
  function handleAddTodo(e){
    setTask(e.target.value)
    
  }
  //form submit function
  function handleSubmit(e){
    e.preventDefault();
    setToDos([...todos,task])
    
  }


  return (
    <div className='text-center'>
      <p className="display-6 text-info">Add New Task</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" id="" className="form-control mb-3" onChange={handleAddTodo} />
        <button className="btn btn-success" type='submit'>Add task</button>
      </form>
    </div>


  )
}

export default AddToDo