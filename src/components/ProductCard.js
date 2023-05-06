import React from "react";


const ProductCard = ({ productId, name, image_url }) => {


    return (
        <div className='ui fluid card' key={ productId }>
            <div className="image">
                <img src={ image_url } alt={ name } width='400px' />
            </div>
            <div className="content">
                <div className="header">{ name }</div>
            </div>
            <div className="extra content">
                <a href={`/products/${productId}`}>See More</a>
            </div>
        </div>
    )
}

export default ProductCard;