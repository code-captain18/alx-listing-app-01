import React from 'react';
import Link from 'next/link';
import { UI_TEXT, ROUTES } from '@/constants';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Support Section */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Support
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Safety information
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Cancellation options
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Our COVID-19 Response
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Supporting people with disabilities
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Report a neighborhood concern
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Community Section */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Community
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    ALX.org: disaster relief housing
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Support Afghan refugees
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Combating discrimination
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Hosting Section */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Hosting
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Try hosting
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    ALXCover: protection for Hosts
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Explore hosting resources
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Visit our community forum
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    How to host responsibly
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* About Section */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            About
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Newsroom
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Learn about new features
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Letter from our founders
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    Investors
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-gray-100 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">

                        {/* Left Side - Copyright and Links */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
                            <p className="text-sm text-gray-600">
                                © {currentYear} {UI_TEXT.APP_NAME}, Inc. All rights reserved
                            </p>
                            <div className="flex items-center space-x-4 text-sm">
                                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Privacy
                                </Link>
                                <span className="text-gray-400">·</span>
                                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Terms
                                </Link>
                                <span className="text-gray-400">·</span>
                                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Sitemap
                                </Link>
                                <span className="text-gray-400">·</span>
                                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                    Company details
                                </Link>
                            </div>
                        </div>

                        {/* Right Side - Language, Currency, and Social */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">

                            {/* Language and Currency */}
                            <div className="flex items-center space-x-4">
                                <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-1.657 0-3-4.03-3-9s1.343-9 3-9m0 18c1.657 0 3-4.03 3-9s-1.343-9-3-9" />
                                    </svg>
                                    <span>English (US)</span>
                                </button>

                                <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                                    <span>$</span>
                                    <span>USD</span>
                                </button>
                            </div>

                            {/* Social Media Links */}
                            <div className="flex items-center space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                    aria-label="Facebook"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                    aria-label="Twitter"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447c0-1.297.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323c0 1.297-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.363c-.807 0-1.418-.612-1.418-1.418s.612-1.418 1.418-1.418c.807 0 1.418.612 1.418 1.418s-.612 1.418-1.418 1.418zm3.708 1.297c0 6.62-5.367 11.987-11.988 11.987c-6.62 0-11.987-5.367-11.987-11.987C.029 5.367 5.396.001 12.017.001c6.62 0 11.987 5.367 11.987 11.986z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Signup Section */}
            <div className="bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            Stay updated with {UI_TEXT.APP_NAME}
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Get the latest news, travel tips, and special offers delivered to your inbox.
                        </p>
                        <div className="max-w-md mx-auto flex space-x-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            />
                            <button className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
