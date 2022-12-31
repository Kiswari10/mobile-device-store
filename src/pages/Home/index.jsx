import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import { getProductsAction } from '../../stateManagement/actions/productsAction';
import { ProductCard } from '../../components';

import './home.css';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  const { loading, products } = useSelector((state) => state.products);

  return (
    <div className='home_container'>
      <Breadcrumb>
        <Breadcrumb.Item>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Productos</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className='home_title'>Listado de productos</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className='home_containerProducts'>
          {products?.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};
