import React, { useState } from 'react';
import Link from 'next/link';
import { UI_TEXT, PROPERTY_TYPES, ROUTES } from '../../constants';
import Button from '../common/Button';

const Header: React.FC = () => {
    const [searchLocation, setSearchLocation] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState('1');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activePropertyType, setActivePropertyType] = useState('');

    const handleSearch = () => {
        // Handle search functionality
        console.log({ searchLocation, checkIn, checkOut, guests });
    };

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            {/* Main Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href={ROUTES.HOME} className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2L3 9v9h4v-6h6v6h4V9l-7-7z" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-gray-900">{UI_TEXT.APP_NAME}</span>
                    </Link>

                    {/* Search Bar - Desktop */}
                    <div className="hidden lg:flex items-center bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center">
                            {/* Location */}
                            <div className="px-4 py-2 border-r border-gray-300">
                                <input
                                    type="text"
                                    placeholder="Where"
                                    value={searchLocation}
                                    onChange={(e) => setSearchLocation(e.target.value)}
                                    className="w-32 text-sm font-medium text-gray-900 placeholder-gray-600 bg-transparent border-none focus:outline-none"
                                />
                            </div>

                            {/* Check-in */}
                            <div className="px-4 py-2 border-r border-gray-300">
                                <input
                                    type="date"
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    className="w-24 text-sm font-medium text-gray-900 bg-transparent border-none focus:outline-none"
                                />
                            </div>

                            {/* Check-out */}
                            <div className="px-4 py-2 border-r border-gray-300">
                                <input
                                    type="date"
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                    className="w-24 text-sm font-medium text-gray-900 bg-transparent border-none focus:outline-none"
                                />
                            </div>

                            {/* Guests */}
                            <div className="px-4 py-2">
                                <select
                                    value={guests}
                                    onChange={(e) => setGuests(e.target.value)}
                                    className="text-sm font-medium text-gray-900 bg-transparent border-none focus:outline-none cursor-pointer"
                                >
                                    {Array.from({ length: 16 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Search Button */}
                            <button
                                onClick={handleSearch}
                                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full ml-2 mr-2 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Authentication & Menu */}
                    <div className="flex items-center space-x-4">
                        {/* Become a Host */}
                        <Link
                            href="#"
                            className="hidden md:block text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Become a Host
                        </Link>

                        {/* Globe Icon */}
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-1.657 0-3-4.03-3-9s1.343-9 3-9m0 18c1.657 0 3-4.03 3-9s-1.343-9-3-9" />
                            </svg>
                        </button>

                        {/* User Menu */}
                        <div className="relative">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="flex items-center space-x-2 bg-white border border-gray-300 rounded-full px-2 py-2 hover:shadow-md transition-shadow"
                            >
                                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <div className="w-7 h-7 bg-gray-400 rounded-full"></div>
                            </button>

                            {/* Dropdown Menu */}
                            {isMenuOpen && (
                                <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                    <Link href="#" className="block px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50">
                                        Sign up
                                    </Link>
                                    <Link href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                                        Log in
                                    </Link>
                                    <hr className="my-2" />
                                    <Link href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                                        Host your home
                                    </Link>
                                    <Link href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                                        Host an experience
                                    </Link>
                                    <Link href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                                        Help
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Search Bar */}
                <div className="lg:hidden pb-4">
                    <div className="bg-white border border-gray-300 rounded-lg p-3 space-y-3">
                        <input
                            type="text"
                            placeholder="Where are you going?"
                            value={searchLocation}
                            onChange={(e) => setSearchLocation(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="date"
                                value={checkIn}
                                onChange={(e) => setCheckIn(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                            <input
                                type="date"
                                value={checkOut}
                                onChange={(e) => setCheckOut(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>
                        <select
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            {Array.from({ length: 16 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>
                                    {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                                </option>
                            ))}
                        </select>
                        <Button onClick={handleSearch} className="w-full bg-red-500 hover:bg-red-600">
                            {UI_TEXT.BUTTONS.SEARCH}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Property Types Navigation */}
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-8 py-4 overflow-x-auto">
                        {PROPERTY_TYPES.slice(0, 8).map((type) => (
                            <button
                                key={type}
                                onClick={() => setActivePropertyType(activePropertyType === type ? '' : type)}
                                className={`flex flex-col items-center space-y-2 min-w-0 flex-shrink-0 group ${activePropertyType === type
                                        ? 'text-gray-900 border-b-2 border-gray-900 pb-2'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {/* Property Type Icons */}
                                <div className={`w-6 h-6 ${activePropertyType === type ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                    {type === 'Apartment' && (
                                        <svg fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17 7H7a3 3 0 00-3 3v8a1 1 0 001 1h14a1 1 0 001-1v-8a3 3 0 00-3-3zM6 10a1 1 0 011-1h10a1 1 0 011 1v7H6v-7z" />
                                        </svg>
                                    )}
                                    {type === 'House' && (
                                        <svg fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M10 2L3 9v9h4v-6h6v6h4V9l-7-7z" />
                                        </svg>
                                    )}
                                    {type === 'Villa' && (
                                        <svg fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
                                        </svg>
                                    )}
                                    {(type === 'Condo' || type === 'Loft') && (
                                        <svg fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M21 9V7l-3-3H6L3 7v2H2v2h1v10h18V11h1V9h-1zM5 7.5L6.5 6h11L19 7.5V9H5V7.5z" />
                                        </svg>
                                    )}
                                    {(type === 'Cabin' || type === 'Studio') && (
                                        <svg fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 4L6 6v12h12V6l-2-2H8zm0 2h8v10H8V6z" />
                                        </svg>
                                    )}
                                    {(type === 'Hotel' || type === 'Resort') && (
                                        <svg fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M7 14v-4h4v4h6V8H7v6zm-2-8h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
                                        </svg>
                                    )}
                                    {type === 'Townhouse' && (
                                        <svg fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 3L4 9v10h4v-6h8v6h4V9l-8-6z" />
                                        </svg>
                                    )}
                                </div>
                                <span className="text-xs font-medium whitespace-nowrap">{type}</span>
                            </button>
                        ))}

                        {/* Filters Button */}
                        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors min-w-0 flex-shrink-0">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            <span className="text-xs font-medium">Filters</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-25 z-40 lg:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </header>
    );
};

export default Header;
