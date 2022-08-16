import React from 'react'
import { useNavigate } from 'react-router'
import { useState } from 'react';

const Signup = ({setAdmin}) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    userName : "",
    password: "",
  })

  const handleChange = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      })
  }

  const checkUser = () =>{
    if(values.userName === "admin" && values.password === "1234"){
      setAdmin(true)
      navigate('/home')
    }
  }
  return (
<>
<div className="signup-container">
         <div className="form-container">
             <form action="">
                 <div className="input-field">
                 <label htmlFor="userName" > userName</label><br />
                 <input className="input-fields" type="text" placeholder="Jhon sina" name="userName" value={values.userName} onChange={handleChange}/><br />
                 <label   htmlFor="password">Password</label><br />
                 <input className="input-fields" type="password" name="password" value={values.password} onChange={handleChange}/><br />
                 </div>
                 <div className="button">

                 <input type="submit" onClick={checkUser} />
                 </div>
             </form>
         </div>
        
     </div>
</>   
  )
}

export default Signup