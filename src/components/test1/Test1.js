import "./Test1.css";
import { useState } from "react";

function Test1() {
  //When state is changed, the component need to be rerendered
  let [user, setUser] = useState({
    username: "ravi",
    age: 20,
    city: "hyd",
  });


  //marks state
  let [marks,setMarks]=useState([90,89])

  function changeUser() {
    setUser({...user,username:'kiran',city:'chennai'}) //{  username: "ravi",age: 20,city: "hyd",username:'kiran'}
  }


  function changeMarks(){
    //add new marks
   // marks.push(78); X
   setMarks([...marks,78])
   setMarks([65,...marks])
   //delete
   //marks.pop();X
   let result= marks.filter(()=>{})
   setMarks(result)

  }

  return (
    <div>
      <h1>Username : {user.username}</h1>
      <h1>Age : {user.age}</h1>
      <h1>City : {user.city}</h1>
      <button className="btn btn-success" onClick={changeUser}>
        Change data
      </button>
    </div>
  );
}

export default Test1;



