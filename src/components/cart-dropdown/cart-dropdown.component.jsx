import Button from '../button/button.component';
import { CartItem } from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { ascending} from '../../utils/functions.utils/functions.utils';
import { CartDropDownContainer, CartItems } from './cart-dropdown.styles';
import { setIsCartOpen } from '../../store/cart-items/cart-items.actions';
import { useDispatch,useSelector } from 'react-redux';
import { cartItemsSelector, totalAmountSelector } from '../../store/cart-items/cart-items.selectors';
const CartDropdown = () => {
    const cartItems = useSelector(cartItemsSelector);
    const totalAmount = useSelector(totalAmountSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const sortedCartItems = [...cartItems];
    sortedCartItems.sort(ascending);
    const goToNavigateHandler = () => {
        navigate('./checkout');
    }
return (
        <CartDropDownContainer>
            <div className='total' style={{fontWeight:600,marginBottom:5}} >Total:{" "}${totalAmount}</div>
            <CartItems >              
            {sortedCartItems.map(item => (
                    <CartItem key ={item.id} cartItem={item}/>
                )
            )}
            </CartItems>
            <Button onClick={()=>{goToNavigateHandler();setIsCartOpen(dispatch,false);}}>Check out</Button>
        </CartDropDownContainer>
  );
};

export default CartDropdown;