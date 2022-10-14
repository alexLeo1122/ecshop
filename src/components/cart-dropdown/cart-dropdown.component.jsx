import './cart-dropdown.styles.scss'
import Button from '../button/button.component';
import { useContext } from 'react';

import { CartItemsContext } from '../../contexts/CartItems.context';
import { CartItem } from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { ascending, calTotal } from '../../utils/functions.utils/functions.utils';




const CartDropdown = () => {
const {cartItems, setIsCartOpen} = useContext(CartItemsContext);
const navigate = useNavigate();
const sortedCartItems = [...cartItems];
    sortedCartItems.sort(ascending);
const total = calTotal(cartItems);


const goToNavigateHandler = () => {
    navigate('./checkout');
}

return (
        <div className='cart-dropdown-container'>
            <div className='total'>Total:{" "}${total}</div>
            <div className='cart-items' >              
            {sortedCartItems.map(item => (
                    <CartItem key ={item.id} cartItem={item}/>
                )
            )}
            </div>
           
            <Button onClick={()=>{goToNavigateHandler();setIsCartOpen(false);}}>Check out</Button>
      
        </div>
  );
};

export default CartDropdown;