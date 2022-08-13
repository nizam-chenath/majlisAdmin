
import {Route, Routes} from 'react-router-dom'
import Home from './components/home';
import StudyMaterials from './components/StudyMaterials';
import Events from './components/Events';
import CourseDetalis from './components/CourseDetalis';
import Signup from './components/Signup';
import './styles/style.scss'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Signup/>} />
        <Route path="/studymaterials" element={<StudyMaterials/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/coursedetails" element={<CourseDetalis/>} />
      </Routes>
     
    </div>
  );
}

export default App;
