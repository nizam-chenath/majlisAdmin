import React from 'react'
import Navbar from './navbar/Navbar'

const CourseDetalis = () => {
  return (<div>
    <Navbar />

    <div className="course-container">
      <form action="">
        <div className="form">

          <label htmlFor="department">Department :</label>
          <select name="department" id="" className="dropdown-field">
            <option value="cs">cs</option>
            <option value="commerce">commerce</option>
            <option value="science">science</option>
          </select>
             <br />
      
          <input type="radio" name="ug/pg" value="ug" />UG <input type="radio" name="ug/pg" value="pg" />PG <br />

          <label htmlFor="coursename">CourseName :</label>
          <input className="text-input" type="text" placeholder="Bsc Physics" /><br />

          <label htmlFor="fee">Fee :</label>
          <input className="text-input" type="text" placeholder="18750/-"/><br />

          <label htmlFor="discription">Discription :</label>
          <input className="text-input" type="text" /><br />

          <label htmlFor="outcome">Programm outcome :</label>
          <input className="text-input" type="text" /> <br />
          Upload image
          <input className="image-input" type="file" accept="image/*" /><br />
          <div className="button">

            <input type="submit" value="submit" />
          </div>

        </div>
      </form>
    </div>
  </div>
  )
}

export default CourseDetalis