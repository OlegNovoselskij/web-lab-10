// actions.js

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: { ...item, cartItemId: Date.now() }, 
});

export const removeFromCart = (cartItemId) => ({
  type: REMOVE_FROM_CART,
  payload: cartItemId,
});

export const increaseQuantity = (cartItemId) => ({
  type: INCREASE_QUANTITY,
  payload: cartItemId,
});

export const decreaseQuantity = (cartItemId) => ({
  type: DECREASE_QUANTITY,
  payload: cartItemId,
});

