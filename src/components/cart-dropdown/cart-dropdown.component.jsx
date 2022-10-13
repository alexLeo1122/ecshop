import './cart-dropdown.styles.scss'
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartItemsContext } from '../../contexts/CartItems.context';
import { CartItem } from '../cart-item/cart-item.component';

const ascending = (a,b) => a.cartId - b.cartId;
const calTotal = (arr) => {
    return arr.reduce((pre,curItem)=> pre + (curItem.quantity*curItem.price), 0);
}

const CartDropdown = () => {
const {cartItems} = useContext(CartItemsContext);
const sortedCartItems = [...cartItems];
    sortedCartItems.sort(ascending);
const total = calTotal(cartItems);
// const handleDeleteItem = ({target}) => {
//     const deltetedArray = cartItems.filter(item=> item.id !== Number(target.id))
//     setCartItems(deltetedArray);
// }
return (
        <div className='cart-dropdown-container'>
            <div className='total'>Total:{" "}${total}</div>
            <div className='cart-items' >              
            {sortedCartItems.map(item => (
                    <CartItem key ={item.id} cartItem={item}/>
                )
            )}
            </div>
            <Button >Check out</Button>
        </div>
  );
};

export default CartDropdown;