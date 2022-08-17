
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import StudyMaterials from './components/StudyMaterials';
import Events from './components/Events';
import CourseDetalis from './components/CourseDetalis';
import Signup from './components/Signup';
import './styles/style.scss'
import { Navigate } from 'react-router';


import Gallery from './components/Gallery';
import { useEffect, useState } from 'react';

function App() {
  const [admin, setAdmin] = useState(null);

  useEffect(()=>{
    const a = localStorage.getItem("admin");
    a && JSON.parse(a) ? setAdmin(true) : setAdmin(false)
  },[])

  useEffect(()=>{
    localStorage.setItem("admin",admin);
  },[admin]);

  return (
    <div className="App">
      
      
      

      <Routes>
        <Route path="/" element={<Signup setAdmin={setAdmin}/>} />
        {
          admin && (
            <>
            <Route path="/home" element={<Home/>} />
            <Route path="/studymaterials" element={<StudyMaterials/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/coursedetails" element={<CourseDetalis/>} />
            <Route path="/gallery" element={<Gallery/>} />
            </>
          )
        }
        <Route path="*" element={<Navigate to={admin ? "/home" : "/"} /> } />
      </Routes>
     
    </div>
  );
}

export default App;
