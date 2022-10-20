import { CATEGORIES_ACTIONS } from "./categories.types";
import { createAction } from "../../utils/functions.utils/functions.utils";



export const setCategories = (categoriesArr)=> createAction(CATEGORIES_ACTIONS.SET_CATEGORIES,categoriesArr);