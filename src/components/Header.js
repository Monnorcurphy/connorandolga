import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
    const { user, isAuthorized, logout } = useAuth();
    const protectedEmails = process.env.REACT_APP_PROTECTED_EMAILS;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="bg-forest-200 p-4">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <Link to="/" className="flex items-center">
                    <h1 className="text-2xl md:text-3xl font-script text-forest-600">Connor & Olga</h1>
                </Link>

                {isAuthorized && (
                    <>
                        <button onClick={toggleMenu} className="md:hidden text-forest-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto mt-4 md:mt-0`}>
                            <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
                                <li><Link to="/" className="block text-forest-600 hover:text-forest-800">Home</Link></li>
                                <li><Link to="/our-story" className="block text-forest-600 hover:text-forest-800">Our Story</Link></li>
                                <li><Link to="/details" className="block text-forest-600 hover:text-forest-800">Details</Link></li>
                                <li><Link to="/rsvp" className="block text-forest-600 hover:text-forest-800">RSVP</Link></li>
                                <li><Link to="/calendar" className="block text-forest-600 hover:text-forest-800">Calendar</Link></li>
                                {protectedEmails.includes(user?.email) && (
                                    <li><Link to="/CSVUpload" className="block text-forest-600 hover:text-forest-800">CSVUpload</Link></li>
                                )}
                            </ul>
                        </nav>
                    </>
                )}

                <div className="auth-status mt-4 md:mt-0 w-full md:w-auto">
                    {isAuthorized && (
                        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
                            <span className="text-sm text-forest-700">Welcome, {user?.displayName || user?.email || ''}</span>
                            <button onClick={logout} className="bg-forest-500 text-white px-2 py-1 rounded hover:bg-forest-600">Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;