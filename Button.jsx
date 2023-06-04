import React from 'react';
import './styles/button.css';

const Button = ({ color, disabled, children }) => {
    return (
        <button style={{ backgroundColor: color }} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
