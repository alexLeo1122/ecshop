import { createContext, useState } from "react";

let cardIdCount = 0;
export const CartItemsContext = createContext({
    }
);

export const CartItemsProvider =({children}) => {
    const [cartItems, setCartItems] = useState([]);
    console.log(cartItems);
    const [isCartOpen, setIsCartOpen] = useState(false);
    if (isCartOpen === true && cartItems.length === 0) {setIsCartOpen(false);} 

    const AddItemToCart = (product) => {             
        const {id} = product; 
        const isProductExist = cartItems.find(item=>item.id===id);
        if (isProductExist){
            setCartItems(
                cartItems.map((item) =>( item.id !== id ? item : 
                {...item, quantity: isProductExist.quantity +1}))
            );                
            
        } else {
            cardIdCount++;
            setCartItems([
                        ...cartItems, {
                        ...product,
                        cartId: cardIdCount,
                        quantity: 1    
                      }
            ]);
        }
    }

    const handleDeleteItem = (product) => {
        const deltetedArray = cartItems.filter(item=> item.id !== product.id)
        setCartItems(deltetedArray);
    }

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
    const value = {cartItems, setCartItems, increaseQuant, decreaseQuant, isCartOpen, setIsCartOpen, AddItemToCart, handleDeleteItem};
    return ( 
        <CartItemsContext.Provider value={value}>
                {children}
        </CartItemsContext.Provider>
    )
}    

