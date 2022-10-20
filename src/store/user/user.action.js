import { createAction } from "../../utils/functions.utils/functions.utils";
import { UserAction } from "./user.types";
export const setCurrentUser = (user) =>{
   return createAction(UserAction.SET_CURRENT_USER,user);
}