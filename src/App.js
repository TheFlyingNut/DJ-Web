import 'devextreme/dist/css/dx.light.css';
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/Contact" element={<Contact/>}/>
       <Route path="/Service" element={<Service/>}/>
       <Route path="/About" element={<About/>}/> 
      </Routes>      
    </div>
  );
}
