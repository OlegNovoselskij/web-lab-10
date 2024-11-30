import React from "react";
import TileCard from '../TileCard/TileCard';
import './TileCards.css';

function TileCards({ tiles }) {
    return (
        <div>
            <div className="tile-container">
                {tiles.map(tile => (
                    <TileCard title={tile.name} description={tile.description} image={tile.imageUrl} />
                ))}
            </div>
        </div>
    );
}

export default TileCards;
