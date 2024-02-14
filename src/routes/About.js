import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CardItem from "../components/CardItem";
import './About.css'; // Additional CSS for customization
import Navbar from "../components/Navbar"; // Import Navbar component

const About = () => {
  const [cards, setCards] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [showForm, setShowForm] = useState(false); // State to control form visibility

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
      <div className="container">
        {showForm && (
          <div className="popup">
          <div className="formContainer">
            <div className="formGroup">
              <label htmlFor="text">Text:</label>
              <input type="text" id="text" value={textInput} onChange={handleTextChange} />
            </div>
            <div className="formGroup">
              <label htmlFor="url">URL:</label>
              <input type="text" id="url" value={urlInput} onChange={handleUrlChange} />
            </div>
            <div className="formGroup">
              <label htmlFor="image">Image URL:</label>
              <input type="text" id="image" value={imageInput} onChange={handleImageChange} />
            </div>
            <div className="formGroup">
              <label htmlFor="description">Description:</label>
              <input type="text" id="description" value={descriptionInput} onChange={handleDescriptionChange} />
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
            <CardItem
              id={card.id}
              image={card.image}
              description={card.description}
              url={card.url}
              onDelete={handleDeleteCard}
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
