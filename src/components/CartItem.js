import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct, addProduct } from "../actions";
import './CartItem.css'

const CartItem = ({ id, image_url, name, price, quantity }) => {
    const dispatch = useDispatch();

    const removeFromCart = (e) => {
        dispatch(removeProduct(id))
    }

    const addToCart = (e) => {
        dispatch(addProduct(id))
    }

    console.log(quantity)

    return (
        <div className='ui three column grid' key={ id }>
            <div className='column'></div>
            <div className='column'>
                <div className='ui raised card'>
                    <div className="image">
                        <img src={ image_url } alt={ name } width={'200px'} />  
                    </div>
                    <div className="content">
                        <div className="header">{ name }</div>
                    </div>
                    <div className="extra content">
                        <p>{ price} </p>
                    </div>
                    <div className='extra content'>
                        <button className="ui icon button" onClick={addToCart}><i className="plus icon"></i></button>
                        <span className='cart-item' ><strong>{ quantity }</strong></span>
                        <button className="ui icon button" onClick={removeFromCart}><i className="minus icon"></i></button>
                    </div>
                    <div className='extra content float right'>Product total: { quantity * price }</div>
                </div>
            </div>
            <div className='column'></div>
        </div>

    )

}

export default CartItem;