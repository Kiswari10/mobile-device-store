import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { ProductDetail, Home } from '../pages';
import { BaseLayout } from '../components';

export const Router = () => {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product-detail/:id' element={<ProductDetail />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
};
