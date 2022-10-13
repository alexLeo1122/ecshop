import { useContext } from 'react';
import { CartItemsContext } from '../../contexts/CartItems.context';

import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon = () => {
  const {cartItems,isCartOpen, setIsCartOpen} = useContext(CartItemsContext);
  let totalItems = 0;
  cartItems.forEach(element => {
    totalItems += element.quantity 
  });
    return (
      <div className='cart-icon-container' onClick={()=>setIsCartOpen(!isCartOpen)}>
          <ShoppingIcon className='shopping-icon'/>
          
          <span className='item-count'>{totalItems}</span>
       

      </div>
    );
};

export default CartIcon; 