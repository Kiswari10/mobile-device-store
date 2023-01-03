import { Endpoints } from '../../api/ApiUrl';
import { post } from '../../api/config';

import {
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_CART_SUCCESS,
  ADD_PRODUCT_TO_CART_ERROR,
  SET_PRODUCTS_INTO_CART,
} from '../types/cartType';

/* Action para agregar un producto al carrito de compras */
export const postProductToCartAction = (body) => {
  return async (dispatch) => {
    dispatch(postProductToCart());

    try {
      await post(Endpoints.cart, body);
      dispatch(postProductToCartSuccess(body));
    } catch (error) {
      dispatch(postProductToCartError(error));
      console.log(error);
    }
  };
};

const postProductToCart = () => ({ type: ADD_PRODUCT_TO_CART });

const postProductToCartSuccess = (product) => ({
  type: ADD_PRODUCT_TO_CART_SUCCESS,
  payload: product,
});

const postProductToCartError = (error) => ({
  type: ADD_PRODUCT_TO_CART_ERROR,
  payload: error,
});

export const setProductsIntoCart = (products) => ({
  type: SET_PRODUCTS_INTO_CART,
  payload: products,
});
