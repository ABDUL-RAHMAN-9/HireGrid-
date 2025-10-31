import React, { useState } from "react";
import { Search, MapPin, DollarSign, Briefcase, Filter, X } from 'lucide-react'; // Importing icons from lucide-react
import { Link } from "react-router-dom"; // Assuming you want to link to individual job details

const Jobs = () =>
{
  // Example jobs (12 total)
  const allJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "New York, USA",
      salary: "$80,000 - $100,000",
      image: "https://images.unsplash.com/photo-1539609132458-c27f7960953e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=400",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "CodeWorks",
      location: "San Francisco, USA",
      salary: "$95,000 - $120,000",
      image: "https://images.unsplash.com/photo-1711315062962-4cc218d91b14?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=736",
      type: "Full-time",
    },
    {
      id: 3,
      title: "Full Stack Engineer",
      company: "DevStudio",
      location: "Remote",
      salary: "$100,000 - $130,000",
      image: "https://images.unsplash.com/photo-1637575327080-e756603e9fa1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=400",
      type: "Full-time",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "PixelSoft",
      location: "London, UK",
      salary: "£65,000 - £85,000",
      image: "https://images.unsplash.com/photo-1639903875119-6a9df1bedc52?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400",
      type: "Full-time",
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "DataWorks",
      location: "Toronto, Canada",
      salary: "CAD 110,000 - CAD 140,000",
      image: "https://images.unsplash.com/photo-1575588223275-973f95d390cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE5ldyUyMFlvcmslMkMlMjBVU0F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400",
      type: "Full-time",
    },
    {
      id: 6,
      title: "Mobile App Developer",
      company: "Appify",
      location: "Berlin, Germany",
      salary: "€70,000 - €90,000",
      image: "https://images.unsplash.com/photo-1655390182746-a534f3b58ec1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      type: "Full-time",
    },
    {
      id: 7,
      title: "Cloud Engineer",
      company: "CloudNet",
      location: "Dublin, Ireland",
      salary: "€75,000 - €95,000",
      image: "https://images.unsplash.com/photo-1526258619902-b9bf3e762482?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400",
      type: "Full-time",
    },
    {
      id: 8,
      title: "Machine Learning Engineer",
      company: "AI Labs",
      location: "Remote",
      salary: "$120,000 - $150,000",
      image: "https://images.unsplash.com/photo-1607807494038-1dcd14d7b657?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400",
      type: "Full-time",
    },
    {
      id: 9,
      title: "Cybersecurity Analyst",
      company: "SecureTech",
      location: "Austin, USA",
      salary: "$90,000 - $110,000",
      image: "https://images.unsplash.com/photo-1496487396382-1d123d6549f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400",
      type: "Full-time",
    },
    {
      id: 10,
      title: "DevOps Engineer",
      company: "OpsHub",
      location: "Sydney, Australia",
      salary: "AUD 95,000 - AUD 120,000",
      image: "https://images.unsplash.com/photo-1602481877566-10b03a75a139?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=400",
      type: "Full-time",
    },
    {
      id: 11,
      title: "QA Engineer",
      company: "Testify",
      location: "Bangalore, India",
      salary: "₹12 LPA - ₹18 LPA",
      image: "https://images.unsplash.com/photo-1606720986800-8cb55915d739?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400",
      type: "Full-time",
    },
    {
      id: 12,
      title: "Product Manager",
      company: "VisionTech",
      location: "Remote",
      salary: "$130,000 - $160,000",
      image: "https://plus.unsplash.com/premium_photo-1679280549686-32f321a98b5e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=400",
      type: "Full-time",
    },
    {
      id: 13,
      title: "Technical Writer",
      company: "DocuHub",
      location: "San Jose, USA",
      salary: "$70,000 - $90,000",
      image: "https://images.unsplash.com/photo-1620136577636-148f488735fc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      type: "Contract",
    },
    {
      id: 14,
      title: "Sales Engineer",
      company: "SellSmart",
      location: "Chicago, USA",
      salary: "$90,000 - $110,000",
      image: "https://images.unsplash.com/photo-1604186482935-9c3273835d98?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400",
      type: "Full-time",
    },
    {
      id: 15,
      title: "Project Manager",
      company: "BuildIT",
      location: "Houston, USA",
      salary: "$100,000 - $125,000",
      image: "https://images.unsplash.com/photo-1675022622803-575c3304229c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ0fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400",
      type: "Full-time",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterType, setFilterType] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredJobs = allJobs.filter(job =>
  {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = filterLocation === "" || job.location.toLowerCase().includes(filterLocation.toLowerCase());
    const matchesType = filterType === "" || job.type.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesLocation && matchesType;
  });

  const uniqueLocations = [...new Set(allJobs.map(job => job.location))].sort();
  const uniqueTypes = [...new Set(allJobs.map(job => job.type))].sort();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-200 font-sans py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          Discover Your <span className="text-pink-500">Dream Job</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Explore exciting career opportunities in cutting-edge technology and
          innovative companies. Your next big step starts here.
        </p>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto mb-12 backdrop-filter backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search Input */}
          <div className="relative flex-grow w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by title or company..."
              className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Button (for small screens) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            {showFilters ? <X className="w-5 h-5" /> : <Filter className="w-5 h-5" />}
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>

          {/* Filters (Desktop visible, Mobile toggled) */}
          <div className={`w-full md:w-auto md:flex flex-col md:flex-row gap-4 ${showFilters ? 'block' : 'hidden md:flex'} mt-4 md:mt-0`}>
            {/* Location Filter */}
            <div className="relative w-full md:w-auto">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none transition-colors"
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
              >
                <option value="">All Locations</option>
                {uniqueLocations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">&#9662;</span> {/* Custom arrow */}
            </div>

            {/* Job Type Filter */}
            <div className="relative w-full md:w-auto">
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none transition-colors"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="">All Types</option>
                {uniqueTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">&#9662;</span> {/* Custom arrow */}
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="max-w-7xl mx-auto">
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="relative bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden
                           transform hover:scale-[1.02] transition-all duration-300 ease-in-out
                           group backdrop-filter backdrop-blur-md"
              >
                {/* Job Image */}
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-full h-48 object-cover rounded-t-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                />

                {/* Job Info */}
                <div className="p-6 text-center relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-2">{job.title}</h2>
                  <p className="text-gray-400 text-lg mb-1">{job.company}</p>
                  <div className="flex items-center justify-center text-gray-500 text-base mb-2">
                    <MapPin className="w-4 h-4 mr-1 text-blue-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-300 text-lg font-semibold mb-4">
                    <DollarSign className="w-5 h-5 mr-1 text-green-400" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-900/40 text-blue-300 border border-blue-700/50 mb-4">
                    {job.type}
                  </div>

                  <Link
                    to={`/jobs/${job.id}`} // Link to a detail page for the job
                    className="mt-4 inline-block bg-pink-600 text-white font-bold px-8 py-3 rounded-full
                               shadow-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-105
                               group-hover:ring-2 group-hover:ring-pink-500 group-hover:ring-offset-2 group-hover:ring-offset-[#0A0A0A]"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500 mb-4">No jobs found matching your criteria.</p>
            <button
              onClick={() => { setSearchTerm(""); setFilterLocation(""); setFilterType(""); setShowFilters(false); }}
              className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition"
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