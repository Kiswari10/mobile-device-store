import { combineReducers } from 'redux';
import { productsReducer } from './productsReducers';

export const rootReducer = combineReducers({
  products: productsReducer,
});
