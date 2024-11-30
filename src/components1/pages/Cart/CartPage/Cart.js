// ShoppingCart.js
import React from 'react';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../Actions/Actions';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const items = useSelector((state) => state.items);
  console.log(items);
  
  
  const dispatch = useDispatch();
  
  const handleIncrease = (cartItemId) => {
    dispatch(increaseQuantity(cartItemId));
  };
  
  const handleDecrease = (cartItemId) => {
    dispatch(decreaseQuantity(cartItemId));
  };
  
  const handleRemove = (cartItemId) => {
    dispatch(removeFromCart(cartItemId));
  };
  

  const totalAmount = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {items.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.imageUrl} className="item-image"></img>
            <div className="item-info">
              <p>{item.name}</p>
            </div>
            <div className="item-quantity">
              <button onClick={() => handleDecrease(item.cartItemId)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrease(item.cartItemId)}>+</button>
            </div>
            <div className="item-price">${item.price * item.quantity}</div>
            <button onClick={() => handleRemove(item.cartItemId)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        Total amount: <span>${totalAmount}</span>
      </div>
      <div className='next-back'>
        <Link to={'catalog'}>Go back</Link>
        <Link to={'./Chekout'} >Continue</Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
