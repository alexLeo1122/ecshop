import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/categories.reducer";
import { UserReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
    user: UserReducer,
    categories: categoriesReducer
});