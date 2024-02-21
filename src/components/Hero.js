import "./HeroStyles.css";
import college from '../assets/Clg.jpg'

function Hero(props) {
  return (
    <>
      <div className="hero">
        <img src={college} alt="Img"/>
        <h1>Your Code Here</h1>
      </div>
    </>
  );
}

export default Hero;
