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
                                src="/file.svg"
                                alt="WEDUMUN Logo"
                                width={32}
                                height={32}
                                className="w-8 h-8"
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
                            <Link href="/staff" className="text-white hover:text-gray-300 transition-colors">
                                Staff
                            </Link>
                            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0">
                                <Link
                                    href="/staff/executive"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                >
                                    Executive
                                </Link>
                                <Link
                                    href="/staff/organization"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                >
                                    Organization Staff
                                </Link>
                                <Link
                                    href="/staff/academic"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                >
                                    Academic Team
                                </Link>
                            </div>
                        </div>
                        <div className="relative group">
                            <Link href="/conferences" className="text-white hover:text-gray-300 transition-colors">
                                Conferences
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
                            href="/staff"
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
                        <Link
                            href="/staff/organization"
                            className="text-white block px-3 py-2 text-base font-medium hover:bg-[#2A535A] transition-colors duration-200 ml-4"
                            onClick={() => setIsOpen(false)}
                        >
                            - Organization Staff
                        </Link>
                        <Link
                            href="/staff/academic"
                            className="text-white block px-3 py-2 text-base font-medium hover:bg-[#2A535A] transition-colors duration-200 ml-4"
                            onClick={() => setIsOpen(false)}
                        >
                            - Academic Team
                        </Link>
                        <Link
                            href="/conferences"
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
