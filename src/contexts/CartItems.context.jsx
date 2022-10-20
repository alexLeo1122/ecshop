import { createContext, useReducer } from "react";
import { DeleteItemReducer,AddItemReducer, DecreaseQuantReducer, IncreaseQuantReducer} from "../utils/functions.utils/functions.utils"

let cardIdCount = 0;
export const CartItemsContext = createContext({
    }
);
const INITIAL_STATE = {    
    cartItems: [],
    itemsCount: 0,
    totalAmount: 0,
    isCartOpen: false
};
const CART_ITEMS_ACTIONS = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
    SET_IS_CART_OPEN: "SET_IS_CART_OPEN"
}

const CartItemsReducer = (state, action)=> {
    const {type, payload} = action;
     switch (type) {
        case CART_ITEMS_ACTIONS.SET_CART_ITEMS:{ 
            return {...state,...payload}
        }
        case CART_ITEMS_ACTIONS.SET_IS_CART_OPEN:{ 
            return {...state, isCartOpen: payload}
        }
        default:{
            throw Error('Unknown action.');
        }           
    }
}

export const CartItemsProvider =({children}) => {
    const [state, dispatch] = useReducer(CartItemsReducer,INITIAL_STATE);
    const {cartItems, totalAmount, itemsCount, isCartOpen} = state;
    // console.log(cartItems);    

    const setIsCartOpen = (bool) =>{
        dispatch({type: CART_ITEMS_ACTIONS.SET_IS_CART_OPEN, payload: bool});
    }
    const AddItemToCart = (product) => { 
        dispatch({type: CART_ITEMS_ACTIONS.SET_CART_ITEMS, payload: AddItemReducer(state,product,cardIdCount)})
    }       
    const handleDeleteItem = (product) => {
        dispatch({type: CART_ITEMS_ACTIONS.SET_CART_ITEMS, payload: DeleteItemReducer(state,product)})
    }
    const increaseQuant = (product)=>{
        dispatch({type: CART_ITEMS_ACTIONS.SET_CART_ITEMS, payload:  IncreaseQuantReducer(state,product)});
    }
    const decreaseQuant = (product)=>{
        dispatch({type: CART_ITEMS_ACTIONS.SET_CART_ITEMS, payload:  DecreaseQuantReducer(state,product)});
    }
    if (isCartOpen === true && cartItems.length === 0) {setIsCartOpen(false);} 

    const value = {AddItemToCart, cartItems,totalAmount,itemsCount,isCartOpen,setIsCartOpen,handleDeleteItem, increaseQuant,decreaseQuant}
    return ( 
        <CartItemsContext.Provider value={value}>
                {children}
        </CartItemsContext.Provider>
    )
}    

