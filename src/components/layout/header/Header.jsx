import { Layout, Badge } from 'antd';
import { UserOutlined, ShoppingOutlined } from '@ant-design/icons';

import logo from '../../../assets/img/logo.png';
import './header.css';

const { Header } = Layout;

export default function MainHeader() {
  return (
    <Header>
      <div className='logo'>
        <img src={logo} alt='Mi Store' />
        <p className="header_name">Mi Store</p>
      </div>
      <div className='user_section'>
        <div className='header_account'>
          <span>Mi Cuenta</span>
          <UserOutlined style={{ fontSize: '17px' }} />
        </div>
        <div className='header_cart'>
          <Badge count={4} offset={[5, 10]}>
            <ShoppingOutlined style={{ fontSize: '22px' }} />
          </Badge>
        </div>
      </div>
    </Header>
  );
}
