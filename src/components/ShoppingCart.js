import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import './ShoppingCart.css';

const ShoppingCart = () => {
    let cart;
    let cartIds;
    let products;
    let productIds;
    let cartProductArray = [];
    
  
    cart = useSelector(state => state.cartItems)
    products = useSelector(state => state.products)

    console.log(cart)
  
    if (cart === undefined) {
      return (
        <div className="header-box">
          <h3>You have not put anything in your cart yet!</h3>
        </div>
      )
    }


    cartIds = Object.keys(cart);
    productIds = Object.keys(products);
    for (let i = 0; i < cartIds.length; i++) {
      for (let j = 0; j < productIds.length; j++) {
        if (cartIds[i] === productIds[j]) {
          cartProductArray = [...cartProductArray, productIds[j]]
        }
      }
    }
    
    let quantities = Object.values(cart)
    console.log(quantities)

    return (
      cartProductArray.map(c => 
        <li key={c}>            
            <CartItem 
                id={c}
                price={products[c].price}
                name={products[c].name}
                description={products[c].description}
                image_url={products[c].image_url}
            />
        </li>
        )
    )
  
}

export default ShoppingCart;