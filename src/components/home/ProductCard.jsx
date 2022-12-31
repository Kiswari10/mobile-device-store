import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';

const { Meta } = Card;

export const ProductCard = ({ item }) => {
  return (
    <Card hoverable bordered={false}>
      <div className='home_card-container-img'>
        <img
          className='home_card-image'
          src={
            item.imgUrl ||
            'https://images.vexels.com/media/users/3/208383/isolated/preview/a17b49a9539f0bab677ad3e84f976537-ilustraci-n-de-tel-fono-m-vil-antiguo.png'
          }
          alt='mobile-image'
        />
      </div>
      <Meta title={item.brand} description={item.model} />
      <p className='home_card-footer'>
        <span className='home_card-price'>Precio: ${item.price}</span>
        <Link to={`/product-detail/${item.id}`}>
          <Button type='primary' shape='round'>
            Lo quiero
          </Button>
        </Link>
      </p>
    </Card>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object,
};
