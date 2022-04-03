import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Header.css'

const Header = () => {
    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });
      
        return (
          <div>
            <Link
              style={{ color: match ? "#EA2027" : "#FFF" }}
              to={to}
              {...props}
            >
              {children}
            </Link>
          </div>
        );
      }

    return (
        <nav>
            <div className="container">
                <h3>Hyper Sneakers</h3>

                <div className='navigation'>
                    <CustomLink to='/home'>Home</CustomLink>
                    <CustomLink to='/review'>Review</CustomLink>
                    <CustomLink to='/dashboard'>Dashboard</CustomLink>
                    <CustomLink to='/blog'>Blog</CustomLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;