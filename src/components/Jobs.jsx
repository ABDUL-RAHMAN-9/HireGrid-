import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const Jobs = () =>
{
    const jobs = useLoaderData();

    return (
        <section className="py-16 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-indigo-700">
                🌟 Latest Jobs
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {jobs && jobs.length > 0 ? (
                    jobs.map((job) => (
                        <div
                            key={job.id}
                            className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-2xl shadow hover:shadow-xl transition flex flex-col justify-between border border-indigo-200"
                        >
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-indigo-800">
                                    {job.title}
                                </h3>
                                <p className="text-gray-700 mb-1">
                                    <span className="font-semibold text-indigo-600">💰 Salary: </span>
                                    ${job.salary}
                                </p>
                                <p className="text-gray-700 mb-4">
                                    <span className="font-semibold text-indigo-600">📍 Location: </span>
                                    {job.location}
                                </p>
                            </div>
                            <Link
                                to={`/jobs/${job.id}`}
                                className="mt-auto bg-indigo-600 text-white text-center py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
                            >
                                View Details
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600 col-span-3">
                        No jobs available at the moment.
                    </p>
                )}
            </div>
        </section>
    );
};

export default Jobs;


// jobsLoader.js
export const jobsLoader = async () =>
{
    const res = await fetch("/jobsData.json"); // ✅ fetch from public folder
    if (!res.ok)
    {
        throw Error("Could not fetch jobs.");
    }
    const data = await res.json();
    return data.jobs; // return only the array
};
  