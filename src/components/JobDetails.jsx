import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Button from './Button'; // Assuming Button.jsx is a styled button component
import QuickApplyModal from './QuickApplyModal';

const JobDetails = () =>
{
    const jobDetails = useLoaderData();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleApplyClick = () =>
    {
        setIsModalOpen(true);
    };

    const handleCloseModal = () =>
    {
        setIsModalOpen(false);
    };

    if (!jobDetails)
    {
        return (
            <div className="text-center py-20 text-2xl font-semibold text-gray-500 max-w-4xl mx-auto
                            backdrop-filter backdrop-blur-xl bg-white/5 border border-gray-700 shadow-lg rounded-2xl">
                Job details could not be loaded or found.
            </div>
        );
    }

    return (
        <>
            {/* Job Details Card */}
            <div className="relative max-w-5xl w-full mx-auto p-8 md:p-12 rounded-3xl overflow-hidden
                            backdrop-filter backdrop-blur-2xl bg-white/5 border border-gray-700 shadow-3xl
                            transform hover:scale-[1.005] transition-all duration-300 ease-in-out">
                {/* Dynamic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-700/10 via-emerald-700/10 to-green-700/10 opacity-70 rounded-3xl pointer-events-none"></div>

                <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    {jobDetails.title}
                </h2>

                <div className="relative z-10 text-gray-300 space-y-4 mb-8 text-lg">
                    <p>
                        <span className="font-semibold text-teal-400">💰 Salary: </span>
                        {jobDetails.salary}
                    </p>
                    <p>
                        <span className="font-semibold text-teal-400">📍 Location: </span>
                        {jobDetails.location}
                    </p>
                    {jobDetails.company && (
                        <p>
                            <span className="font-semibold text-teal-400">🏢 Company: </span>
                            {jobDetails.company}
                        </p>
                    )}
                    {jobDetails.type && (
                        <p>
                            <span className="font-semibold text-teal-400">⏱️ Type: </span>
                            {jobDetails.type}
                        </p>
                    )}
                </div>

                {/* Description */}
                {jobDetails.description && (
                    <div className="relative z-10 text-gray-300 leading-relaxed mb-8 border-t border-gray-700 pt-8 mt-8">
                        <h3 className="font-semibold text-2xl md:text-3xl text-white mb-4">Job Overview:</h3>
                        <p className="whitespace-pre-wrap text-lg">{jobDetails.description}</p>
                    </div>
                )}

                {/* Buttons */}
                <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-10">
                    <Button
                        text="Apply Now"
                        onClick={handleApplyClick}
                        className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600
                                   transform hover:scale-105 transition-all duration-200 shadow-lg"
                    />
                    <Button
                        text="Go Back"
                        onClick={() => navigate(-1)}
                        className="w-full sm:w-auto bg-gray-700 hover:bg-gray-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    />
                </div>
            </div>

            {/* Quick Apply Modal */}
            <QuickApplyModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                jobTitle={jobDetails.title}
            />
        </>
    );
};

export default JobDetails;

// jobDetailsLoader remains the same as previously corrected
export const jobDetailsLoader = async ({ params }) =>
{
    const { id } = params;
    const res = await fetch("/jobsData.json");
    if (!res.ok)
    {
        throw new Error("Could not fetch jobs data file.");
    }
    const data = await res.json();
    const allJobs = data.jobs;
    const job = allJobs.find(j => j.id === parseInt(id));
    if (!job)
    {
        throw new Response("Job not found", { status: 404 });
    }
    return job;
};