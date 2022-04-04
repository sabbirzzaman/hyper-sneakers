import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import ReviewItem from '../ReviewItem/ReviewItem';
import './ClientReview.css';

const ClientReview = () => {
    const [reviews] = useReview();

    const reviewHome = reviews.slice(0, 3);

    const navigate = useNavigate();

    return (
        <div className="client-review">
            <div className="container">
                <h2>
                    Client Review<span>.</span>
                </h2>
                <div className="review-section">
                    {reviewHome.map((review) => (
                        <ReviewItem
                            key={review.id}
                            review={review}
                        ></ReviewItem>
                    ))}
                </div>
                <div className="review-btn">
                    <button onClick={() => navigate('/review')}>
                        See All Reviews
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;
