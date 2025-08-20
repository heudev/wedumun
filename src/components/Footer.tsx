import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#23484E] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">WEDUMUN</h3>
                        <p className="text-gray-300 mb-4">
                            World - Educational Simulation of Diplomacy and Leadership Model United Nations
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://linkedin.com/company/wedumun" className="text-gray-300 hover:text-white transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com/wedumun" className="text-gray-300 hover:text-white transition-colors">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                            <a href="https://instagram.com/wedumun" className="text-gray-300 hover:text-white transition-colors">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.33-1.297C4.198 14.794 3.708 13.643 3.708 12.346s.49-2.448 1.297-3.33C5.902 8.135 7.053 7.645 8.35 7.645s2.448.49 3.33 1.297c.881.881 1.371 2.032 1.371 3.329s-.49 2.448-1.371 3.33c-.882.881-2.033 1.371-3.33 1.371zm7.598 0c-1.297 0-2.448-.49-3.33-1.297-.881-.881-1.371-2.032-1.371-3.33s.49-2.448 1.371-3.33c.882-.881 2.033-1.371 3.33-1.371s2.448.49 3.33 1.371c.881.882 1.371 2.033 1.371 3.33s-.49 2.448-1.371 3.33c-.882.881-2.033 1.371-3.33 1.371z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/staff" className="text-gray-300 hover:text-white transition-colors">
                                    Staff
                                </Link>
                            </li>
                            <li>
                                <Link href="/conferences" className="text-gray-300 hover:text-white transition-colors">
                                    Conferences
                                </Link>
                            </li>
                            <li>
                                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                                    Upcoming Events
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>info@wedumun.org</li>
                            <li>+90 212 555 0123</li>
                            <li>Istanbul, Turkey</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
                    <p>&copy; 2025 WEDUMUN. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
