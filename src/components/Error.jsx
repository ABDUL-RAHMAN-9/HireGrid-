import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Error = () =>
{
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center text-2xl">
            <AlertTriangle size={60} className="text-red-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">
                Oops, something went wrong
            </h3>
        </div>
    );
};

export default Error;
