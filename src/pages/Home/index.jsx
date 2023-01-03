import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getProductsAction,
  getProductsSuccess,
} from '../../stateManagement/actions/productsAction';
import { ProductCard, SearchProduct } from '../../components';

import './home.css';
import { availableTime } from '../../utils';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cachedProducts = JSON.parse(localStorage.getItem('products'));

    if (cachedProducts && availableTime()) {
      // console.log('viendo lo guardado', cachedProducts);
      dispatch(getProductsSuccess(cachedProducts));
    } else {
      console.log('se llamara al api mediante el action');
      /* console.log('se limpia LS');
      localStorage.clear(); */
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
    </div>
  );
};
