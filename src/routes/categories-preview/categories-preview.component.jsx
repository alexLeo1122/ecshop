import CategoryPreview from '../../components/category-preview/category-preview.component';
import { categoriesMapSelector } from "../../store/categories/categories.selector";
import {  useSelector } from "react-redux";

import './categories-preview.styles.scss';

const CategoriesPreview = () => {
  console.log(">>>Category Preview run");
  // let categoriesMap; console.log("CategoryPreview/Map before selector",categoriesMap)
  console.log("CategoryPreview/selecting categorymap");
   const categoriesMap = useSelector(categoriesMapSelector);
  console.log("CategoriesPreview/cateMap",categoriesMap);

  return (
    <div className='shop-container'>
      { Object.keys(categoriesMap).map((title) => (
          <CategoryPreview key={title} title={title} products ={categoriesMap[title]}/>
      ))}
    </div>
  );
};

export default CategoriesPreview;
