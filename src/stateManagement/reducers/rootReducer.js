import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { productDetailReducer } from './productDetailReducer';
import { productsReducer } from './productsReducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
});
