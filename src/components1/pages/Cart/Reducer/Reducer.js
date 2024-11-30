import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
  } from '../Actions/Actions';
  
  const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems')) || [], // Ініціалізація стану з Local Storage
  };
  
  const saveToLocalStorage = (items) => {
    localStorage.setItem('cartItems', JSON.stringify(items)); // Збереження у Local Storage
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART: {
        const updatedItems = [
          ...state.items,
          { ...action.payload, quantity: 1, cartItemId: Date.now() }, // Додаємо унікальний cartItemId
        ];
        saveToLocalStorage(updatedItems); // Зберегти у Local Storage
        return { ...state, items: updatedItems };
      }
      case REMOVE_FROM_CART: {
        const updatedItems = state.items.filter(
          (item) => item.cartItemId !== action.payload
        );
        saveToLocalStorage(updatedItems); // Зберегти у Local Storage
        return { ...state, items: updatedItems };
      }
      case INCREASE_QUANTITY: {
        const updatedItems = state.items.map((item) =>
          item.cartItemId === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        saveToLocalStorage(updatedItems); // Зберегти у Local Storage
        return { ...state, items: updatedItems };
      }
      case DECREASE_QUANTITY: {
        const updatedItems = state.items.map((item) =>
          item.cartItemId === action.payload
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        );
        saveToLocalStorage(updatedItems); // Зберегти у Local Storage
        return { ...state, items: updatedItems };
      }
      default:
        return state;
    }
  };
  
  export default cartReducer;
  