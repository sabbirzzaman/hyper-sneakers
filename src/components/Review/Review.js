import React from 'react';
import useReview from '../../hooks/useReview';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';

const Review = () => {
    const [reviews] = useReview();

    console.log(reviews)

    return (
        <div className="review-container">
            <div className="container">
                <h2>
                    Client Review<span>.</span>
                </h2>

                <div className="review-section">
                    {reviews.map((review) => (
                        <ReviewItem
                            key={review.id}
                            review={review}
                        ></ReviewItem>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Review;
