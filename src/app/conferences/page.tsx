import Link from 'next/link';

export default function ConferencesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#2A535A] to-[#23484E] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Conferences
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200">
                            Explore our upcoming events and past conferences
                        </p>
                    </div>
                </div>
            </section>

            {/* Conference Categories */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Upcoming Events */}
                        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-center">
                                <div className="mb-6">
                                    <div className="w-16 h-16 bg-[#2A535A] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Upcoming Events
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Discover our upcoming Model UN conferences and events. Register now to secure your spot!
                                    </p>
                                </div>
                                <Link
                                    href="/events"
                                    className="inline-block bg-[#2A535A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#23484E] transition-colors duration-300"
                                >
                                    View Upcoming Events
                                </Link>
                            </div>
                        </div>

                        {/* Previous Conferences */}
                        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-center">
                                <div className="mb-6">
                                    <div className="w-16 h-16 bg-[#2A535A] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Previous Conferences
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Explore our successful past conferences, achievements, and memorable moments from previous events.
                                    </p>
                                </div>
                                <Link
                                    href="/conferences/previous"
                                    className="inline-block bg-[#2A535A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#23484E] transition-colors duration-300"
                                >
                                    View Previous Conferences
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Ready to Join Us?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Get in touch to learn more about our conferences and how you can participate.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-[#2A535A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#23484E] transition-colors duration-300"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}
