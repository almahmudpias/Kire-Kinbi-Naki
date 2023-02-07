import React from 'react';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useCart } from 'react-use-cart';
const ProductCard = (props) => {
    

    const  { title,price,image,rating} = props.userDetails;
    const { addItem } = useCart();

    return (
        <div className='col-11 col-md6 col-lg-3 mx-0 mb-4'>
            <div class="card p-0 overflow-hidden h-100 shadow">
                <img src={image} class="image-size card-img-top img-fluid" alt="..."/>
                    <div class="card-body text-center">
                        <h5 class="card-title">{title}</h5>
                        <h5 class="card-price">{price}</h5>
                        <p class="card-text"><FontAwesomeIcon className='star' icon={faStar}/>{rating.rate} by {rating.count} people</p>
                        <button class="btn btn-success btn" onClick={ () => addItem(props.userDetails)}>Add to Cart</button>
                    </div>
            </div>
        </div>
    );
};

export default ProductCard;