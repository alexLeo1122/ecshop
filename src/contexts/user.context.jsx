import { createContext,useState, useEffect, useReducer } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser:null,
    setCurrentUser: ()=>null
});


const UserAction = {
    SET_CURRENT_USER: "SET_CURRENT_USER"
}
const INITIAL_STATE = {
    currentUser: null,
  };
function UserReducer(state, action) {
    switch (action.type) {
        case  UserAction.SET_CURRENT_USER:{
            return {...state, 
                    currentUser: action.payload  }
        }      
        default:{
            throw Error('Unknown action.');
        }
           
    }
}





export const UserProvider = ({children})=>{
    // const [currentUser,setCurrentUser] = useState(null);
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
    const {currentUser} = state;
    const setCurrentUser = (user) =>{
        dispatch({
            type: UserAction.SET_CURRENT_USER,
            payload: user
        });
    }

    // signOutAuth();
    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);                
            console.log(user)
        });
        return unsubscribe;
    },[]);
    const value = {currentUser,setCurrentUser};
    return( 
    <UserContext.Provider value={value}>
    {children}
    </UserContext.Provider>)

}