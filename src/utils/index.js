import { setProductsIntoCart } from '../stateManagement/actions/cartAction';

export const setExpireTime = () => {
  if (!localStorage.getItem('expire_time')) {
    const time = Math.round(new Date().getTime() / 1000);
    localStorage.setItem('expire_time', JSON.stringify(time));
  }
};

export const availableTime = () => {
  const expireTime = JSON.parse(localStorage.getItem('expire_time'));
  const time = Math.round(new Date().getTime() / 1000);
  return expireTime && time - expireTime <= 36000;
};

export const clearLS = (dispatch) => {
  localStorage.clear();
  dispatch(setProductsIntoCart([]));
};
