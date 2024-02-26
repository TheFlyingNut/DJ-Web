import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../components/Card'; // Import statement for Card component
import './About.css'; // Additional CSS for customization
import Navbar from "../components/Navbar"; // Import Navbar component
import Hero from '../components/Hero';
import hackathon from "../assets/hackathon.jpg"
import TripData from "../components/TripData";
import Trip1 from "../assets/djsce_trinity_logo.jpg";
import Trip2 from "../assets/csi_logo.png";
import Trip3 from "../assets/iete_logo.jpg";
import "../components/TripStyles.css"

const About = () => {
  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false); // State to control form visibility
  const [textInput, setTextInput] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrlInput(e.target.value);
  };

  const handleImageChange = (e) => {
    setImageInput(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescriptionInput(e.target.value);
  };

  const handleAddCard = () => {
    const newCard = {
      id: cards.length + 1, // You can generate a unique ID here
      image: imageInput,
      description: descriptionInput,
      url: urlInput,
    };

    setCards([...cards, newCard]);

    // Clear input fields after adding card
    setTextInput('');
    setUrlInput('');
    setImageInput('');
    setDescriptionInput('');
    setShowForm(false); // Hide the form after adding a card
  };

  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div>
      <Navbar /> {/* Navbar always appears on top */}
      <Hero
      cName="events"
      heroImg={hackathon}
      title="Events"
      text="All the events, at your fingertips."
      />
      <div className="trip">
      <h1>Recent Events</h1>
      <p>Event Description</p>
      <div className="tripcard">
        <TripData
        image= {Trip1}
        heading = "DJS Trinity" 
        text="Trinity embodies the spirit of D.J. Sanghvi as the most anticipated and cherished annual socio-cultural, sports festival. Trinity is coalescence of innovation and technology, festivities and social responsibilities and competitive streak of sports. The Grandeur of Trinity is sure to attract students not only from Mumbai but from colleges from all around the world."
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

      <div className="container">
        {showForm && (
          <div className="popup">
          <div className="formContainer">
            <span className="closeButton" onClick={() => setShowForm(false)}>
              &times; {/* Cross symbol for close button */}
            </span>
            <div className="formGroup">
              <label htmlFor="text">Text:</label>
              <input
                type="text"
                id="text"
                value={textInput}
                onChange={handleTextChange}
                placeholder="Enter text"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="url">URL:</label>
              <input
                type="text"
                id="url"
                value={urlInput}
                onChange={handleUrlChange}
                placeholder="Enter URL"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="image">Image:</label>
              <input
                type="file" /* Use type="file" for file upload */
                accept="image/*" /* Accept only image files */
                id="image"
                onChange={handleImageChange}
                // value={imageInput} // Remove value attribute for file upload
                placeholder="Upload image or enter URL"
              />
            </div>
            <div className="formGroup">
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                id="description"
                value={descriptionInput}
                onChange={handleDescriptionChange}
                placeholder="Enter description"
              />
            </div>
            <div className="buttonGroup">
              <button onClick={handleAddCard}>Add Card</button>
              <button onClick={() => setShowForm(false)}>Close</button>
            </div>
          </div>
        </div>        
        )}
        <div className="cards">
          {cards.map((card) => (
            <div className="card" key={card.id}>
              <Card
                imgSrc={card.image}
                imgAlt={card.description}
                title={card.description}
                buttonText="Learn More"
                link={card.url}
                onDelete={() => handleDeleteCard(card.id)}
              />
            </div>
          ))}
        </div>
        <button className="addButton" onClick={() => setShowForm(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default About;
