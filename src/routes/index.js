import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { ProductDetail, Home } from '../pages';
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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-detail/:id' element={<ProductDetail />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};
