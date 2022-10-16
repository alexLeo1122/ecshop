import {Outlet, Link} from 'react-router-dom';
import { useContext } from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';
import { signOutAuth } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartItemsContext } from '../../contexts/CartItems.context';


const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {cartItems,isCartOpen} = useContext(CartItemsContext);
    return (
        <>
            <div className="navigation">
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo'/>
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='shop'>
                        SHOP
                    </Link>
                    {currentUser?<span className = "nav-link" onClick={signOutAuth}>SIGN OUT</span>:
                        (<Link className='nav-link' to='sign-in'>
                        SIGN IN
                        </Link>)                   
                    }
                    <CartIcon />                  
                </div>
                    { (isCartOpen && cartItems.length>0) ? <CartDropdown />:null}
            </div>
            <Outlet />
        </>
      
    );
  };

export default Navigation;