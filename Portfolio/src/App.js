import Contact from './Component/Conatact';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import About from './Component/About';

import './index.css';
import Projects from './Component/Project';

export default function App() {
  
  return (
    <div className='  '>
     
    <Navbar/> 
     <Home/>
    <About/>
    <Projects/>
     <Contact/>
   
        </div>
  )  
}   
