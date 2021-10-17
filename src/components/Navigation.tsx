import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import './navigation.css';

export const Navigation: React.FC = () => {
    return (
        <div className="logo-container">
            <button className="logo-button">
                <Logo className="logo" />
                <div className="dropdown">
                    <div className="dropdown-content">
                        {/* Make it a list? */}
                        <a className="link" href="/">Services</a>
                        <a className="link" href="/">About</a>
                        <a className="link" href="/">Contact</a>
                    </div>
                </div>
            </button>
        </div>
    )
}