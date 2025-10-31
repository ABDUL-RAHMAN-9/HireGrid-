// src/components/Button.jsx
import React from 'react';

const Button = ({ text, onClick, className = '' }) =>
{
    return (
        <button
            onClick={onClick}
            className={`px-6 py-3 rounded-xl font-bold text-lg
                       bg-indigo-600 text-white shadow-lg
                       hover:bg-indigo-700 transition duration-300 ease-in-out
                       focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50
                       ${className}`} // Allows external classes to be passed
        >
            {text}
        </button>
    );
};

export default Button;