import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () =>
{
    return (
        <div className="min-h-screen flex flex-col justify-between">
            {/* Title & Description - Left Aligned */}
            <div className="max-w-8xl mx-auto mt-55 w-full px-6">
                <h2 className="text-3xl font-bold text-gray-800 text-left">
                    Job Openings
                </h2>
                <p className="text-lg text-gray-600 text-left">
                    List of current job openings in our company.
                </p>
            </div>

            {/* Nested Route Content (Jobs.jsx will render here) */}
            <div className="flex justify-center mb-16">
                <Outlet />
            </div>
        </div>
    )
}

export default JobsLayout
