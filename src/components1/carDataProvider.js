import React, { useState, useEffect } from 'react';
import Spinner from './spinner'; // Import the Spinner component

const CarDataProvider = ({ children }) => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/cars');
                if (!response.ok) throw new Error("Помилка під час отримання даних.");
                
                const data = await response.json();
                setCars(data);
            } catch (error) {
                console.error('Помилка отримання даних:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, []);

    if (loading) return <Spinner />; // Show spinner while loading
    if (error) return <div>Помилка: {error}</div>;

    return children(cars);
};

export default CarDataProvider;
