



export const ascending = (a,b) => a.cartId - b.cartId;
export const calTotal = (arr) => {
    return arr.reduce((pre,curItem)=> pre + (curItem.quantity*curItem.price), 0);
}
