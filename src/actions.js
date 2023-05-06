import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";

export const addProduct = (id) => ({ type: ADD_PRODUCT, id });
export const removeProduct = (id) => ({ type:REMOVE_PRODUCT, payload: id });