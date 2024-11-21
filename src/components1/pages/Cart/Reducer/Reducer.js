import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from '../Actions/Actions';

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_TO_CART:
          return {
              ...state,
              items: [
                  ...state.items,
                  { ...action.payload, quantity: 1, cartItemId: Date.now() }, // Додаємо унікальний cartItemId
              ],
          };
      case REMOVE_FROM_CART:
          return {
              ...state,
              items: state.items.filter((item) => item.cartItemId !== action.payload),
          };
      case INCREASE_QUANTITY:
          return {
              ...state,
              items: state.items.map((item) =>
                  item.cartItemId === action.payload
                      ? { ...item, quantity: item.quantity + 1 }
                      : item
              ),
          };
      case DECREASE_QUANTITY:
          return {
              ...state,
              items: state.items.map((item) =>
                  item.cartItemId === action.payload
                      ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                      : item
              ),
          };
      default:
          return state;
  }
};

export default cartReducer;
