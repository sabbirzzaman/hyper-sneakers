import React from 'react';
import useReview from '../../hooks/useReview';
import ReviewItem from '../ReviewItem/ReviewItem';
import './ClientReview.css';

const ClientReview = () => {
    const [reviews] = useReview();

    return (
        <div className="client-review">
            <div className="container">
                <h2>
                    Client Review<span>.</span>
                </h2>
                <div className="review-container">
                    {reviews.map(review => <ReviewItem key={review.id} review={review}></ReviewItem>)}
                </div>
            </div>
        </div>
    );
};

export default ClientReview;
