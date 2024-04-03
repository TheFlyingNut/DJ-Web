import 'devextreme/dist/css/dx.light.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Attendance from './routes/Attendance';
import Hero from './components/Hero';
import Signup from "./routes/Signup"
import Navbar from "./components/Navbar";
import { BackgroundColor } from 'devextreme-react/cjs/chart';

export default function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/Contact" element={<Contact/>}/>
       <Route path="/Attendance" element={<Attendance/>}/>
       <Route path="/About" element={<About/>}/> 
       <Route path="/Signup" element={<Signup/>}/>
      </Routes>      
    </div>
  );
}
