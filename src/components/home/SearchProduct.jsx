import PropTypes from 'prop-types';
import { Input } from 'antd';

export const SearchProduct = ({ setSearchTerm }) => {
  return (
    <div className='home_container-search'>
      <Input
        className='home_input-search'
        placeholder='Busca aquí tu producto'
        allowClear
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

SearchProduct.propTypes = {
  setSearchTerm: PropTypes.any,
};
