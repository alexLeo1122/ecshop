
export const currentUserSelector = (state) => {
    console.log("currentuserselector fired")
    return state.user.currentUser;
}