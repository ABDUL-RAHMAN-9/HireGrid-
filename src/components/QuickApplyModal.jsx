import React, { useState } from 'react';

const QuickApplyModal = ({ isOpen, onClose, jobTitle }) =>
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [resumeFile, setResumeFile] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setError(''); // Clear previous errors
        setSubmitted(false); // Reset submitted state

        if (!name || !email || !resumeFile)
        {
            setError('Please fill in all fields and upload a resume.');
            return;
        }

        // Simulate an application submission
        // In a real app, you'd send this data to a backend API
        console.log(`Submitting application for "${jobTitle}"`);
        console.log(`Name: ${name}, Email: ${email}, Resume: ${resumeFile.name}`);

        // Simulate API call delay
        setTimeout(() =>
        {
            setSubmitted(true);
            // Optionally, clear form after successful submission
            setName('');
            setEmail('');
            setResumeFile(null);
            // onClose(); // You might close the modal here or let the user see the success message
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-3xl shadow-2xl w-full max-w-md
                            backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-700 relative
                            transform scale-95 animate-modal-in">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
                >
                    &times;
                </button>

                {!submitted ? (
                    <>
                        <h3 className="text-3xl font-bold text-white mb-4 text-center">
                            Quick Apply for <span className="text-blue-400">{jobTitle}</span>
                        </h3>
                        <p className="text-gray-300 text-center mb-6">
                            Provide your details and upload your resume.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-3 rounded-xl bg-gray-900 bg-opacity-50 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                    placeholder="Your Full Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-3 rounded-xl bg-gray-900 bg-opacity-50 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                    placeholder="your@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="resume" className="block text-gray-300 text-sm font-semibold mb-2">
                                    Upload Resume (PDF, DOCX)
                                </label>
                                <input
                                    type="file"
                                    id="resume"
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) => setResumeFile(e.target.files[0])}
                                    className="w-full text-white text-sm file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-blue-500 file:text-white
                                    hover:file:bg-blue-600 transition-all duration-200
                                    cursor-pointer"
                                    required
                                />
                                {resumeFile && (
                                    <p className="text-gray-400 text-xs mt-2">Selected: {resumeFile.name}</p>
                                )}
                            </div>

                            {error && (
                                <p className="text-red-400 text-center text-sm font-medium">{error}</p>
                            )}

                            <button
                                type="submit"
                                className="w-full py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white
                                           shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-300 ease-in-out
                                           focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                Submit Application
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-8">
                        <h3 className="text-3xl font-bold text-green-400 mb-4">
                            🎉 Application Submitted!
                        </h3>
                        <p className="text-gray-300 text-lg mb-6">
                            Thank you for applying to the <span className="font-semibold text-white">{jobTitle}</span> position.
                        </p>
                        <p className="text-gray-400 mb-6">
                            We appreciate your interest! Our team will review your application
                            and reach out if your qualifications match our needs.
                            Please allow 5-7 business days for a response.
                        </p>
                        <button
                            onClick={onClose}
                            className="px-6 py-3 rounded-xl font-bold text-lg bg-gray-700 text-white
                                       hover:bg-gray-600 transition duration-300 ease-in-out"
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuickApplyModal;