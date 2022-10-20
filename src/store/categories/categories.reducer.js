import { CATEGORIES_ACTIONS } from "./categories.types";




export const INITIAL_STATE_CATEGORIES = {
    categories : []
  };
export const  categoriesReducer = ( state = INITIAL_STATE_CATEGORIES, action)=>{
    switch (action.type) {
        case  CATEGORIES_ACTIONS.SET_CATEGORIES:{
            return {...state, 
                    categories: action.payload  }
        }      
        default:{
            return state;
        }
           
    }
}
