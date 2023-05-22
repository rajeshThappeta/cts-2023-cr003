import { useState } from "react";
import AddToDo from "../add-todo/AddToDo";
import ToDoList from "../todo-list/ToDoList";
import ToDoCount from "../todo-count/ToDoCount";
import "./Tasks.css";


function Tasks() {
  let [todos, setTodos] = useState([]);

  return (
   
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <AddToDo todos={todos} setTodos={setTodos} />
          </div>
          <div className="col-sm-4">
            <ToDoList todos={todos} />
          </div>
          <div className="col-sm-4">
            <ToDoCount todos={todos} />
          </div>
        </div>
      </div>
    
  );
}

export default Tasks;
