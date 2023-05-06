import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../actions";
import { useParams } from "react-router-dom";


const ProductDetail = ({ productId, name, price, description, image_url }) => {
    const dispatch = useDispatch();
    let foundProduct = [];

    const addToCart = (e) => {
        dispatch(addProduct(id))
    }

    const { id } = useParams();

    const products = useSelector(state => state.products);
    const productIds = Object.keys(products);

    for (let i = 0; i < productIds.length; i++) {
        if (id === productIds[i]) {
            foundProduct = [...foundProduct, productIds[i]]
        }
    }


    return (
        foundProduct.map(f => 
            <div className='ui fluid card' key={ products[f].id }>
                <div className="image">
                    <img src={ products[f].image_url } alt={ products[f].name } width='500px' />
                </div>
                <div className="content">
                    <div className="header">{ products[f].name }</div>
                    <div className="description">{ products[f].description }</div>
                </div>
                <div className="extra content">
                    <span className="right floated">{ products[f].price }</span>
                </div>
                <div className="extra content">
                    <button className='ui button' onClick={addToCart}>Add to Cart</button>
                </div>
            </div>)
    )
}

export default ProductDetail;