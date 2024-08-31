import React from 'react';
import { X } from 'lucide-react';

const FullScreenImage = ({ image, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
                aria-label="Close full screen image"
            >
                <X size={32} />
            </button>
            <img
                src={image.url}
                alt={image.key}
                className="max-h-full max-w-full object-contain"
            />
        </div>
    );
};

export default FullScreenImage;