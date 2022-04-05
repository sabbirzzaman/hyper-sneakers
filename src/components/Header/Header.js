import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [open, setOpen] = useState(false);

    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={{ color: match ? '#fbd602' : '' }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }

    const navigate = useNavigate();

    return (
        <nav>
            <div className="container">
                <h3 onClick={() => navigate('/')}>Hyper Sneakers</h3>

                <div>
                    <div className={!open ? 'navigation hide' : 'navigation'}>
                        <CustomLink to="/home">Home</CustomLink>
                        <CustomLink to="/review">Review</CustomLink>
                        <CustomLink to="/dashboard">Dashboard</CustomLink>
                        <CustomLink to="/blog">Blog</CustomLink>
                    </div>
                    <FontAwesomeIcon onClick={() => setOpen(!open)} className='hamburger' icon={!open ? faBars : faXmark}></FontAwesomeIcon>
                </div>
            </div>
        </nav>
    );
};

export default Header;
