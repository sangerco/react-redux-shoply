import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ productId, name, image_url }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/products/${productId}`)
    }


    return (
        <div className='ui fluid card' key={ productId }>
            <div className="image">
                <img src={ image_url } alt={ name } width='400px' />
            </div>
            <div className="content">
                <div className="header">{ name }</div>
            </div>
            <div className="extra content">
                <button className='ui button' onClick={handleClick}>See More</button>
            </div>
        </div>
    )
}

export default ProductCard;