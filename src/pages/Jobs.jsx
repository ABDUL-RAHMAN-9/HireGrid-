import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Search, MapPin, DollarSign, Briefcase, Filter, X, Building2 } from 'lucide-react'; // Added Building2 icon

const Jobs = () =>
{
  const jobsData = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterType, setFilterType] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [displayedJobs, setDisplayedJobs] = useState([]);

  useEffect(() =>
  {
    const filtered = jobsData.filter(job =>
    {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()); // Added description to search
      const matchesLocation =
        filterLocation === "" || job.location.toLowerCase().includes(filterLocation.toLowerCase());
      const matchesType =
        filterType === "" || job.type.toLowerCase() === filterType.toLowerCase();
      return matchesSearch && matchesLocation && matchesType;
    });
    setDisplayedJobs(filtered);
  }, [jobsData, searchTerm, filterLocation, filterType]);

  const uniqueLocations = [...new Set(jobsData.map(job => job.location))].sort();
  const uniqueTypes = [...new Set(jobsData.map(job => job.type))].sort();

  const handleClearFilters = () =>
  {
    setSearchTerm("");
    setFilterLocation("");
    setFilterType("");
    setShowFilters(false);
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          Your <span className="text-pink-400">Future</span> Awaits
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Dive into our diverse range of opportunities and find the perfect role
          to elevate your career.
        </p>
      </section>

      {/* Search and Filter Section - Glassy Card */}
      <section className="max-w-7xl mx-auto mb-16 p-6 md:p-8 rounded-3xl
                                backdrop-filter backdrop-blur-2xl bg-white/5 border border-gray-700 shadow-3xl
                                transform hover:scale-[1.005] transition-all duration-300 ease-in-out">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search Input */}
          <div className="relative flex-grow w-full md:w-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by title, company, or keywords..."
              className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-xl
                                       text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500
                                       transition-colors text-lg" // Added text-lg
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Button (for small screens) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl
                                   hover:bg-blue-700 transition duration-300 w-full text-lg"
          >
            {showFilters ? <X className="w-5 h-5" /> : <Filter className="w-5 h-5" />}
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>

          {/* Filters (Desktop visible, Mobile toggled) */}
          <div className={`w-full md:w-auto md:flex flex-col md:flex-row gap-4 ${showFilters ? 'block' : 'hidden md:flex'} mt-4 md:mt-0`}>
            {/* Location Filter */}
            <div className="relative w-full md:w-auto">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-xl
                                           text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500
                                           appearance-none transition-colors text-lg"
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
              >
                <option value="">All Locations</option>
                {uniqueLocations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">&#9662;</span>
            </div>

            {/* Job Type Filter */}
            <div className="relative w-full md:w-auto">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-xl
                                           text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500
                                           appearance-none transition-colors text-lg"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="">All Types</option>
                {uniqueTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">&#9662;</span>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="max-w-7xl mx-auto">
        {displayedJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedJobs.map((job) => (
              <div
                key={job.id}
                className="relative bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden
                                           transform hover:scale-[1.02] transition-all duration-300 ease-in-out
                                           group backdrop-filter backdrop-blur-md cursor-pointer" // Added cursor-pointer
              >
                {/* Glassy gradient overlay for each card */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-700/10 to-blue-700/10 opacity-70 rounded-2xl pointer-events-none"></div>

                {/* Job Image (with improved fallback) */}
                <img
                  src={job.image || 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                  alt={job.title}
                  className="w-full h-52 object-cover rounded-t-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                />

                {/* Job Info */}
                <div className="p-6 text-center relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-2">{job.title}</h2>
                  <p className="text-gray-400 text-lg mb-1 flex items-center justify-center">
                    <Building2 className="w-4 h-4 mr-2 text-pink-400" />
                    {job.company}
                  </p>
                  <div className="flex items-center justify-center text-gray-500 text-base mb-2">
                    <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-300 text-lg font-semibold mb-4">
                    <DollarSign className="w-5 h-5 mr-2 text-green-400" />
                    <span>{job.salary}</span>
                  </div>
                  {job.type && (
                    <div className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-blue-900/40 text-blue-300 border border-blue-700/50 mb-4 tracking-wide">
                      {job.type}
                    </div>
                  )}

                  <Link
                    to={`/jobs/${job.id}`}
                    className="mt-4 inline-block bg-gradient-to-r from-pink-600 to-red-600 text-white font-bold px-8 py-3 rounded-full
                                                   shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
                                                   group-hover:ring-2 group-hover:ring-pink-500 group-hover:ring-offset-2 group-hover:ring-offset-gray-950"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-2xl border border-gray-700 shadow-xl max-w-2xl mx-auto">
            <p className="text-2xl text-gray-400 mb-4">
              No jobs found matching your criteria.
            </p>
            <p className="text-lg text-gray-500 mb-6">
              Try adjusting your search terms or filters.
            </p>
            <button
              onClick={handleClearFilters}
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-8 py-3 rounded-full
                                       hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-md"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Jobs;

// jobsLoader remains the same as previously corrected
export const jobsLoader = async () =>
{
  const res = await fetch("/jobsData.json");
  if (!res.ok)
  {
    throw new Error('Failed to fetch jobs: ' + res.statusText);
  }
  const data = await res.json();
  return data.jobs; // Assuming your JSON is { "jobs": [...] }
};