import {
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_CART_SUCCESS,
  ADD_PRODUCT_TO_CART_ERROR,
} from '../types/cartType';

const initialState = {
  cart: [],
  loading: false,
  success: false,
  error: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return { ...state, loading: true, success: false };

    case ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        success: true,
        loading: false,
      };

    case ADD_PRODUCT_TO_CART_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
