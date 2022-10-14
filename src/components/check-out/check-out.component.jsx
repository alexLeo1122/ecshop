// import './cart-dropdown.styles.scss'
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartItemsContext } from '../../contexts/CartItems.context';
import { CartItem } from '../cart-item/cart-item.component';
import { ascending, calTotal } from '../../utils/functions.utils/functions.utils';
import "./check-out.styles.scss"


const CheckOut = () => {
    const {cartItems,handleDeleteItem,setCartItems} = useContext(CartItemsContext);
const sortedCartItems = [...cartItems];
    sortedCartItems.sort(ascending);
const total = calTotal(cartItems);
const backward = "<"; const forward = ">";

const increaseQuant = (product) =>{
    setCartItems(
        cartItems.map((item) =>( item.id !== product.id ? item : 
        {...item, quantity: item.quantity +1}))
    );  
}
const decreaseQuant = (product) =>{
    setCartItems(
        cartItems.map((item) =>( item.id !== product.id ? item : 
                {...item, quantity: (item.quantity <=1 ? 1: item.quantity -1)}
        ))
    );  
}
    return (
        <>
          
            <div className='total'>Total:{" "}${total}</div>
            <div className='cart-items' >              
            {sortedCartItems.map(item => (
                        <span key={item.id} className="cart-item-container" >
                        <img src={item.imageUrl} alt="" />
                        <div className='items-checkout'>
                            <span className='name'>{item.name}</span>
                            <button onClick={()=>{decreaseQuant(item)}} >{backward}</button>
                            <span className='price' > {item.quantity} </span>
                            <button onClick={()=>{increaseQuant(item)}} >{forward}</button>
                            <span>${item.price}</span>
                            <button id={item.id} onClick={()=>{handleDeleteItem(item)}} >{" "}X{" "}</button>
                        </div>
                    </span>
                )
            )}
            </div>
            <div className='total'>Total:{" "}${total}</div>



      <Button>Pay NOW</Button>

         








        </>
    );
}


export default CheckOut;