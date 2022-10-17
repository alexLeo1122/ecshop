import { useContext } from 'react';
import { CartItemsContext } from '../../contexts/CartItems.context';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';
// import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon = () => {
  const {isCartOpen, setIsCartOpen, itemsCount} = useContext(CartItemsContext);

    return (
      <CartIconContainer onClick={()=>setIsCartOpen(!isCartOpen)}>
          <ShoppingIcon />
          <ItemCount>{itemsCount}</ItemCount>
      </CartIconContainer>
    );
};

export default CartIcon; 