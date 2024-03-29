import React from 'react';

const Modal = ({ image, alt, onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="max-w-lg w-full bg-white p-4 rounded-lg overflow-hidden">
                <img src={image} alt={alt} className="w-full h-full object-cover" />
                <button className="absolute top-0 right-0 p-2" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
