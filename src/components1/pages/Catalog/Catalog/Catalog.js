// Catalog.js
import React from 'react';
import CarDataProvider from '../../../carDataProvider'; // Імпортуємо компонент для отримання даних
import CarsList from '../carsList/carsList'; // Імпортуємо компонент для відображення списку
import './Catalog.css';

const Catalog = () => {
    return (
        <CarDataProvider>
            {(cars) => (
                <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
                    <CarsList cars={cars} /> {/* Передаємо отримані дані до CarsList */}
                </div>
            )}
        </CarDataProvider>
    );
};

export default Catalog;
