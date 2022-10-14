import Button from '../button/button.component';
import { useContext } from 'react';
import { CartItemsContext } from '../../contexts/CartItems.context';
import { ascending, calTotal } from '../../utils/functions.utils/functions.utils';
import CheckoutItem from '../checkout-item/checkout-item.component';
import "./check-out.styles.scss"


const CheckOut = () => {

    const {cartItems} = useContext(CartItemsContext);
    const sortedCartItems = [...cartItems];
        sortedCartItems.sort(ascending);
    const total = calTotal(cartItems);
    return (
        <>
            <div className='checkout-container'>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>Description</span>
                    </div>
                    <div className='header-block'>
                        <span>Quantity</span>
                    </div>
                    <div className='header-block'>
                        <span>Price</span>
                    </div>
                    <div className='header-block'>
                        <span>Remove</span>
                    </div>
                </div>
                {cartItems.map((item) => (
                        <CheckoutItem item={item} key={item.id}  />

                ))}
                    <div className='total'>TOTAL: ${total}</div>
                    <Button>Pay NOW</Button>
            </div>

         








        </>
    );
}


export default CheckOut;