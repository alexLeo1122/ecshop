import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Categories from '../category/categories.component';

import './shop.styles.scss';

const Shop = () => {

  return (
      <Routes>
        <Route index element={<CategoriesPreview/>} />
        <Route  path='/:category'   element={<Categories/>} />
      </Routes>
  );
};

export default Shop;
