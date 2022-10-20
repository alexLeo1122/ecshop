
import { useDispatch, useSelector } from "react-redux";
import { DeleteItem, increaseQuant, decreaseQuant } from "../../store/cart-items/cart-items.actions";
import { cartItemsSelector } from "../../store/cart-items/cart-items.selectors";
// import { DecreaseQuantReducer } from "../../utils/functions.utils/functions.utils";
// import { useContext } from "react";
// import { CartItemsContext } from "../../contexts/CartItems.context";

import "./checkout-item.styles.scss";


const CheckoutItem = ({item}) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(cartItemsSelector);
    // console.log(cartItems);
    // const {handleDeleteItem, increaseQuant, decreaseQuant} = useContext(CartItemsContext);  
    const handleIncreaseQuant = ()=>{
        increaseQuant(dispatch,cartItems,item);
    }
    const handleDecreaseQuant = ()=>{
        decreaseQuant(dispatch,cartItems,item);
    }
    
    const handleDeleteItem = ()=>{
        DeleteItem(dispatch,cartItems,item);
    }
  return (
        <>
            <div key={item.id} className="checkout-item-container" >
                <div className='image-container'>                
                    <img src={item.imageUrl} alt="" />
                </div>
                    <span className='name'>{item.name}</span>
                    <div className="quantity" >
                        {item.quantity<=1? <div className="arrow disabled"  > &#10094;</div> :          
                        <div className="arrow" onClick={handleDecreaseQuant} > &#10094;</div>}
                        <span className='value' > {item.quantity} </span>
                        <div className="arrow" onClick={handleIncreaseQuant} >&#10095;</div>
                    </div>
                    <span className="price" >${item.price}</span>
                    <div className="remove-button" id={item.id} onClick={handleDeleteItem} >&#10005;</div>
                    


            </div>
        </>
  );
};


export default CheckoutItem;