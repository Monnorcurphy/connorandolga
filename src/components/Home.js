import React from 'react';
import { useAuth } from '../context/AuthContext';
import LogOut from './Logout';

const Home = () => {
    const { isAuthorized, loading, user } = useAuth();
    if (user && !isAuthorized) {
        return <LogOut />
    }

    if (loading) {
        return <div>Loading....</div>
    }

    return (
        <div className="relative h-screen w-screen flex flex-col items-center justify-center">
            {/* Background for smaller screens */}
            <div
                className="absolute inset-0 bg-[url('/src/images/background.jpg')] bg-cover bg-center bg-no-repeat md:hidden"
                style={{ zIndex: -2 }}
            ></div>

            {/* Background for medium screens and larger */}
            <div
                className="absolute inset-0 hidden md:block bg-[url('/src/images/background2.jpg')] bg-cover bg-center bg-no-repeat"
                style={{ zIndex: -2 }}
            ></div>

            {/* Overlay for opacity control */}
            <div
                className="absolute inset-0 bg-black opacity-30"
                style={{ zIndex: -1 }}
            ></div>

            {/* Your content goes here */}
            <div className="z-10 text-white">
                {/* Add your content */}
            </div>
        </div>
    )
}






export default Home;