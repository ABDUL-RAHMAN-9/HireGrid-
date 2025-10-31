import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const ContactInfo = () =>
{
    return (
        <div className="relative p-8 md:p-10 rounded-2xl backdrop-filter backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl text-center space-y-8">
            <h2 className="text-4xl font-bold text-white mb-6">Our Details</h2>
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300 text-lg">
                    <Mail className="w-7 h-7 text-blue-400 flex-shrink-0" />
                    <span className="font-semibold text-white">Email:</span>
                    <a href="mailto:info@hiregrid.com" className="hover:text-pink-500 transition-colors">info@hiregrid.com</a>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300 text-lg">
                    <Phone className="w-7 h-7 text-green-400 flex-shrink-0" />
                    <span className="font-semibold text-white">Phone:</span>
                    <a href="tel:+15551234567" className="hover:text-pink-500 transition-colors">+1 (555) 123-4567</a>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300 text-lg">
                    <MapPin className="w-7 h-7 text-purple-400 flex-shrink-0" />
                    <span className="font-semibold text-white">Address:</span>
                    <p>123 Tech Lane, Innovation City, CA 90210, USA</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300 text-lg">
                    <Globe className="w-7 h-7 text-yellow-400 flex-shrink-0" />
                    <span className="font-semibold text-white">Office Hours:</span>
                    <p>Mon - Fri: 9:00 AM - 5:00 PM (EST)</p>
                </div>
            </div>
            {/* Optional: Map embedding */}
            <div className="mt-10 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.298218001602!2d-122.41941558468249!3d37.77492957975931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858087e5b6a7d1%3A0x4e6b2d2f7e02d6b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location Map"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactInfo;