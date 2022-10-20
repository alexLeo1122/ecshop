import { combineReducers } from "redux";
import { cartItemsReducer } from "./cart-items/cart-items.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { UserReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
    user: UserReducer,
    categories: categoriesReducer,
    cartItems: cartItemsReducer
});