import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Button, Form } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';

import { postProductToCartAction } from '../../stateManagement/actions/cartAction';

const { Option } = Select;

export const ActionSection = ({ options, id }) => {
  const dispatch = useDispatch();
  const { cart, success } = useSelector((state) => state.cart);

  const onFinish = (values) => {
    const body = {
      id,
      ...values,
    };

    dispatch(postProductToCartAction(body));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (success) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [success]);

  return (
    <div>
      <Form
        name='basic'
        className='detailProduct_actions'
        initialValues={{
          codeColor: options?.color.length > 1 ? null : options?.color[0].name,
          codeStorage:
            options?.storage.length > 1 ? null : options?.storage[0].name,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
        requiredMark={false}
      >
        <div>
          <div>
            <Form.Item
              label='Color'
              name='codeColor'
              rules={[
                {
                  required: true,
                  message: 'Por favor, selecciona un color',
                },
              ]}
            >
              <Select
                className='container-actions-product-select'
                placeholder='Selecciona un color'
              >
                {options?.color.map((color) => (
                  <Option key={color.code} value={color.code}>
                    {color.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label='Almacenamiento'
              name='codeStorage'
              rules={[
                {
                  required: true,
                  message: 'Por favor, selecciona un almacenamiento',
                },
              ]}
            >
              <Select
                className='container-actions-product-select'
                placeholder='Seleccione Almacenamiento'
              >
                {options?.storage.map((storage) => (
                  <Option key={storage.code} value={storage.code}>
                    {storage.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>
        </div>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            <ShoppingOutlined /> A??adir
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

ActionSection.propTypes = {
  options: PropTypes.object,
  id: PropTypes.string,
};
