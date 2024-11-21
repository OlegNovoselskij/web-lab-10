import { createStore } from 'redux';
import cartReducer from '../Reducer/Reducer';

const store = createStore(cartReducer);

export default store;
