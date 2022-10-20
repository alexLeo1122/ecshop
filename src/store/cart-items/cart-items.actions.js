import { createAction, DecreaseQuantReducer, IncreaseQuantReducer } from "../../utils/functions.utils/functions.utils";
import { CART_ITEMS_ACTIONS_TYPES } from "./cart-items.types";
import { AddItemReducer } from "../../utils/functions.utils/functions.utils";
import { DeleteItemReducer } from "../../utils/functions.utils/functions.utils";
export const setIsCartOpen = (dispatch,payload=true) => {      
    dispatch(createAction(CART_ITEMS_ACTIONS_TYPES.SET_IS_CART_OPEN,payload));
}


export const AddItemToCart = (dispatch, cartItems, product_to_add)=> {
    dispatch(createAction(CART_ITEMS_ACTIONS_TYPES.SET_CART_ITEMS,
        AddItemReducer(cartItems,product_to_add)))
}

export const DeleteItem = (dispatch, cartItems, product_to_delete) =>{
    dispatch(createAction(CART_ITEMS_ACTIONS_TYPES.SET_CART_ITEMS, 
        DeleteItemReducer(cartItems, product_to_delete) ))
}


export const increaseQuant = (dispatch, cartItems,product)=>{
    dispatch(createAction(CART_ITEMS_ACTIONS_TYPES.SET_CART_ITEMS,
        IncreaseQuantReducer(cartItems,product)));
}

export const decreaseQuant = (dispatch, cartItems,product)=>{
    dispatch(createAction(CART_ITEMS_ACTIONS_TYPES.SET_CART_ITEMS,
        DecreaseQuantReducer(cartItems,product)));
}

