



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

export const AddItemReducer =(state, product_to_add,cardIdCount)=>{
    const {cartItems} = state;
    const {id} = product_to_add;
    const isProductExist = cartItems.find(item=>item.id===id);
    if (isProductExist){
        const newCartItems = cartItems.map((item) =>
        ( item.id !== id ? item :  {...item, quantity: isProductExist.quantity +1}))
        return UpdateStateReducer(newCartItems);                             
    } else {
        cardIdCount++;
        const newCartItems =  [
            ...cartItems, {
            ...product_to_add,
            cartId: cardIdCount,
            quantity: 1    
        }]
        return UpdateStateReducer(newCartItems);                             
                          

    }
}

export const DeleteItemReducer = (state, product_to_delete) =>{
    const {cartItems} = state;
    const {id} = product_to_delete;
    const newCartItems = cartItems.filter(item=> item.id !== id);
    return UpdateStateReducer(newCartItems);                             

}

export const IncreaseQuantReducer = (state, product)=>{
    const {cartItems} = state;
    const {id} = product;

    const newCartItems =  cartItems.map((item) =>( item.id !== id ? item : 
       {...item, quantity: Number(item.quantity) +1}));
       return UpdateStateReducer(newCartItems);                             
                            

}


export const DecreaseQuantReducer = (state, product)=>{
    const {cartItems} = state;
    const {id} = product;
    const newCartItems =    cartItems.map((item) =>( item.id !== id ? item : 
        {...item, quantity: (item.quantity <=1 ? 1: item.quantity -1)}));
        return UpdateStateReducer(newCartItems);                             
                            

}

export const createAction = (type,payload)=> ({type,payload});