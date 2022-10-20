import {Outlet} from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { signOutAuth } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { useSelector } from 'react-redux';
import {currentUserSelector} from "../../store/user/user.selector.js"
import { NavigationContainer, LogoContainer, NavLink, NavLinksContainer } from './navigation.styles';
import { cartItemsSelector, isCartOpenSelector } from '../../store/cart-items/cart-items.selectors';


const Navigation = () => {
    console.log(">>>Navigation run")
    console.log("Navigation/getCurrentuserfromStore/")
    const currentUser = useSelector(currentUserSelector);
    console.log("Navitagion/currenUser",currentUser);
    const cartItems = useSelector(cartItemsSelector);
    const isCartOpen = useSelector(isCartOpenSelector);
    console.log(">>>Navigaton finished")
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