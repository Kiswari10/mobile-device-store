import PropTypes from 'prop-types';

export const DescriptionSection = ({ product }) => {
  return (
    <div className='detailProduct_description'>
      <span className='detailProduct_brand'>
        {product.brand?.toUpperCase()}
      </span>
      <h1 className='detailProduct_model'>{product?.model}</h1>
      <div className='detailProduct_container-info'>
        <div>CPU: {product.cpu}</div>
        <div>RAM: {product.ram}</div>
        <div>Sistema Operativo: {product.so}</div>
        <div>Resolución de Pantalla: {product.displayResolution}</div>
        <div>Bateria: {product.battery}</div>
        <div>Cámara-Principal: {product.primaryCamera}</div>
        <div>Cámara-Frontal: {product.secondaryCmera}</div>
        <div>Dimensiones: {product.dimentions}</div>
        <div>Peso: {product.weight}</div>
      </div>
      <div className='detailProduct_price'>${product.price}.00</div>
    </div>
  );
};

DescriptionSection.propTypes = {
  product: PropTypes.object,
};
