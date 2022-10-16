import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";
import { Link } from "react-router-dom";


const CategoryPreview = ({title,products}) => {
  return (
        <div className="category-preview-container">
            <Link className='nav-link' to={title}>
              <h2>
                {title.toUpperCase()}
              </h2>
            </Link>
            
            <div className="preview" >
            {
            // products.map((product,index) => {
            //     if (index < 4) return  <ProductCard key={index} product={product} />;
            //     return null;
            //     }
            // )
              products.filter((_,index) => index<4).map((product,index)=>{
                  return <ProductCard key={index} product={product} />
              })       
            }
            </div>
        </div>
  );
};

export default CategoryPreview;