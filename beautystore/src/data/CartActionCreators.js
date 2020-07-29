import { ActionTypes} from "./Types";

//The shopping cart will allow the user to
// select several products in a single purchase before checking out
export const addToCart = (product, quantity) => ({
    type: ActionTypes.CART_ADD,
    payload: {
        product,
        quantity: quantity || 1
    }
});

export const updateCartQuantity = (product, quantity) => ({
    type: ActionTypes.CART_UPDATE,
    payload: { product, quantity }
})
export const removeFromCart = (product) => ({
    type: ActionTypes.CART_REMOVE,
    payload: product
})
export const clearCart = () => ({
    type: ActionTypes.CART_CLEAR
})