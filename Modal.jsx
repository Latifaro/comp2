import React from 'react';
import './styles/modal.css';
const Modal = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div>
            {children}
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default Modal;
