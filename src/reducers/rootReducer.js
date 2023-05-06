import data from '../data.json'
import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actionTypes';

const INITIAL_STATE = { products: data.products, addedToCart: {} }

const rootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_PRODUCT: {
            const cart = { ...state.cartItems };
            cart[action.id] = (cart[action.id] || 0) + 1;
            return {
                ...state,
                cartItems: cart
            }
        }
        case REMOVE_PRODUCT: {
            let cart = { ...state.cartItems };
            console.log(cart)
            console.log(action.payload)
            let cartIds = Object.keys(cart)
            for (let i = 0; i < cartIds.length; i++) {
                if (action.payload === cartIds[i]) {
                    cart[cartIds[i]] = cart[cartIds[i]] - 1;
                }
                if (cart[cartIds[i]] === 0) {
                    delete cart[cartIds[i]];
                }
            }
            
            return {
                ...state,
                cartItems: cart
            }
        }
        default:
            return state;
    }
}

export default rootReducer;