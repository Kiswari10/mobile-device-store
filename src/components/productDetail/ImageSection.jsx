import PropTypes from 'prop-types';
import { Image } from 'antd';

export const ImageSection = ({ image }) => {
  return (
    <div className='detailProduct_img-container'>
      <Image
        className='detailProduct_image'
        src={
          image ||
          'https://images.vexels.com/media/users/3/208383/isolated/preview/a17b49a9539f0bab677ad3e84f976537-ilustraci-n-de-tel-fono-m-vil-antiguo.png'
        }
        alt='mobile-image'
      />
    </div>
  );
};

ImageSection.propTypes = {
  image: PropTypes.string,
};
