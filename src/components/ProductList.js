import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductList = () => {

    const products = useSelector(state => state.products);
    const productIds = Object.keys(products);

    const productMap = productIds.map(p => 
        <div className="ui three column grid" key={p}>
            <div className="column"></div>
            <div className="column">
                <div className='ui raised card'>            
                    <ProductCard 
                        productId={p}
                        name={products[p].name}
                        image_url={products[p].image_url}
                        description={products[p].description}
                        price={products[p].price}
                    />
                </div>
            </div>
            <div className="column"></div>            
        </div>
)

    return (
        <div>
            {productMap}
        </div>
    )
    
}

export default ProductList;

