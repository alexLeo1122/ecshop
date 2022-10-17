// import './cart-dropdown.styles.scss'
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartItemsContext } from '../../contexts/CartItems.context';
import { CartItem } from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { ascending} from '../../utils/functions.utils/functions.utils';
import { CartDropDownContainer, CartItems } from './cart-dropdown.styles';


const CartDropdown = () => {
    const {cartItems, setIsCartOpen, totalAmount } = useContext(CartItemsContext);
    const navigate = useNavigate();
    const sortedCartItems = [...cartItems];
        sortedCartItems.sort(ascending);
    // const total = calTotal(cartItems);
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
            <Button onClick={()=>{goToNavigateHandler();setIsCartOpen(false);}}>Check out</Button>
        </CartDropDownContainer>
  );
};

export default CartDropdown;