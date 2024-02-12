import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import React, { useState } from 'react';
import CardItem from "../components/CardItem";
import './About.css'

const About = () => {
  const [cards, setCards] = useState([]);
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
  };

  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="container">
      <div className="form-container">
        <input type="text" placeholder="Enter text" value={textInput} onChange={handleTextChange} />
        <input type="text" placeholder="Enter URL" value={urlInput} onChange={handleUrlChange} />
        <input type="text" placeholder="Enter image URL" value={imageInput} onChange={handleImageChange} />
        <input type="text" placeholder="Enter Description" value={descriptionInput} onChange={handleDescriptionChange} />
        <button onClick={handleAddCard}>Add Card</button>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <CardItem
            key={card.id}
            id={card.id}
            image={card.image}
            description={card.description}
            url={card.url}
            onDelete={handleDeleteCard}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
