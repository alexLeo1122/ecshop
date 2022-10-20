import './cart-item.styles.scss'
// import { useContext } from 'react';
// import { CartItemsContext } from '../../contexts/CartItems.context';
import { DeleteItem } from '../../store/cart-items/cart-items.actions';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemsSelector } from '../../store/cart-items/cart-items.selectors';

export const CartItem = ({cartItem}) => {
    const {id, name, quantity, price, imageUrl} = cartItem;
    const cartItems = useSelector(cartItemsSelector);
    const dispatch = useDispatch();
    // const {handleDeleteItem} = useContext(CartItemsContext);
  const handleDeleteItem =()=>{
    DeleteItem(dispatch,cartItems,cartItem);
  }
  return (
    <span key={id} className="cart-item-container" >
        <img src={imageUrl} alt="" />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price' > {quantity}{" "}x{" "}${price}</span>
            <button id={id} onClick={handleDeleteItem}>{" "}X{" "}</button>
        </div>

    </span>
  );
};