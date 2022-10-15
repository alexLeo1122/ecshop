import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../data/SHOP_DATA";
import { setCollection } from "../utils/firebase/firebase.utils";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";



export const ProductsContext = createContext({
    categoriesMap: {}

});




export const ProductsProvider =({children}) => {

    const [products,setProducts] = useState(SHOP_DATA);
    const value = {products, setProducts};    
    // setCollection(SHOP_DATA);
    useEffect(()=>{
        const ref = async()=> {
            const dataLog = await getCategoriesAndDocuments();
            console.log(dataLog);
        };
        ref();
    },[]);
    return ( 
        <ProductsContext.Provider value={value}>
                {children}
        </ProductsContext.Provider>
    )

}    


