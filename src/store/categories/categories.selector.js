import { createSelector } from "reselect";



const selectCategories1 = (state) =>{ 
    console.log("selectCategories1 1 fired");
    return  (state.categories)
};

const selectCategories2 = createSelector([selectCategories1],
   
    (categories)=> {
        console.log("selectCategories1 2 fired");
        return categories.categories}

);

export const categoriesMapSelector =  createSelector([selectCategories2],       
        (categoriesArr)=> {
            console.log("selectCategories1 3 fired");
            return categoriesArr.reduce((acc,category)=>{
                const {title,items} =category;
                acc[title.toLowerCase()] = items;
                return acc;
            },{})
        }
    );


  


    // console.log('categoriesMapSelector fired');  
    // const categoriesMap =  state.categories.categories.reduce((acc,category)=>{
    //     const {title,items} =category;
    //     acc[title.toLowerCase()] = items;
    //     return acc;
    // },{})
    // console.log("Selector/cartegoriesMaps",categoriesMap);
    // return categoriesMap;

