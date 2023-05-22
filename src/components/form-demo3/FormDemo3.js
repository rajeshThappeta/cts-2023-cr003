import "./FormDemo3.css";
import { useForm } from "react-hook-form";

function FormDemo3() {
  let { register, handleSubmit,formState:{errors} } = useForm();

  //form submit
  function onSubmit(userObj) {
    console.log(userObj);
  }



  return (
    <div>
      <p className="display-3 text-center text-info">
        Form using react-hook-form
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-labek">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            {...register("username",{required:"Username is required",minLength:4,maxLength:6})}
          />
          {/* validation error messages */}
          {errors.username?.type==='required' && <p className="text-danger">{errors.username.message}</p>}
          {errors.username?.type==='minLength' && <p className="text-danger">Min length should be 4</p>}
          {errors.username?.type==='maxLength' && <p className="text-danger">Max length should be 6</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-labek">
            Date of birth
          </label>
          <input
            type="date"
            id="dob"
            className="form-control"
            {...register("dob",{required:true})}
          />
            {/* validation error messages */}
            {errors.dob?.type==='required' && <p className="text-danger">Date of birth is required</p>}
         
        </div>


        {/* age */}
        <div className="mb-3">
          <label htmlFor="age" className="form-labek">
            Age
          </label>
          <input
            type="number"
            id="age"
            className="form-control"
            {...register("age",{required:true,min:15,max:30})}
          />
            {/* validation error messages */}
            {errors.age?.type==='required' && <p className="text-danger">Age is required</p>}
            {errors.age?.type==='min' && <p className="text-danger">Age shd be greater than 15</p>}
            {errors.age?.type==='max' && <p className="text-danger">Age shd be less than  30</p>}
         
        </div>

        {/* submit button */}
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormDemo3;
