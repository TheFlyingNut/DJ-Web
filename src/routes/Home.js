import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import '../styles.css'; 
import { Routes } from "react-router-dom";

function Home() {
  return (
    <>
    <Navbar/>
    <Hero />  
    </>
  );
}

export default Home;
