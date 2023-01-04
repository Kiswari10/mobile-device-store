import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ProductCard } from '../components';

describe('Pruebas en <ProductCard />', () => {
  const mock = {
    id: '1',
    imgUrl:
      'https://http2.mlstatic.com/D_NQ_NP_769912-MLA46490092919_062021-O.jpg',
    brand: 'Xiaomi',
    model: 'Redmi Note 10S',
    price: '340',
  };

  test('debe hacer match con el snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <ProductCard item={mock} key={mock.id} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('debe mostrar la imagen con la URL y el ALT indicado', () => {
    render(
      <MemoryRouter>
        <ProductCard item={mock} key={mock.id} />
      </MemoryRouter>
    );

    const { src, alt } = screen.getByRole('img');

    expect(src).toBe(mock.imgUrl);
    expect(alt).toBe(mock.model);
  });
});
