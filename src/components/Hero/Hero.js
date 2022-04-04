import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <h1>
                        Sneakers For You<span>.</span>
                    </h1>
                    <p>
                        From exclusive drops to regular updates of the season's
                        best luxury and sportswear pairs, Hyper Sneakers is an
                        emerging power in the world of online sneaker stores.
                        Discover the latest available.
                    </p>
                    <button onClick={() => navigate('/dashboard')}>
                        Our Dashboard
                    </button>
                </div>
                <div></div>
            </div>
        </section>
    );
};

export default Hero;
