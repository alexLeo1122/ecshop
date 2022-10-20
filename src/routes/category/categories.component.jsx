import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import {  useSelector } from "react-redux";
import { categoriesMapSelector } from "../../store/categories/categories.selector";

import "./categories.styles.scss";

const Category = () => {
  console.log(">>>Category run");
    const {category} = useParams();
    console.log(`Category/${category}/UseSelector-categoriesMap`);
    const categoriesMap = useSelector(categoriesMapSelector); 
    const products =categoriesMap[category];
    console.log("Category/getProducts",products);

  return (
    <>
        <h1>{category.toUpperCase()}</h1>
        <div className="categories-container">
            { products && products.map((product)=>
            <ProductCard key={product.id} product={product} />)}
        </div>
    </>
  );
};
export default Category;

