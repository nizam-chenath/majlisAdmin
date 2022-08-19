import React from 'react'
import Navbar from './navbar/Navbar'
import { useState } from 'react'

const CourseDetalis = () => {

  const [outcome, setOutcome] = useState("")
  const [discription, setDiscription] = useState("")
  const [course, setCourse] = useState("")
  const [fee, setFee] = useState()
  const [image, setImage] = useState("")
  return (<div>
    <Navbar />
    

    <div className="course-container">
      <form action="">
        <div className="form">

          {/* <label htmlFor="department">Department :</label>
          <select name="department" id="" className="dropdown-field">
            <option value="cs">cs</option>
            <option value="commerce">commerce</option>
            <option value="science">science</option>
          </select>
             <br /> */}
      
          <input type="radio" name="ug/pg" value="ug" />UG <input type="radio" name="ug/pg" value="pg" />PG <br />

          <label htmlFor="coursename">CourseName :</label>
          <input className="text-input" type="text" placeholder="Bsc Physics" value={course} onChange={(e) => setCourse(e.target.value)}/><br />

          <label htmlFor="fee">Fee :</label>
          <input className="text-input" type="text" placeholder="18750/-" value={fee} onChange={(e) => setFee(e.target.value)}/><br />

          <label htmlFor="discription">Discription :</label>
          <input className="text-input" type="text" value={discription} onChange={(e) => setDiscription(e.target.value)}/><br />

          <label htmlFor="outcome">Programm outcome :</label>
          <input className="text-input" type="text"  value={outcome} onChange={(e)=> setOutcome(e.target.value)}/> <br />
          Upload image
          <input className="image-input" type="file" accept="image/*" value={image} onChange={(e) => setImage(e.target.value)}/><br />
          <div className="button">

          <button type="submit">send</button>
          </div>

        </div>
      </form>
    </div>
  </div>
  )
}

export default CourseDetalis