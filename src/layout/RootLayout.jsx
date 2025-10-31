import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const RootLayout = () =>
{
    return (
        <div className="flex flex-col min-h-screen"> {/* Use flex-col to stack Navbar and Outlet content */}
            <Navbar />
            <div className="flex-grow"> {/* This will take up remaining vertical space */}
                <Outlet />
            </div>
        </div>
    );
};

export default RootLayout;