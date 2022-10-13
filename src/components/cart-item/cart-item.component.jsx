import './cart-item.styles.scss'
import { useContext } from 'react';
import { CartItemsContext } from '../../contexts/CartItems.context';


export const CartItem = ({cartItem}) => {
    const {id, name, quantity, price, imageUrl} = cartItem;
    const {handleDeleteItem} = useContext(CartItemsContext);
  return (
    <span key={id} className="cart-item-container" >
        <img src={imageUrl} alt="" />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price' > {quantity}{" "}x{" "}${price}</span>
            <button id={id} onClick={()=>{handleDeleteItem(cartItem)}} >{" "}X{" "}</button>
        </div>

    </span>
  );
};