import './product-card.styles.scss';
import Button from '../button/button.component';
import { CartItemsContext } from '../../contexts/CartItems.context';
import { useContext } from 'react';

let cardIdCount = 0;
const ProductCard = ({product}) => {
    const {name, price, imageUrl,id} = product;
    const {cartItems,setCartItems} =useContext(CartItemsContext);
    const AddItemToCart = () =>{              
        const SelectedItem = cartItems.filter(item=>item.id===id);
        if (SelectedItem.length>0){
            const checkArray = cartItems.filter(item=>{
                return item.id !== id
            });
            setCartItems(
                [
                    ...checkArray,
                    {
                        name,price,imageUrl,id,
                        cartId: SelectedItem[0].cartId,
                        quantity: SelectedItem[0].quantity +1
    
                    }
                ]
    
            );

        }else {
            cardIdCount++;
            setCartItems(
                [
                    ...cartItems,
                    {
                        name,price,imageUrl,id,
                        cartId: cardIdCount+1,
                        quantity: 1    
                    }
                ]
    
            );
        }


        // console.log(SelectedItem[0]);

    }
    return (
            
                <div className='product-card-container' key={id}>  
                    <img src={imageUrl} alt=""/>
                    <div className='footer'>
                        <span className='name'>{name}</span>
                        <span className='price'>{price}</span>
                    </div>
                    <Button buttonType='inverted' key={id} onClick={AddItemToCart}>Add to cart</Button>           
                </div>
            
  );
};

export default ProductCard;