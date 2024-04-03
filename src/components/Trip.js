import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/djsce_trinity_logo.jpg";
import Trip2 from "../assets/csi_logo.png";
import Trip3 from "../assets/iete_logo.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Exents</h1>
      <p>Event Description</p>
      <div className="tripcard">
        <TripData
        image= {Trip1}
        heading = "DJS Trinity" 
        text="lund. Trinity is coalescence of innovation and technology, festivities and social responsibilities and competitive streak of sports. The Grandeur of Trinity is sure to attract students not only from Mumbai but from colleges from all around the world."
        />
        <TripData
        image= {Trip2}
        heading = "DJS CSI" 
        text="Trinity embodies the spirit of D.J. Sanghvi as the most anticipated and cherished annual socio-cultural, sports festival. Trinity is coalescence of innovation and technology, festivities and social responsibilities and competitive streak of sports. The Grandeur of Trinity is sure to attract students not only from Mumbai but from colleges from all around the world."
        />
        <TripData
        image= {Trip3}
        heading = "DJS IETE" 
        text="Trinity embodies the spirit of D.J. Sanghvi as the most anticipated and cherished annual socio-cultural, sports festival. Trinity is coalescence of innovation and technology, festivities and social responsibilities and competitive streak of sports. The Grandeur of Trinity is sure to attract students not only from Mumbai but from colleges from all around the world."
        />
      </div>
    </div>
  );
}

export default Trip;
