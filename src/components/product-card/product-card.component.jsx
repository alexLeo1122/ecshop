import './product-card.styles.scss';
import Button from '../button/button.component';
// import { CartItemsContext } from '../../contexts/CartItems.context';
// import { useContext } from 'react';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { AddItemToCart, DeleteItem } from '../../store/cart-items/cart-items.actions';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemsSelector } from '../../store/cart-items/cart-items.selectors';
const ProductCard = ({product}) => {
    const {name, price, imageUrl,id} = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(cartItemsSelector)
    // const {AddItemToCart} = useContext(CartItemsContext);
    const onAddItem = ()=>{
        AddItemToCart(dispatch,cartItems,product)
    }
    return (            
                <div className='product-card-container' key={id}>  
                    <img src={imageUrl} alt=""/>
                    <div className='footer'>
                        <span className='name'>{name}</span>
                        <span className='price'>{price}</span>
                    </div>
                    <Button buttonType={BUTTON_TYPE_CLASSES.inverted} key={id}  onClick={onAddItem}>Add to cart</Button>           
                </div>
    );
};

export default ProductCard;