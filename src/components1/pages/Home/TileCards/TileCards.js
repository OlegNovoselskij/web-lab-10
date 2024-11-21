import React from "react";
import TileCard from '../TileCard/TileCard';

function TileCards({ tiles }) {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {tiles.map(tile => (
                    <TileCard title={tile.name} description={tile.description} image={tile.imageUrl} />
                ))}
            </div>
        </div>
    );
}

export default TileCards;
