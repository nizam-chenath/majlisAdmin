import React from 'react'
import Navbar from './navbar/Navbar'

const Events = () => {
  return (
    <div>
      <Navbar/>

    <div className="event-container">
             <form action="">
        <div className="form">

          <label htmlFor="department">Event Details :</label>
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

export default Events