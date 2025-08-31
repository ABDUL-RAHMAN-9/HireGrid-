import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () =>
{
    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl border border-gray-200 text-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Contact Information</h2>

            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <Mail className="text-blue-500" />
                    <span className="text-gray-700">example@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                    <Phone className="text-green-500" />
                    <span className="text-gray-700">+1234567890</span>
                </div>

                <div className="flex items-center gap-3">
                    <MapPin className="text-red-500" />
                    <span className="text-gray-700">XYZ Street, Bangalore</span>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
