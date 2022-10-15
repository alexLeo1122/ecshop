import './product-card.styles.scss';
import Button from '../button/button.component';
import { CartItemsContext } from '../../contexts/CartItems.context';
import { useContext } from 'react';


const ProductCard = ({product}) => {
    const {name, price, imageUrl,id} = product;
    const {AddItemToCart} = useContext(CartItemsContext);
    return (            
                <div className='product-card-container' key={id}>  
                    <img src={imageUrl} alt=""/>
                    <div className='footer'>
                        <span className='name'>{name}</span>
                        <span className='price'>{price}</span>
                    </div>
                    <Button buttonType='inverted' key={id}  onClick={()=>{AddItemToCart(product)}}>Add to cart</Button>           
                </div>
    );
};

export default ProductCard;