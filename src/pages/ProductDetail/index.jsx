import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import { getProductDetailAction } from '../../stateManagement/actions/productDetailAction';
import {
  ImageSection,
  DescriptionSection,
  ActionSection,
} from '../../components';

import './product-detail.css';

export const ProductDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetailAction(params.id));
  }, []);

  const { loading, product } = useSelector((state) => state.productDetail);

  return (
    <div className='detailProduct_view'>
      <Breadcrumb>
        <Breadcrumb.Item>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to='/'>Productos</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Detalle Producto</Breadcrumb.Item>
      </Breadcrumb>
      <div className='detailProduct_container'>
        {loading ? (
          <p>loading...</p>
        ) : (
          <>
            <ImageSection image={product.imgUrl} />
            <div className='detailProduct_information'>
              <DescriptionSection product={product} />
              <ActionSection options={product.options} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
