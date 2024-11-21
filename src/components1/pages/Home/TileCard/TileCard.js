import React from 'react';
import './TileCArd.css';

const TileCard = ({ title, description, image }) => {
    return (
        <div className="tile-card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default TileCard;
