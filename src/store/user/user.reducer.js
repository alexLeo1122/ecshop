import { UserAction } from "./user.types";




export const INITIAL_STATE = {
    currentUser: null,
  };
export const  UserReducer=(state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case  UserAction.SET_CURRENT_USER:{
            return {...state, 
                    currentUser: action.payload  }
        }      
        default:{
            return state;
        }
           
    }
}
