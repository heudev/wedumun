import Link from 'next/link';

export default function PreviousConferencesPage() {
    const previousConferences = [
        {
            id: 1,
            title: "WEDUMUN 2024",
            date: "March 15-17, 2024",
            location: "Istanbul, Turkey",
            participants: 250,
            committees: 8,
            description: "Our flagship annual conference featuring diverse committees and delegates from across Europe. Distinguished by various committees and intensive negotiation sessions.",
            image: "/api/placeholder/400/300",
            highlights: [
                "8 specialized committees",
                "250+ international delegates",
                "3-day intensive sessions",
                "Cultural exchange program"
            ]
        },
        {
            id: 2,
            title: "WEDUMUN Youth Summit 2023",
            date: "November 10-12, 2023",
            location: "Ankara, Turkey",
            participants: 180,
            committees: 6,
            description: "A special youth-focused conference addressing global challenges and sustainable development issues.",
            image: "/api/placeholder/400/300",
            highlights: [
                "6 dynamic committees",
                "180 young delegates",
                "Sustainability focus",
                "Leadership workshops"
            ]
        },
        {
            id: 3,
            title: "WEDUMUN Regional Conference 2023",
            date: "June 8-10, 2023",
            location: "Izmir, Turkey",
            participants: 120,
            committees: 4,
            description: "A regional conference bringing together delegates from Western Turkey and neighboring regions.",
            image: "/api/placeholder/400/300",
            highlights: [
                "4 specialized committees",
                "120 regional delegates",
                "Cross-cultural dialogue",
                "Diplomatic simulation"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#2A535A] to-[#23484E] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Previous Conferences
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200">
                            Celebrating our successful conferences and achievements
                        </p>
                    </div>
                </div>
            </section>

            {/* İstatistikler Bölümü */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div className="bg-gray-50 rounded-lg p-6">
                            <div className="text-3xl font-bold text-[#2A535A] mb-2">3</div>
                            <div className="text-gray-600">Conferences Held</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <div className="text-3xl font-bold text-[#2A535A] mb-2">550+</div>
                            <div className="text-gray-600">Total Participants</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <div className="text-3xl font-bold text-[#2A535A] mb-2">18</div>
                            <div className="text-gray-600">Committees</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <div className="text-3xl font-bold text-[#2A535A] mb-2">15+</div>
                            <div className="text-gray-600">Countries</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Konferans Listesi */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Our Conference History
                        </h2>
                        <p className="text-xl text-gray-600">
                            A journey through our successful Model UN conferences
                        </p>
                    </div>

                    <div className="space-y-12">
                        {previousConferences.map((conference, index) => (
                            <div
                                key={conference.id}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                            >
                                <div className="lg:w-1/2">
                                    <div className="bg-gradient-to-br from-[#2A535A] to-[#23484E] rounded-lg h-64 flex items-center justify-center text-white">
                                        <div className="text-center">
                                            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                            <span className="text-lg font-semibold">Conference Image</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <div className="bg-white rounded-lg shadow-lg p-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                            {conference.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {conference.date}
                                            </span>
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {conference.location}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mb-6">
                                            {conference.description}
                                        </p>
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="text-center p-3 bg-gray-50 rounded">
                                                <div className="text-lg font-bold text-[#2A535A]">{conference.participants}</div>
                                                <div className="text-sm text-gray-600">Participants</div>
                                            </div>
                                            <div className="text-center p-3 bg-gray-50 rounded">
                                                <div className="text-lg font-bold text-[#2A535A]">{conference.committees}</div>
                                                <div className="text-sm text-gray-600">Committees</div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-2">Conference Highlights:</h4>
                                            <ul className="space-y-1">
                                                {conference.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="flex items-center text-sm text-gray-600">
                                                        <svg className="w-3 h-3 mr-2 text-[#2A535A]" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fotoğraf Galerisi */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Conference Moments
                        </h2>
                        <p className="text-xl text-gray-600">
                            Memorable moments from our conferences
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="bg-gradient-to-br from-[#2A535A] to-[#23484E] rounded-lg h-48 flex items-center justify-center text-white">
                                <div className="text-center">
                                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm">Conference Photo {item}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Çağrı */}
            <section className="bg-[#2A535A] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Join Our Next Conference
                    </h2>
                    <p className="text-xl mb-8 text-gray-200">
                        Be part of our upcoming events and continue the legacy of diplomatic excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/events"
                            className="inline-block bg-white text-[#2A535A] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                        >
                            View Upcoming Events
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2A535A] transition-colors duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
