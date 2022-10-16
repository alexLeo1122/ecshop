import { useContext} from 'react';
// import ProductCard from '../../components/product-card/product-card.component';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategoriesContext } from '../../contexts/products.context';

import './categories-preview.styles.scss';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className='shop-container'>
      { Object.keys(categoriesMap).map((title) => (
          <CategoryPreview key={title} title={title} products ={categoriesMap[title]}/>
      ))}
    </div>
  );
};

export default CategoriesPreview;
