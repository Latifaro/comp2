import React from 'react';
import './styles/lightbox.css';
const Lightbox = ({ images, size, show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div>
            {images.map((image, index) => (
                <img key={index} src={image} style={{ width: size }} alt={`Image ${index}`} />
            ))}
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default Lightbox;
