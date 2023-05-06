import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct, addProduct } from "../actions";

const CartItem = ({ id, image_url, name, price }) => {
    const dispatch = useDispatch();

    const removeFromCart = (e) => {
        dispatch(removeProduct(id))
    }

    const addToCart = (e) => {
        dispatch(addProduct(id))
    }



    return (
        <div key={ id }>
            <img src={ image_url } alt={ name } width={'200px'} />
            <p>{ name }</p>
            <p>{ price} </p>
            <button className="ui icon button" onClick={addToCart}><i className="plus icon"></i></button>
            <button className="ui icon button" onClick={removeFromCart}><i className="minus icon"></i></button>
        </div>
    )

}

export default CartItem;