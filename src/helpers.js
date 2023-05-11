const computeCartTotal = (cart, products) => {
    let cartSubtotals = [];
    const cartIds = Object.keys(cart);
    const productIds = Object.keys(products);
    for (let i = 0; i < cartIds.length; i++) {
        for (let j = 0; j < productIds.length; j++) {
            if (cartIds[i] === productIds[j]) {
                let price = products[productIds[j]].price
                let quantity = cart[productIds[j]]
                let itemTotal = price * quantity
                cartSubtotals = [...cartSubtotals, itemTotal ]
            }
        }
    }
    let cartTotal = cartSubtotals.reduce((a, b) => a + b, 0);
    return cartTotal;
}

export default computeCartTotal;