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
    <div>

    <Navbar/> 
     <Home/>
    <About/>
    <Experience/> 
     <Contact/>
   
        </div>
  )  
}   
