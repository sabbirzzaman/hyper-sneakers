import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css'

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <h1>Sneakers For You<span>.</span></h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation.
                    </p>
                    <button onClick={() => navigate('/dashboard')}>Our Dashboard</button>
                </div>
                <div></div>
            </div>
        </section>
    );
};

export default Hero;