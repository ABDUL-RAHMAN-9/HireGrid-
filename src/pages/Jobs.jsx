import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Jobs = () =>
{
  const jobsData = useLoaderData();

  return (
    <div className="min-h-screen py-10 px-6">
      {/* Left-aligned heading */}
      <h3 className="text-2xl font-bold text-gray-800 mb-8 text-left">
        Available Jobs
      </h3>

      {/* Grid of job cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {jobsData.map((job) => (
          <Link
            key={job.id}
            to={`/jobs/${job.id}`}
            className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl 
                       hover:scale-105 transform transition duration-300 ease-in-out border border-gray-300"
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              {job.title}
            </h4>
            <p className="text-gray-600 text-sm mb-2">📍{job.location}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Jobs;


export const jobsLoader = async () =>
{
  const res = await fetch("http://localhost:5000/jobs");
  return res.json();
};
