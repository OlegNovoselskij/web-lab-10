import React from 'react';
import './ProductInfo.css';
import { useLocation} from 'react-router-dom';
import ActionButtons from '../ActionButtons/ActionButtons';

const ProductInfo = () => {
    const location = useLocation();

    const car = location.state?.car; // Access the car data
    if (!car) {
        return <p>No car data available</p>;
    }

    console.log(car);
    

  return (
    <div className="product-card">
        <div className="image-preview">
            <img src={car.imageUrl} alt="Product" />
        </div>
        <div className="product-details">
            <h2>{car.name}</h2>
            <p>{car.description}</p>
            <div className="input-fields">
            <div className="input-field">
                <label>Countable Field</label>
                <input type="text" placeholder="1337..." />
            </div>
            <div className="input-field">
                <label>Selectable Field</label>
                <select>
                <option>Select</option>
                </select>
            </div>
            </div>
            <div className="price">Price: {car.price}</div>
            <div className="actions">
            </div>
        </div>
        <ActionButtons car={car} />
    </div>
  );
};

export default ProductInfo;
