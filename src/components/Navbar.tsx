'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.includes('#')) {
            e.preventDefault();
            const [path, hash] = href.split('#');

            // If we're on the same page, just scroll to the element
            if (path === '/about' || path === '') {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } else {
                // Navigate to the page and then scroll
                window.location.href = href;
            }
        }
    };

    return (
        <nav className="bg-[#2A535A] shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <span className="text-white text-xl font-bold">WEDUMUN</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-white hover:text-gray-300 transition-colors">
                            Home
                        </Link>
                        <div className="relative group">
                            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
                                About Us
                            </Link>
                            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0">
                                <Link
                                    href="/about#organization"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                    onClick={(e) => handleSmoothScroll(e, '/about#organization')}
                                >
                                    Our Organization
                                </Link>
                                <Link
                                    href="/about#vision"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                    onClick={(e) => handleSmoothScroll(e, '/about#vision')}
                                >
                                    Our Vision
                                </Link>
                                <Link
                                    href="/about#activities"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                    onClick={(e) => handleSmoothScroll(e, '/about#activities')}
                                >
                                    Previous Activities
                                </Link>
                            </div>
                        </div>
                        <Link href="/team" className="text-white hover:text-gray-300 transition-colors">
                            Our Team
                        </Link>
                        <Link href="/events" className="text-white hover:text-gray-300 transition-colors">
                            Upcoming Events
                        </Link>
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
                            href="/team"
                            className="text-white block px-3 py-2 text-base font-medium hover:bg-[#2A535A] transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Our Team
                        </Link>
                        <Link
                            href="/events"
                            className="text-white block px-3 py-2 text-base font-medium hover:bg-[#2A535A] transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Upcoming Events
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
