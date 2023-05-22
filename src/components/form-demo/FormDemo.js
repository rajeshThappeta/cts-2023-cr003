import "./FormDemo.css";
import { useState } from "react";

function FormDemo() {
  
  let jsTech=['react','angular','nodejs'];
  let javaTech=['servlets','jsp','spring'];

  let [userTechList,setUserTechList]=useState([])

  function selectedTechnology(e){
    console.log(e.target.value)
    if(e.target.value==='javascript'){
      setUserTechList(jsTech)
    }
    else{
      setUserTechList(javaTech)
    }
  }
 

  //when form is submitted
  function handleSubmit(event) {
    //stop page reload
    event.preventDefault();
  
  }

  //when unsername field id modified
  function handleUserData(event) {
   
  }

  return (
    <div className="container">
      <h1 className="text-center text-info">Form Demo</h1>
      {/* form */}
      <form onSubmit={handleSubmit}>
        <label>Select a technology</label>
        {/* radios */}
        <div className="mb-3">
          {/* javascript */}
            <div className="form-check">
              <input type="radio"   
                    name="tech" 
                    id="javascript" 
                    className="form-check-input" 
                    value="javascript"
                    onChange={selectedTechnology} />
              <label htmlFor="javascript" className="form-check-label">JavaScript</label>
            </div>
           {/* java*/}
           <div className="form-check">
              <input type="radio"   
                    name="tech" 
                    id="java" 
                    className="form-check-input" 
                    value="java" 
                    onChange={selectedTechnology}/>
              <label htmlFor="java" className="form-check-label">Java</label>
            </div>

            {/* select */}
            <div className="mb-3">
              <select name="selected-tech" className="form-select">
                  {
                    userTechList.map((tech,index)=><option value={tech} key={index}>{tech}</option>)
                  }
              </select>
            </div>
        </div>

        {/* submit button */}
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormDemo;
