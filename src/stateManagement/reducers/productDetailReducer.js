import {
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_ERROR,
} from '../types/productDetailType';

const initialState = {
  product: {},
  loading: false,
  error: null,
};

export const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DETAIL:
      return { ...state, loading: true };

    case GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };

    case GET_PRODUCT_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
