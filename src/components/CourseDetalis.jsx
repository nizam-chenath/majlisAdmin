import React from 'react'
import Navbar from './navbar/Navbar'

const CourseDetalis = () => {
  return (<div>
        <Navbar/>

    <div className="course-container">
          <form action="">
        <div className="form">

          <label htmlFor="department">Department :</label>
          <input className="text-input" type="text" /> <br />
          <label htmlFor="coursename">CourseName :</label>
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