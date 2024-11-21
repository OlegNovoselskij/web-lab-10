// Filters.js
import React, { useState } from 'react';
import './Filters.css';

function Filters({ onClick }) {
    const [maxPrice, setMaxPrice] = useState('');

    const handlePriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    const handleApplyClick = () => {
        onClick({ maxPrice: parseFloat(maxPrice) || Infinity });
    };

    return (
        <div className='filters_button'>
            <div className="filters">
                <select value={maxPrice} onChange={handlePriceChange}>
                    <option value="">Filter by price</option>
                    <option value="50000">Up to 50,000</option>
                    <option value="70000">Up to 70,000</option>
                    <option value="100000">Up to 100,000</option>
                </select>
            </div>
            <div>
                <button onClick={handleApplyClick}>Apply</button>
            </div>
        </div>
    );
}

export default Filters;
