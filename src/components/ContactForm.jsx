import React from 'react'

const ContactForm = () =>
{
    return (
        <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 text-xl">
            {/* Contact Us Heading */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Contact Us
            </h2>

            {/* Contact Form */}
            <form className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-600 text-white rounded-lg py-3 font-medium hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
  };
export default ContactForm
