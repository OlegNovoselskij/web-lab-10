import React from 'react';
import './Search.css';

const Search = ({ onSearch }) => {
    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder="Search..." 
                className="search-input" 
                onChange={onSearch} 
            />
        </div>
    );
};

export default Search;
