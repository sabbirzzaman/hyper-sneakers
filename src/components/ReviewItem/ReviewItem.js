import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ review }) => {
    const { image, message, name, rating } = review;

    return (
        <div className="review-item">
            <img src={image} alt={name} />

            <div className='message'>
                <p><small>{message}</small></p>
                <p><small>Rating: {rating} Star</small></p>
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default ReviewItem;
