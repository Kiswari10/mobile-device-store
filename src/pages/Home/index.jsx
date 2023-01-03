import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'antd';

import {
  getProductsAction,
  getProductsSuccess,
} from '../../stateManagement/actions/productsAction';
import { ProductCard, SearchProduct, SkeletonLoader } from '../../components';
import { availableTime, clearLS } from '../../utils';

import './home.css';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cachedProducts = JSON.parse(localStorage.getItem('products'));

    if (availableTime()) {
      if (cachedProducts) {
        dispatch(getProductsSuccess(cachedProducts));
      } else {
        dispatch(getProductsAction());
      }
    } else {
      clearLS(dispatch);
      dispatch(getProductsAction());
    }
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
    <div className='home-layout-background'>
      <div className='home_container'>
        <div className='home_header'>
          <h1 className='home_title'>Listado de productos</h1>
          <SearchProduct setSearchTerm={setSearchTerm} />
        </div>
        {loading ? (
          <SkeletonLoader />
        ) : products.filter(searchingTerm(searchTerm)).length > 0 ? (
          <div className='home_containerProducts'>
            {products.filter(searchingTerm(searchTerm))?.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        ) : (
          <Alert
            message='No hay productos para esta búsqueda'
            type='warning'
            showIcon
          />
        )}
      </div>
    </div>
  );
};
