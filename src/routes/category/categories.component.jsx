import "./categories.styles.scss";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/products.context";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";



const Categories = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category,categoriesMap]);
    
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
export default Categories;

