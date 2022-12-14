import { useContext } from 'react';
import { CartItemsContext } from '../../contexts/CartItems.context';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';
// import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon = () => {
  const {cartItems,isCartOpen, setIsCartOpen} = useContext(CartItemsContext);
  let totalItems = 0;
  cartItems.forEach(element => {
    totalItems += element.quantity 
  });
    return (
      <CartIconContainer onClick={()=>setIsCartOpen(!isCartOpen)}>
          <ShoppingIcon />
          <ItemCount>{totalItems}</ItemCount>
      </CartIconContainer>
    );
};

export default CartIcon; 