import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../data/SHOP_DATA";
// import { setCollection } from "../utils/firebase/firebase.utils";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";



export const CategoriesContext = createContext({
    categoriesMap: {}
});




export const ProductsProvider =({children}) => {

    const [categoriesMap,setCategoriesMap] = useState({});
    useEffect(()=>{
        const ref = async()=> {
            const dataLog = await getCategoriesAndDocuments();
            setCategoriesMap(dataLog);
        };
        ref();
    },[]);
    const value = {categoriesMap, setCategoriesMap};    
    // const keys = categoriesMap.keys;
    console.log(categoriesMap);
    return ( 
        <CategoriesContext.Provider value={value}>
                {children}
        </CategoriesContext.Provider>
    )

}    


