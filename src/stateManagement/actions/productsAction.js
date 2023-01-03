import { Endpoints } from '../../api/ApiUrl';
import { get } from '../../api/config';
import { setExpireTime } from '../../utils';

import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../types/productsType';

/* Action para obtener el listado de productos */
export const getProductsAction = () => {
  return async (dispatch) => {
    dispatch(getProducts());

    try {
      const res = await get(Endpoints.product);
      dispatch(getProductsSuccess(res));
      localStorage.setItem('products', JSON.stringify(res));
      setExpireTime()
    } catch (error) {
      dispatch(getProductsError(error));
      console.log(error);
    }
  };
};

const getProducts = () => ({ type: GET_PRODUCTS });

export const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

const getProductsError = (error) => ({
  type: GET_PRODUCTS_ERROR,
  payload: error,
});
