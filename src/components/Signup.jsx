import React from 'react'

const Signup = () => {
  return (
<>
<div className="signup-container">
         <div className="form-container">
             <form action="">
                 <div className="input-field">
                 <label htmlFor="userName"> userName</label><br />
                 <input className="input-fields" type="text" placeholder="Jhon sina" /><br />
                 <label   htmlFor="password">Password</label><br />
                 <input className="input-fields" type="password" /><br />
                 </div>
                 <div className="button">

                 <input type="submit" />
                 </div>
             </form>
         </div>
        
     </div>
</>   
  )
}

export default Signup