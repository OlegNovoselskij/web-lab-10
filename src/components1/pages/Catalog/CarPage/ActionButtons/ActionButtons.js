// ActionButtons.js
import React from 'react';
import './ActionButtons.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../Cart/Actions/Actions';

const ActionButtons = ({ car }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(car));
  };

  return (
    <div className="action-buttons">
      <Link to={'/catalog'} className="go-back">Go back</Link>
      <Link to={'/Cart'} onClick={handleAddToCart} className="add-to-cart">Add to cart</Link>
    </div>
  );
};

export default ActionButtons;
