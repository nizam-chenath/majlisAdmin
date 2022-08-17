import React from 'react'
import Navbar from './navbar/Navbar'

const StudyMaterials = () => {
  return (
    <div>
      <Navbar/>

      <div className="materials-container">
      <form action="">
        <div className="form">

          <label htmlFor="coursename">Program :</label>
          <input className="text-input" type="text" /><br />

          <label htmlFor="semester">Semester :</label>
          <select name="semester" id="" className="dropdown-field">
            <option value="semester 1">Semester 1</option>
            <option value="semester 2">Semester 2</option>
            <option value="semester 3">Semester 3</option>
            <option value="semester 4">Semester 4</option>
            <option value="semester 5">Semester 5</option>
            <option value="semester 6">Semester 6</option>
          </select> 
          <br />
        
          <label htmlFor="coursename">Subject :</label>
          <input className="text-input" type="text" /><br />


          Upload Study materials
          <input className="image-input" type="file" /><br />
          <div className="button">

            <input type="submit" value="submit" />
          </div>

        </div>
      </form>
    </div>
    </div>
  )
}

export default StudyMaterials