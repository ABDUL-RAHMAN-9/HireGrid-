import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react'; // Example icons for the main page highlights

const Contact = () =>
{
    const location = useLocation(); // To highlight active link

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-gray-200 font-sans py-16 px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <section className="text-center mb-16 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
                    Let's <span className="text-pink-500">Connect</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    Whether you have a project in mind, a question, or just want to say hello,
                    we're eager to hear from you.
                </p>
            </section>

            {/* Contact Options Navigation */}
            <nav className="max-w-xl mx-auto mb-12 backdrop-filter backdrop-blur-xl bg-white/5 border border-white/10 rounded-full p-2 shadow-2xl flex justify-center gap-4">
                <NavLink
                    to="info"
                    end // 'end' prop ensures this link is only active when path is exactly /contact/info
                    className={({ isActive }) =>
                        `flex-1 text-center py-3 px-6 rounded-full font-semibold text-lg transition-all duration-300
            ${isActive
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                            : 'text-gray-300 hover:bg-white/10'
                        }`
                    }
                >
                    <div className="flex items-center justify-center gap-2">
                        <MapPin className="w-5 h-5" /> Contact Info
                    </div>
                </NavLink>
                <NavLink
                    to="form"
                    className={({ isActive }) =>
                        `flex-1 text-center py-3 px-6 rounded-full font-semibold text-lg transition-all duration-300
            ${isActive
                            ? 'bg-gradient-to-r from-pink-600 to-red-600 text-white shadow-lg'
                            : 'text-gray-300 hover:bg-white/10'
                        }`
                    }
                >
                    <div className="flex items-center justify-center gap-2">
                        <Mail className="w-5 h-5" /> Send a Message
                    </div>
                </NavLink>
            </nav>

            {/* Dynamic Content Area (for ContactInfo or ContactForm) */}
            <main className="max-w-4xl mx-auto">
                <Outlet />
            </main>

            {/* Quick Contact Highlights (Optional, but useful on the main contact page) */}
            <section className="max-w-7xl mx-auto mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="relative p-8 rounded-2xl backdrop-filter backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg flex flex-col items-center text-center">
                    <Mail className="w-16 h-16 text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                    <p className="text-gray-400">info@hiregrid.com</p>
                </div>
                <div className="relative p-8 rounded-2xl backdrop-filter backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg flex flex-col items-center text-center">
                    <Phone className="w-16 h-16 text-pink-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
                <div className="relative p-8 rounded-2xl backdrop-filter backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg flex flex-col items-center text-center">
                    <MapPin className="w-16 h-16 text-green-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                    <p className="text-gray-400">123 Tech Lane, Innovation City</p>
                </div>
            </section>
        </div>
    );
};

export default Contact;