import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import './ShoppingCart.css';

const ShoppingCart = () => {
    let cart;
    let cartIds;
    let cartValue;
    let products;
    let productIds;
    let cartProductArray = [];
    
  
    cart = useSelector(state => state.cartItems)
    products = useSelector(state => state.products)
    cartValue = useSelector(state => state.cartValue)

    console.log(cartValue)

    if (cart === undefined || Object.values(cart).length === 0) {
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
    

    return (
      <div>
        <div>
          {cartProductArray.map(c => 
            <div key={c}>            
                <CartItem 
                    id={c}
                    price={products[c].price}
                    name={products[c].name}
                    description={products[c].description}
                    image_url={products[c].image_url}
                    quantity={cart[c]}
                />
            </div>
            )}
        </div>
        <div className="ui divider"></div>
        <div className="ui segment">
          <div className='ui floated left'><h3>Cart Total: {cartValue.toFixed(2)}</h3></div>
        </div>
        <div className="ui divider"></div>
      </div>
      
    )
  
}

export default ShoppingCart;