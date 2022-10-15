
import { useContext } from "react";
import { CartItemsContext } from "../../contexts/CartItems.context";
import "./checkout-item.styles.scss";





const CheckoutItem = ({item}) => {
    const {handleDeleteItem, increaseQuant, decreaseQuant} = useContext(CartItemsContext);  
  return (
        <>
            <div key={item.id} className="checkout-item-container" >
                <div className='image-container'>                
                    <img src={item.imageUrl} alt="" />
                </div>
                    <span className='name'>{item.name}</span>
                    <div className="quantity" >
                        <div className="arrow" onClick={()=>{decreaseQuant(item);}} > &#10094;</div>
                        <span className='value' > {item.quantity} </span>
                        <div className="arrow" onClick={()=>{increaseQuant(item);}} >&#10095;</div>
                    </div>
                    <span className="price" >${item.price}</span>
                    <div className="remove-button" id={item.id} onClick={()=>{handleDeleteItem(item)}} >&#10005;</div>
                    


            </div>
        </>
  );
};


export default CheckoutItem;