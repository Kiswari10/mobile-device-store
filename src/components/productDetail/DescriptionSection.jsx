import PropTypes from 'prop-types';
import { Descriptions } from 'antd';

export const DescriptionSection = ({ product }) => {
  return (
    <div className='detailProduct_description'>
      <span className='detailProduct_brand'>
        {product.brand?.toUpperCase()}
      </span>
      <h1 className='detailProduct_model'>{product?.model}</h1>
      <Descriptions column={2} title=''>
        <Descriptions.Item label='CPU'>{product?.cpu}</Descriptions.Item>
        <Descriptions.Item label='RAM'>{product.ram}</Descriptions.Item>
        <Descriptions.Item label='Sistema Operativo'>
          {product.so}
        </Descriptions.Item>
        <Descriptions.Item label='Resolución de Pantalla'>
          {product.displayResolution}
        </Descriptions.Item>
        <Descriptions.Item label='Bateria'>{product.battery}</Descriptions.Item>
        <Descriptions.Item label='Cámara-Principal'>
          {product.primaryCamera}
        </Descriptions.Item>
        <Descriptions.Item label='Cámara-Frontal'>
          {product.secondaryCmera}
        </Descriptions.Item>
        <Descriptions.Item label='Dimensiones'>
          {product.dimentions}
        </Descriptions.Item>
        <Descriptions.Item label='Peso'>{product.weight}</Descriptions.Item>
      </Descriptions>
      <div className='detailProduct_price'>${product.price}.00</div>
    </div>
  );
};

DescriptionSection.propTypes = {
  product: PropTypes.object,
};
