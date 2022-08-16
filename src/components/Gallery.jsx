import React from 'react'
import Navbar from './navbar/Navbar'

const Gallery = () => {
  return (
      <div>
          <Navbar/>

    <div className="gallery-container">     
               <form action="">
    <div className="form">

  
      
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

export default Gallery