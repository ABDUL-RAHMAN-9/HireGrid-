import React from "react"
import { useNavigate } from "react-router-dom"
import Button from "./Button"

const NotFound = () =>
{
    const navigate = useNavigate();
    const goHome = () =>
    {
        navigate('/');
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center px-4">
            <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Oops! Page Not Found
            </h2>
            <div>
                <Button text='Go Back Home' onClick={goHome} />
            </div>
        </div>
    )
}

export default NotFound
