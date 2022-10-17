import { createContext, useState, useReducer } from "react";

let cardIdCount = 0;
export const CartItemsContext = createContext({
    }
);
const INITIAL_STATE = {    
    cartItems: [],
    itemsCount: 0,
    totalAmount: 0
};
const CART_ITEMS_ACTIONS = {
        ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
        DELETE_CART_ITEM: "DELETE_CART_ITEM",
        INCREASE_QUANTITY: "INCREASE_QUANTITY",
        DECREASE_QUANTITY: "DECREASE_QUANTITY"
}

const AddItemReducer =(state, product_to_add)=>{
    const {cartItems,itemsCount,totalAmount} = state;
    const {id} = product_to_add;
    const isProductExist = cartItems.find(item=>item.id===id);
    if (isProductExist){
        return {         
            cartItems:  cartItems.map((item) =>
            ( item.id !== id ? item :  {...item, quantity: isProductExist.quantity +1})),
            itemsCount: itemsCount +1,
            totalAmount: totalAmount + product_to_add.price        
        }                      
        
    } else {
        cardIdCount++;
        return({
                    cartItems: [
                    ...cartItems, {
                    ...product_to_add,
                    cartId: cardIdCount,
                    quantity: 1    
                }]}                
        );
    }
}


const CartItemsReducer = (state, action)=> {
    const {type, payload} = action;
    // const {id} = payload;
    // const {cartItems} = state;
     switch (type) {
        case CART_ITEMS_ACTIONS.ADD_ITEM_TO_CART:{          
            // const isProductExist = cartItems.find(item=>item.id===id);
            // if (isProductExist){
            //     return ({...state,
            //         cartItems:  cartItems.map((item) =>
            //         ( item.id !== id ? item :  {...item, quantity: isProductExist.quantity +1}))}
            //     );                
                
            // } else {
            //     cardIdCount++;
            //     return({...state,
            //                 cartItems: [
            //                 ...cartItems, {
            //                 ...payload,
            //                 cartId: cardIdCount,
            //                 quantity: 1    
            //             }]}                
            //     );
            // }
            return {
                ...state,
                ...payload
            }


        }
        
        // case CART_ITEMS_ACTIONS.DELETE_CART_ITEM:{
        //     return {...state,
        //          cartItems: cartItems.filter(item=> item.id !== id)
        //     }
        // }

        // case CART_ITEMS_ACTIONS.INCREASE_QUANTITY:{            
        //     return {...state,
        //          cartItems: cartItems.map((item) =>( item.id !== id ? item : 
        //             {...item, quantity: item.quantity +1}))
        //     }
        // }
        // case CART_ITEMS_ACTIONS.DECREASE_QUANTITY:{            
        //     return {
        //             ...state,
        //             cartItems: cartItems.map((item) =>( item.id !== id ? item : 
        //             {...item, quantity: (item.quantity <=1 ? 1: item.quantity -1)}))
        //     }
        // } 
        default:{
            throw Error('Unknown action.');
        }           
    }
}

export const CartItemsProvider =({children}) => {
    // const [cartItems, setCartItems] = useState([]);
    const [state, dispatch] = useReducer(CartItemsReducer,INITIAL_STATE);
    const {cartItems} = state;
    console.log(cartItems);
    const [isCartOpen, setIsCartOpen] = useState(false);
    if (isCartOpen === true && state.length === 0) {setIsCartOpen(false);} 

    const AddItemToCart = (product) => { 
        dispatch({
            type: CART_ITEMS_ACTIONS.ADD_ITEM_TO_CART,
            payload: AddItemReducer(state,product)
        })
    }           


    const handleDeleteItem = (product) => {
        dispatch({
            type: CART_ITEMS_ACTIONS.DELETE_CART_ITEM,
            payload: product
        })

    }
    const increaseQuant = (product)=>{
        dispatch({
            type: CART_ITEMS_ACTIONS.INCREASE_QUANTITY,
            payload:  product
        });
    }
    const decreaseQuant = (product)=>{
        dispatch({
            type: CART_ITEMS_ACTIONS.DECREASE_QUANTITY,
            payload:  product
        });
    }


    const value = {AddItemToCart, cartItems,isCartOpen,setIsCartOpen,handleDeleteItem, increaseQuant,decreaseQuant}
    return ( 
        <CartItemsContext.Provider value={value}>
                {children}
        </CartItemsContext.Provider>
    )
}    

