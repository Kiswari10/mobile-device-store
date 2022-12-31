import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { ProductDetail, Home } from '../pages';

export const Router = (props) => {
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