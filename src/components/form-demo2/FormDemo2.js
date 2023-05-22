import {useState} from 'react'
import './FormDemo2.css'

function FormDemo2() {

    let [user,setUser]=useState({
        username:"",
        email:"",
        skills:[
            {name:'singing',checked:false},
            {name:'dancing',checked:false},
            {name:'eating',checked:false},
            {name:'running',checked:false},
          
           
        ]
    })


    //error state
    let [validationError,setValidationError]=useState({})

    //validation function
    function validateUserInput(user){
        let err={};
        //min two skills need to be selected
        let result=user.skills.filter(userSkill=>userSkill.checked===true)
        
        if(result.length<2){
            err.skills="Min two skills need to be selected"
        }
        return err;
    }



    //handle user
    function handleUser(e,index){
        let name=e.target.name;

        if(e.target.type==='checkbox'){
            //create copy of skills array
            let copySkills=[...user.skills];
            //make changes
            copySkills[index].checked= ! copySkills[index].checked;
            //update state
            setUser({...user,skills:copySkills})

        }
        else{

            setUser({...user,[name]:e.target.value})
        }


    }



    //handle submit
    function handleSubmit(e){
        e.preventDefault()

        let err=validateUserInput(user);
        if(Object.keys(err).length===0){
            console.log(user)
            setValidationError({})
        }else{
            setValidationError(err)
        }
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            {/* username */}
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" name="username" id="username" className="form-control" onChange={handleUser} />
            </div>
            {/* email */}
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" id="email" className="form-control" onChange={handleUser} />
            </div>
            {/* skills */}
            <div className="mb-3">
               {
                 user.skills.map((userSkillObj,index)=><div className='form-check' key={index} >
                    <input type="checkbox" 
                            name={userSkillObj.name} 
                            id={userSkillObj.name}  
                            className='form-check-input' 
                            onChange={(e)=>handleUser(e,index)}/>
                    <label className="form-check-label" htmlFor={userSkillObj.name}>{userSkillObj.name}</label>
                 </div>)
                 
               }
               {validationError.skills&&<p className='text-danger'>{validationError.skills}</p>}
            </div>

            {/* submit button */}
            <button className="btn btn-success" type='submit'>Register</button>
        </form>
    </div>
  )
}

export default FormDemo2