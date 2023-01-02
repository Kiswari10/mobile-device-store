import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import { getProductsAction } from '../../stateManagement/actions/productsAction';
import { ProductCard, SearchProduct } from '../../components';

import './home.css';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  const { loading, products } = useSelector((state) => state.products);

  const [searchTerm, setSearchTerm] = useState('');

  function searchingTerm(searchTerm) {
    return function (product) {
      return (
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.model.toLowerCase().includes(searchTerm.toLowerCase())
      );
    };
  }

  return (
    <div className='home_container'>
      <Breadcrumb>
        <Breadcrumb.Item>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Productos</Breadcrumb.Item>
      </Breadcrumb>
      <div className='home_header'>
        <h1 className='home_title'>Listado de productos</h1>
        <SearchProduct setSearchTerm={setSearchTerm} />
      </div>
      {loading ? (
        <p>Cargando...</p>
      ) : products.filter(searchingTerm(searchTerm)).length > 0 ? (
        <div className='home_containerProducts'>
          {products.filter(searchingTerm(searchTerm))?.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <p>No hay productos para esta búsqueda</p>
      )}
    </div>
  );
};
