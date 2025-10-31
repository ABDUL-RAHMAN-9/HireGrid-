import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const JobsLayout = () =>
{
    const navigate = useNavigate();

    const handleSubmitResume = () =>
    {
        // This could navigate to a dedicated "Submit Resume" page,
        // open a larger modal, or redirect to an external ATS career page.
        alert("Redirecting to the comprehensive 'Submit Resume' form (placeholder).");
        // Example: navigate('/submit-resume');
    };

    return (
        <div className="min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8
                        bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-200 font-sans">

            {/* Title & Description Header - Enhanced Glassy Card */}
            <div className="relative max-w-5xl w-full mx-auto p-8 md:p-12 mb-16 rounded-3xl overflow-hidden
                            backdrop-filter backdrop-blur-2xl bg-white/5 border border-gray-700 shadow-3xl
                            transform hover:scale-[1.005] transition-all duration-300 ease-in-out">
                {/* Dynamic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-700/10 via-blue-700/10 to-purple-700/10 opacity-70 rounded-3xl pointer-events-none"></div>

                <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold text-white mb-5 text-center leading-tight tracking-tight">
                    Your Next Career <span className="text-blue-400">Adventure</span> Awaits
                </h2>
                <p className="relative z-10 text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
                    Explore a curated selection of roles with innovative companies.
                    Find where your talent can make the biggest impact.
                </p>
            </div>

            {/* Nested Route Content (Jobs.jsx or JobDetails.jsx will render here) */}
            <div className="flex-grow w-full max-w-7xl mb-16">
                <Outlet />
            </div>

            {/* Decorative Separator */}
            <div className="w-2/3 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-16 opacity-30"></div>

            {/* Call to Action for Applications - Enhanced Glassy Card */}
            <div className="relative max-w-3xl w-full mx-auto p-8 md:p-10 rounded-3xl overflow-hidden
                            backdrop-filter backdrop-blur-2xl bg-white/5 border border-gray-700 shadow-3xl
                            transform hover:scale-[1.005] transition-all duration-300 ease-in-out">
                {/* Dynamic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-700/10 via-pink-700/10 to-red-700/10 opacity-70 rounded-3xl pointer-events-none"></div>

                <h3 className="relative z-10 text-3xl md:text-4xl font-bold text-white mb-5 text-center leading-tight">
                    Didn't Spot Your Ideal Role?
                </h3>
                <p className="relative z-10 text-lg text-gray-300 mb-8 text-center max-w-xl mx-auto">
                    Join our talent community! Submit your profile, and we'll connect you
                    with opportunities that match your unique skills and aspirations.
                </p>
                <button
                    onClick={handleSubmitResume}
                    className="relative z-10 px-10 py-4 rounded-full font-bold text-lg
                               bg-gradient-to-r from-purple-600 to-pink-600 text-white
                               shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 ease-in-out
                               focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50
                               w-full sm:w-auto" // Full width on small screens, auto on larger
                >
                    Submit Your Resume &rarr;
                </button>
            </div>
        </div>
    );
};

export default JobsLayout;