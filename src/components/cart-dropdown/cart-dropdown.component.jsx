import './cart-dropdown.styles.scss'
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartItemsContext } from '../../contexts/CartItems.context';


const ascending = (a,b) => a.cartId - b.cartId;


const CartDropdown = () => {
const {cartItems,setCartItems} = useContext(CartItemsContext);
const sortedCartItems = [...cartItems];
    sortedCartItems.sort(ascending);

const handleDeleteItem = ({target}) => {
    const deltetedArray = cartItems.filter(item=> item.id !== Number(target.id))
    setCartItems(deltetedArray);
}
return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' >              
            {sortedCartItems.map(item => (
                    <span key={item.id}>

                        <span>
                            {item.name}
                        </span>
                        <span>{" "}-{" "}</span>
                        <span> {item.quantity}</span>
                        <span>{" "}+{" "}</span>
                        <button id={item.id} onClick={handleDeleteItem} >{" "}X{" "}</button>

                    </span>
                )
            )}
            </div>
            <Button >Check out</Button>
        </div>
  );
};

export default CartDropdown;