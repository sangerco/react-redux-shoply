import data from '../data.json'
import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actionTypes';
import computeCartTotal from '../helpers';

const INITIAL_STATE = { 
    products: data.products, 
    addedToCart: {},
    cartValue: 0.0
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_PRODUCT: {
            const cart = { ...state.cartItems };
            cart[action.id] = (cart[action.id] || 0) + 1;
            const products = state.products;
            const cartTotal = computeCartTotal(cart, products)
            return {
                ...state,
                cartItems: cart,
                cartValue: cartTotal
            }
        }
        case REMOVE_PRODUCT: {
            let cart = { ...state.cartItems };
            let cartIds = Object.keys(cart)
            for (let i = 0; i < cartIds.length; i++) {
                if (action.payload === cartIds[i]) {
                    cart[cartIds[i]] = cart[cartIds[i]] - 1;
                }
                if (cart[cartIds[i]] === 0) {
                    delete cart[cartIds[i]];
                }
            }
            const products = state.products;
            const cartTotal = computeCartTotal(cart, products)
            
            return {
                ...state,
                cartItems: cart,
                cartValue: cartTotal
            }
        }
        default:
            return state;
    }
}

export default rootReducer;