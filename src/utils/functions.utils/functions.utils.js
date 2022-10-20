// import { cardIdCount } from "../../store/cart-items/cart-items.actions";



export const ascending = (a,b) => a.cartId - b.cartId;
export const CalTotalAmount = (arr) => {
    return arr.reduce((pre,curItem)=> pre + (curItem.quantity*curItem.price), 0);
}


export const CalTotalItems = (cartItems) =>{
    let totalItems = 0;
    cartItems.forEach(element => {
      totalItems += element.quantity 
    });
    return totalItems
}

export const UpdateStateReducer = (newCartItems) =>{
    const newItemsCount = CalTotalItems(newCartItems);
    const newTotalAmount = CalTotalAmount(newCartItems);
        return {         
            cartItems:  newCartItems,
            itemsCount: newItemsCount,
            totalAmount: newTotalAmount    
        }     
}
let cardIdCount = 0;
export const AddItemReducer =(cartItems, product_to_add)=>{   
    const {id} = product_to_add;
    const isProductExist = cartItems.find(item=>item.id===id);
    if (isProductExist){
        const newCartItems = cartItems.map((item) =>
        ( item.id !== id ? item :  {...item, quantity: isProductExist.quantity +1}))
        return newCartItems;                             
    } else {
        cardIdCount++;
        const newCartItems =  [
            ...cartItems, {
            ...product_to_add,
            cartId: cardIdCount,
            quantity: 1    
        }]
        return newCartItems;                             
                          

    }
}

export const DeleteItemReducer = (cartItems, product_to_delete) =>{
   
    const {id} = product_to_delete;
    const newCartItems = cartItems.filter(item=> item.id !== id);
    return newCartItems;                             

}

export const IncreaseQuantReducer = (cartItems, product)=>{
    console.log("IncreaseQuantReducer running")
    const {id} = product;
    const newCartItems =  cartItems.map((item) =>( item.id !== id ? item : 
       {...item, quantity: item.quantity +1}));
    //    const payload = UpdateStateReducer(newCartItems)
       return newCartItems;                             
}


export const DecreaseQuantReducer = (cartItems, product)=>{

    const {id} = product;
    const newCartItems =    cartItems.map((item) =>( item.id !== id ? item : 
        {...item, quantity: (item.quantity <=1 ? 1: item.quantity -1)}));
        return newCartItems;                             
}

export const createAction = (type,payload)=> ({type,payload});