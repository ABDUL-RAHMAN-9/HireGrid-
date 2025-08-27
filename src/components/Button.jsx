import React from 'react'

const Button = ({ text, onClick }) =>
{
    return (
        <button
            className="bg-black text-white text-xl rounded-2xl px-4 py-2 hover:bg-gray-800 transition"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
