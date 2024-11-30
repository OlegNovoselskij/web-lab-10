import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Car from '../Car/Car';
import Spinner from '../../../spinner';
import { useNavigate } from 'react-router-dom';
import './carsList.css';
import Filters from '../Filters/Filters';
import Search from '../Search/Search';

const CarList = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({ maxPrice: Infinity });
    const navigate = useNavigate();

    // Фетчинг даних із сервера
    const fetchCars = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get('http://localhost:5001/api/cars', {
                params: {
                    search: searchQuery || undefined, // Передаємо параметр тільки якщо є значення
                    maxPrice: filters.maxPrice !== Infinity ? filters.maxPrice : undefined,
                },
            });
            setCars(data);
        } catch (error) {
            console.error("Error fetching cars:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleShowMore = (car) => {
        navigate("/catalog/carPage", { state: { car } });
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const handleApplyFilters = (newFilters) => {
        setFilters(newFilters);
    };

    useEffect(() => {
        fetchCars(); // Викликаємо API для завантаження даних
    }, [searchQuery, filters]); // Реагуємо на зміну параметрів

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <Search onSearch={handleSearch} />
                <Filters onClick={handleApplyFilters} />
            </div>

            {loading ? (
                <Spinner />
            ) : (
                <div className="car-list">
                    {cars.map((car, index) => (
                        <Car key={index} {...car} onShowMore={() => handleShowMore(car)} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CarList;