import React from 'react'

const Button = ({ text, onClick }) =>
{
    return (
        <div>
            <button className="bg-black text-white rounded-2xl px-4 py-2 hover:bg-gray-800 transition"
                onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

export default Button
