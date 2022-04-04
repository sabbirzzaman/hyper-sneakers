import React from 'react';
import Rating from 'react-rating';

import './ReviewItem.css';

const ReviewItem = ({ review }) => {
    const { image, message, name, rating } = review;

    return (
        <div className="review-item">
            <img src={image} alt={name} />

            <div className="message">
                <p>
                    <small>{message}</small>
                </p>
                <p>
                    <small>
                        <Rating
                            className="rating-icon"
                            emptySymbol="fa fa-star-o fa-2x"
                            fullSymbol="fa fa-star fa-2x"
                            fractions={2}
                            initialRating={rating}
                            readonly
                        />
                    </small>
                </p>
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default ReviewItem;
