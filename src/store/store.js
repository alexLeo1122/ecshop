import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from 'redux-persist/lib/storage'
// import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
const cssRules1 = 'color:  #ff751a; font-size: 14px; font-style: italic';
const cssRules2 = 'color: #4d79ff; font-size: 14px';
const cssRules3 = 'color: #ff1aff; font-size: 14px';
const cssRules4 = 'color: #009900; font-size: 14px';



const MyLogger = store => next => action =>{
    console.log("%c>>>Logger: %cprev-state",cssRules1,cssRules2,store.getState());
    console.log('%c>>>Logger: %cdispatch action', cssRules1,cssRules3 ,action)
    let result = next(action)
    console.log('%c>>>Logger: %cnext-state', cssRules1,cssRules4, store.getState())
    return result
  }
const middleWares = [MyLogger];

const composeEnhancers = compose(applyMiddleware(...middleWares));





const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)









export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);

