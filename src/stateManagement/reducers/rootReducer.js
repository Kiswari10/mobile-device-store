import { combineReducers } from 'redux';
import { productDetailReducer } from './productDetailReducer';
import { productsReducer } from './productsReducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  productDetail: productDetailReducer,
});
