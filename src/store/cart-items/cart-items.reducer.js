
import {CART_ITEMS_ACTIONS_TYPES} from "./cart-items.types"


const INITIAL_STATE = {    
    cartItems: [],
    isCartOpen: false
};


export const cartItemsReducer = (state = INITIAL_STATE, action) =>{
    const {type, payload} = action;
    switch (type) {
        case CART_ITEMS_ACTIONS_TYPES.SET_CART_ITEMS:{
            return {
                ...state,
                cartItems: payload
            }
        }
        case CART_ITEMS_ACTIONS_TYPES.SET_IS_CART_OPEN:{
            return {
                ...state,
                isCartOpen: payload
            }
        }
        default:{
            return state;
        }
    }
}


