import { Endpoints } from '../../api/ApiUrl';
import { get } from '../../api/config';

import {
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_ERROR,
} from '../types/productDetailType';

/* Action para obtener el detalle de un producto */
export const getProductDetailAction = (id) => {
  return async (dispatch) => {
    dispatch(getProductDetail());

    try {
      const res = await get(`${Endpoints.product}/${id}`);
      dispatch(getProductDetailSuccess(res[0]));
    } catch (error) {
      dispatch(getProductDetailError(error));
      console.log(error);
    }
  };
};

const getProductDetail = () => ({ type: GET_PRODUCT_DETAIL });

const getProductDetailSuccess = (products) => ({
  type: GET_PRODUCT_DETAIL_SUCCESS,
  payload: products,
});

const getProductDetailError = (error) => ({
  type: GET_PRODUCT_DETAIL_ERROR,
  payload: error,
});
