import {useForm, type SubmitHandler} from 'react-hook-form'
import './App.css'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"


const FormInputSchema = yup.object({
  name: yup.string().required("Name is required ").min(4, "Name must be at least 4 characters"),
  email: yup.string().email("Invalid email 💀").required("Email is required"),
  course: yup.string().required("Please select a course ")
})


type FormInput ={
  name:string;
  email:string;
  course:string;
}

function App() {
  const {register,handleSubmit, formState:{errors},reset} = useForm<FormInput>({resolver:yupResolver(FormInputSchema)});


  const onSubmit:SubmitHandler<FormInput> = (data) =>{

    alert(`Registration Successfull! 🥳\nName: ${data.name}\nEmail: ${data.email}`);
    reset() //Reset your form fields
    
  }

  return (
    <>
      <h2>Class Registration Form</h2>
      {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" */ }
      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 400, margin: "auto" }}>
        <div>
          <label htmlFor="Name">Name</label> <br />
          {/* register your input into the hook by invoking the "register" function */}
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("name",{required: true,})} style={{padding:'8px'}}/>
          {/* errors will return when field validation fails  */}
          {errors.name && <span style={{ color: "red",marginLeft:"4px" }}>{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="email">Email</label><br />
          <input type="email" {...register("email",{required:true })} style={{padding:'8px'}}/>
          {errors.email && <span style={{ color: "red", marginLeft:"4px" }}>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="course">Course</label> <br />
          <select {...register("course",{required:true})} style={{padding:'8px'}} >
            <option value="">Select...</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Law">Law</option>
            <option value="Education">Education</option>
          </select>
          {errors.course && <span style={{ color: "red" }}>{errors.course.message}</span>}
        </div>
        

        <button type='submit' style={{ marginTop: 12 }}>Register</button>

      </form>
    </>
  )
}

export default App
