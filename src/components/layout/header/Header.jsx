import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Badge } from 'antd';
import { UserOutlined, ShoppingOutlined } from '@ant-design/icons';

import { setProductsIntoCart } from '../../../stateManagement/actions/cartAction';

import logo from '../../../assets/img/logo.png';
import './header.css';
import { availableTime } from '../../../utils';

const { Header } = Layout;

export default function MainHeader() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    const cachedCart = JSON.parse(localStorage.getItem('cart'));

    if (cachedCart && availableTime()) {
      console.log('viendo el cart en LS', cachedCart);
      dispatch(setProductsIntoCart(cachedCart));
    } else {
      console.log('se limpia cart');
      dispatch(setProductsIntoCart([]));
    }
  }, []);

  return (
    <Header>
      <div className='logo'>
        <img src={logo} alt='Mi Store' />
        <p className='header_name'>Mi Store</p>
      </div>
      <div className='user_section'>
        <div className='header_account'>
          <span>Mi Cuenta</span>
          <UserOutlined style={{ fontSize: '17px' }} />
        </div>
        <div className='header_cart'>
          <Badge count={cart.length} offset={[5, 10]}>
            <ShoppingOutlined style={{ fontSize: '22px' }} />
          </Badge>
        </div>
      </div>
    </Header>
  );
}
