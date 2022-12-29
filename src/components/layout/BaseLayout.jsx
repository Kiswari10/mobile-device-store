import PropTypes from 'prop-types';
import { Layout } from 'antd';

import Header from './header/Header';
import Footer from './Footer';

const { Content } = Layout;

export const BaseLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content className='content-layout'>
        <div className='site-layout-background'>{children}</div>
      </Content>
      <Footer />
    </Layout>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.any,
};
