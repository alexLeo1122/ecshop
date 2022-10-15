import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shops.styles.scss'
const Shop = () => {
    const {products} = useContext(ProductsContext);
    return (
        <div className='products-container'>
                {
                    products.map((product,index)=>                    
                        (
                            <ProductCard key={index} product={product}/>
                        )                    
                    )                  
                }

        </div>
    )
};


export default Shop;