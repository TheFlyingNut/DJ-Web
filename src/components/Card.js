import React from "react";
import { FaTrash } from "react-icons/fa"; // Importing trash icon from react-icons library
import "./card.css";

export const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  link,
  onDelete,
}) => {
  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      {title && <h1 className="card-title">{title}</h1>}
      {description && <p className="card-description">{description}</p>}
      {buttonText && link && (
        <a href={link} className="card-btn">
          {buttonText}
        </a>
      )}
      {onDelete && ( // Render delete button only if onDelete function is provided
        <button className="delete-btn" onClick={onDelete}>
          <FaTrash /> {/* Trash icon */}
        </button>
      )}
    </div>
  );
};
