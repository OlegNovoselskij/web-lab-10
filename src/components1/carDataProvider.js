import React, { useState, useEffect } from 'react';
import Spinner from './spinner';
import axios from 'axios';

const CarDataProvider = ({ children }) => {
    const [cars, setCars] = useState([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchCarData = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/cars'); 
                setCars(response.data); 
            } catch (error) {
                console.error("Error fetching car data:", error);
            } finally {
                setLoading(false); 
            }
        };

        fetchCarData(); 
    }, []); 


    if (loading) {
        return <Spinner />;
    }

    return children(cars);
};

export default CarDataProvider;
