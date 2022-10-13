import { createContext, useState } from "react";


export const CartItemsContext = createContext(
    {
        isCartOpen: false,
        setIsCartOpen: ()=>{},
        cartItems:[],
        setCartItems:()=>{}
    }
);

export const CartItemsProvider =({children}) => {

    const [cartItems,setCartItems] = useState([]);
    const [isCartOpen,setIsCartOpen] = useState(false);
    if(isCartOpen===true&&cartItems.length===0){            
            setIsCartOpen(false);
    }      
    const value = {cartItems, setCartItems, isCartOpen, setIsCartOpen};
    return ( 
        <CartItemsContext.Provider value={value}>
                {children}
        </CartItemsContext.Provider>
    )

}    

