import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
      dispatch(setProductsIntoCart(cachedCart));
    } else {
      dispatch(setProductsIntoCart([]));
    }
  }, []);

  return (
    <Header>
      <div className='header'>
        <div className='header_company'>
          <Link to='/'>
            <img className="header_company-logo" src={logo} alt='Mi Store' />
          </Link>
          <p className='header_company-name'>Mi Store</p>
        </div>
        <div className='header_user-section'>
          <div className='header_account'>
            <span className='header_account-name'>Mi Cuenta</span>
            <UserOutlined style={{ fontSize: '17px' }} />
          </div>
          <div className='header_cart'>
            <Badge count={cart.length} offset={[5, 10]}>
              <ShoppingOutlined style={{ fontSize: '22px' }} />
            </Badge>
          </div>
        </div>
      </div>
    </Header>
  );
}
