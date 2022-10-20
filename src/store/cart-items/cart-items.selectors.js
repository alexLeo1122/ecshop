import { createSelector } from "reselect";
import { CalTotalItems } from "../../utils/functions.utils/functions.utils";
import { CalTotalAmount } from "../../utils/functions.utils/functions.utils";



const cartItemsSelector1 = (state) => state.cartItems;



export const cartItemsSelector = createSelector(cartItemsSelector1,(cartItems)=>{
    return cartItems.cartItems;
})

export const isCartOpenSelector = createSelector(cartItemsSelector1,(cartItems)=>{
    return cartItems.isCartOpen;
})
// export const itemsCountSelector = createSelector(cartItemsSelector,(cartItems)=>{
//     return cartItems.itemsCount;
// })

// export const totalAmountSelector = createSelector(cartItemsSelector,(cartItems)=>{
//     return cartItems.totalAmount;
// })

export const itemsCountSelector = createSelector(cartItemsSelector1,(cartItems)=>{
    return CalTotalItems(cartItems.cartItems);
})


export const totalAmountSelector = createSelector(cartItemsSelector1,(cartItems)=>{
    return CalTotalAmount(cartItems.cartItems);
})
