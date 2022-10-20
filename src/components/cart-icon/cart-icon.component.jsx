import { useContext } from 'react';
// import { CartItemsContext } from '../../contexts/CartItems.context';
import { useSelector,useDispatch } from 'react-redux';
import { itemsCountSelector,isCartOpenSelector } from '../../store/cart-items/cart-items.selectors';
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';
import { createAction } from '../../utils/functions.utils/functions.utils';
import { CART_ITEMS_ACTIONS_TYPES } from '../../store/cart-items/cart-items.types';
// import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { setIsCartOpen } from '../../store/cart-items/cart-items.actions';
const CartIcon = () => {
  // const {isCartOpen, setIsCartOpen, itemsCount} = useContext(CartItemsContext);
  const itemsCount = useSelector(itemsCountSelector);
  const isCartOpen = useSelector(isCartOpenSelector);
  const dispatch = useDispatch();
  
  return (
    <CartIconContainer onClick={()=>setIsCartOpen(dispatch,!isCartOpen)}>
        <ShoppingIcon />
        <ItemCount>{itemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon; 