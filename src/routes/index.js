import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { ProductDetail, Home } from '../pages';
import { BaseLayout } from '../components';
import { availableTime } from '../utils';

export const Router = () => {
  useEffect(() => {
    if (!availableTime()) {
      console.log('se limpia LS');
      localStorage.clear();
    }
  }, []);

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
