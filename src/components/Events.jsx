import React, { useState } from 'react'
import Navbar from './navbar/Navbar'

const Events = () => {
  const [details, setDetails] = useState("")
  const [image, setImage] = useState()
  return (
    <div>
      <Navbar/>

    <div className="event-container">
             <form action="">
        <div className="form">

          <label htmlFor="department">Event Details :</label>
          <input className="text-input" type="text" value={details} onChange={(e) => setDetails(e.target.value)}/> <br />
          
          Upload image 
          <input className="image-input" type="file" accept="image/*" value={image} onChange={(e) => setImage(e.target.value)}/><br />
          <div className="button">

        <input type="submit" value="submit" />
          </div>

        </div>
          </form>
    </div>
    </div>
  )
}

export default Events