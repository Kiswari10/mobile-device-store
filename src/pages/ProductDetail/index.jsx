import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import {
  getProductDetailAction,
  getProductDetailSuccess,
} from '../../stateManagement/actions/productDetailAction';
import {
  ImageSection,
  DescriptionSection,
  ActionSection,
  SkeletonLoaderDetail,
} from '../../components';
import { availableTime, clearLS } from '../../utils';

import './product-detail.css';

export const ProductDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const cachedProductDetail = JSON.parse(
      localStorage.getItem('productDetail')
    );

    if (availableTime()) {
      if (cachedProductDetail && cachedProductDetail.id === params.id) {
        dispatch(getProductDetailSuccess(cachedProductDetail));
      } else {
        dispatch(getProductDetailAction(params.id));
      }
    } else {
      clearLS(dispatch);
      dispatch(getProductDetailAction(params.id));
    }
  }, []);

  const { loading, product } = useSelector((state) => state.productDetail);

  return (
    <div className='detail-layout-background'>
      <div className='detailProduct_view'>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to='/'>
              <HomeOutlined /> <span>Productos</span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className='item-active'>
            Detalle Producto
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className='detailProduct_container'>
          {loading ? (
            <SkeletonLoaderDetail />
          ) : (
            <>
              <ImageSection image={product.imgUrl} />
              <div className='detailProduct_information'>
                <DescriptionSection product={product} />
                <ActionSection options={product.options} id={product.id} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
