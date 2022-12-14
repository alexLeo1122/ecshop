import {Outlet, Link} from 'react-router-dom';
import { useContext } from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
// import './navigation.styles.scss';
import { signOutAuth } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartItemsContext } from '../../contexts/CartItems.context';
import { NavigationContainer, LogoContainer, NavLink, NavLinksContainer } from './navigation.styles';


const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {cartItems,isCartOpen} = useContext(CartItemsContext);
    return (
        <>
            <NavigationContainer >
                <LogoContainer to='/'>
                    <CrwnLogo className='logo'/>
                </LogoContainer>
                <NavLinksContainer >
                    <NavLink to='shop'>
                        SHOP
                    </NavLink>
                    {currentUser?
                    <NavLink as='span' onClick={signOutAuth}>SIGN OUT</NavLink>:
                        (<NavLink className='nav-link' to='sign-in'>
                        SIGN IN
                        </NavLink>)                   
                    }
                    <CartIcon />                  
                </NavLinksContainer>
                    { (isCartOpen && cartItems.length>0) ? <CartDropdown />:null}

            </NavigationContainer>
            <Outlet />
        </>
      
    );
  };

export default Navigation;