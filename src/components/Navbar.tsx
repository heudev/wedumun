'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#2A535A] shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
                            <Image
                                src="/esdal.png"
                                alt="WEDUMUN Logo"
                                width={1920}
                                height={1080}
                                className="w-15 h-15 rounded-full"
                            />
                            <span className="text-white text-xl font-bold">WEDUMUN</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-white hover:text-gray-300 transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
                            About Us
                        </Link>
                        <div className="relative group">
                            <Link href="#" className="text-white hover:text-gray-300 transition-colors flex items-center">
                                Staff
                                <svg
                                    className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>
                            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0">
                                <Link
                                    href="/staff/executive"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                >
                                    Executive
                                </Link>
                                <span
                                    className="block px-4 py-2 text-sm text-gray-400 cursor-not-allowed"
                                >
                                    Organization Staff
                                </span>
                                <span
                                    className="block px-4 py-2 text-sm text-gray-400 cursor-not-allowed"
                                >
                                    Academic Team
                                </span>
                            </div>
                        </div>
                        <div className="relative group">
                            <Link href="#" className="text-white hover:text-gray-300 transition-colors flex items-center">
                                Conferences
                                <svg
                                    className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>
                            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0">
                                <Link
                                    href="/events"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                >
                                    Upcoming Events
                                </Link>
                                <Link
                                    href="/conferences/previous"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                >
                                    Previous Conferences
                                </Link>
                            </div>
                        </div>
                        <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#23484E]">
                        <Link
                            href="/"
                            className="text-white block px-3 py-2 text-base font-medium hover:bg-[#2A535A] transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-white block px-3 py-2 text-base font-medium hover:bg-[#2A535A] transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="#"
                            className="text-white block px-3 py-2 text-base font-medium hover:bg-[#2A535A] transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Staff
                        </Link>
                        <Link
                            href="/staff/executive"
                            className="text-white block px-3 py-2 text-base font-medium hover:bg-[#2A535A] transition-colors duration-200 ml-4"
                            onClick={() => setIsOpen(false)}
                        >
                            - Executive
                        </Link>
                        <span
                            className="text-gray-400 block px-3 py-2 text-base font-medium cursor-not-allowed ml-4"
                        >
                            - Organization Staff
                        </span>
                        <span
                            className="text-gray-400 block px-3 py-2 text-base font-medium cursor-not-allowed ml-4"
                        >
                            - Academic Team
                        </span>
                        <Link
                            href="#"
                            className="text-white block px-3 py-2 text-base font-medium hover:bg-[#2A535A] transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Conferences
                        </Link>
                        <Link
                            href="/events"
                            className="text-white block px-3 py-2 text-base font-medium hover:bg-[#2A535A] transition-colors duration-200 ml-4"
                            onClick={() => setIsOpen(false)}
                        >
                            - Upcoming Events
                        </Link>
                        <Link
                            href="/conferences/previous"
                            className="text-white block px-3 py-2 text-base font-medium hover:bg-[#2A535A] transition-colors duration-200 ml-4"
                            onClick={() => setIsOpen(false)}
                        >
                            - Previous Conferences
                        </Link>
                        <Link
                            href="/contact"
                            className="text-white block px-3 py-2 text-base font-medium hover:bg-[#2A535A] transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
