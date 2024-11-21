import React, { useState, useEffect } from 'react';
import Car from '../Car/Car';
import { useNavigate } from 'react-router-dom';
import './carsList.css';
import Filters from '../Filters/Filters';
import Search from '../Search/Search';

const CarList = ({ cars }) => {
    const [filteredCars, setFilteredCars] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({ maxPrice: Infinity });

    const navigate = useNavigate();

    const handleShowMore = (car) => {
        navigate("/catalog/carPage", { state: { car } });
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const handleApplyFilters = (newFilters) => {
        setFilters(newFilters);
    };

    // Function to apply both search and filter criteria
    const applySearchAndFilters = () => {
        const filtered = cars.filter(car => 
            (car.name.toLowerCase().includes(searchQuery) || car.description.toLowerCase().includes(searchQuery)) &&
            car.price <= filters.maxPrice
        );
        setFilteredCars(filtered);
    };

    // Run applySearchAndFilters whenever searchQuery, filters, or cars change
    useEffect(() => {
        applySearchAndFilters();
    }, [searchQuery, filters, cars]);

    const displayedCars = filteredCars.length > 0 || searchQuery || filters.maxPrice < Infinity ? filteredCars : cars;

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <Search onSearch={handleSearch} />
                <Filters onClick={handleApplyFilters} />
            </div>

            <div className="car-list">
                {displayedCars.map((car, index) => (
                    <Car key={index} {...car} onShowMore={() => handleShowMore(car)} />
                ))}
            </div>
        </div>
    );
};

export default CarList;
