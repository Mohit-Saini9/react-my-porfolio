import Contact from './Component/Conatact';
 import Experience from './Component/Experience';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import About from './Component/About';
// import BackImage from './ssets/BackImage.png';
//  import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './index.css';

export default function App() {
  
  return (
    <>
  
    <Navbar/>
  
    {/* <Router>
      <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/experince'element={ <Experience/>}/>
      <Route path='/contact'element={<Contact/>}/>
      </Routes>
    </Router> */}
     
     <Home/>
    <About/>
    <Experience/> 
     <Contact/>
   
        </>
  )  
}   
