import React from 'react';
import Hero from '../Hero/Hero';
import HomeReview from '../ClientReview/ClientReview';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HomeReview></HomeReview>
        </div>
    );
};

export default Home;
