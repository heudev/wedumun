import Link from 'next/link';
import eventsData from '@/data/events.json';
import { formatDateRange, getDay, getMonthYear } from '@/utils/dateUtils';
import { EventsData } from '@/types/events';
import Image from 'next/image';

export default function Events() {
    const { events }: EventsData = eventsData;

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#2A535A] to-[#23484E] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            Join our world-class Model United Nations conferences and develop your diplomatic skills while addressing global challenges.
                        </p>
                    </div>
                </div>
            </section>

            {/* Events List Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {events.map((event, index) => (
                            <div key={event.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="h-80 bg-gradient-to-br from-[#2A535A] to-[#23484E] rounded-lg flex items-center justify-center overflow-hidden">
                                        {event.image ? (
                                            <Image
                                                src={event.image}
                                                alt={event.title}
                                                width={600}
                                                height={320}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="text-center text-white">
                                                <div className="text-6xl font-bold mb-2">
                                                    {getDay(event.date)}
                                                </div>
                                                <div className="text-xl">
                                                    {getMonthYear(event.date)}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <div className="bg-white p-8 rounded-lg shadow-lg">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h2>
                                        <p className="text-gray-600 mb-6 leading-relaxed">{event.longDescription}</p>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center text-gray-700">
                                                <svg className="w-5 h-5 mr-3 text-[#2A535A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span>
                                                    {formatDateRange(event.date, event.endDate)}
                                                </span>
                                            </div>
                                            <div className="flex items-center text-gray-700">
                                                <svg className="w-5 h-5 mr-3 text-[#2A535A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>{event.location}</span>
                                            </div>
                                            <div className="flex items-center text-gray-700">
                                                <svg className="w-5 h-5 mr-3 text-[#2A535A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                <span>
                                                    {event.expectedDelegates ? `${event.expectedDelegates} Delegates Expected` : `${event.committees.length} Committees`}
                                                </span>
                                            </div>
                                            {event.registrationOpen ? (
                                                <div className="flex items-center text-green-600">
                                                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="font-semibold">Registration Open</span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center text-red-600">
                                                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="font-semibold">Registration Not Opened</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-3">
                                            {event.detailsLink ? (
                                                <a
                                                    href={event.detailsLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 text-center bg-[#2A535A] hover:bg-[#23484E] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                                                >
                                                    View Details
                                                </a>
                                            ) : (
                                                <Link
                                                    href={`/events/${event.id}`}
                                                    className="flex-1 text-center bg-[#2A535A] hover:bg-[#23484E] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                                                >
                                                    View Details
                                                </Link>
                                            )}
                                            {event.registrationOpen && (
                                                event.registrationLink ? (
                                                    <a
                                                        href={event.registrationLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 text-center border-2 border-[#2A535A] text-[#2A535A] hover:bg-[#2A535A] hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                                                    >
                                                        Register Now
                                                    </a>
                                                ) : (
                                                    <Link
                                                        href={`/events/${event.id}#register`}
                                                        className="flex-1 text-center border-2 border-[#2A535A] text-[#2A535A] hover:bg-[#2A535A] hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                                                    >
                                                        Register Now
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Attend Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Attend WEDUMUN Events?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our events offer unique opportunities to develop skills, build networks, and engage with global issues.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-[#2A535A] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Excellence</h3>
                            <p className="text-gray-600">High-quality committees with experienced chairs and challenging topics that mirror real UN discussions.</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-[#2A535A] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Networking</h3>
                            <p className="text-gray-600">Connect with like-minded individuals from diverse backgrounds and build lasting international friendships.</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-[#2A535A] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Skill Development</h3>
                            <p className="text-gray-600">Enhance your public speaking, negotiation, research, and critical thinking skills in a supportive environment.</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-[#2A535A] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Recognition & Awards</h3>
                            <p className="text-gray-600">Outstanding delegates receive recognition and awards that enhance university and career applications.</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-[#2A535A] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5H9m-6 0h1.5a1.5 1.5 0 001.5-1.5v-1a1.5 1.5 0 00-1.5-1.5H3m9 0a5 5 0 11-10 0 5 5 0 0110 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Exchange</h3>
                            <p className="text-gray-600">Experience diverse cultures and perspectives while building global understanding and tolerance.</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-[#2A535A] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Future Opportunities</h3>
                            <p className="text-gray-600">Access exclusive opportunities in international organizations, diplomacy, and global leadership programs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-[#2A535A] to-[#23484E] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Make Your Mark?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join hundreds of delegates from around the world in our upcoming conferences and start your journey in international diplomacy.
                    </p>
                    <div className="space-x-4">
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-[#2A535A] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                        >
                            Contact Us
                        </Link>
                        <a
                            href="mailto:info@wedumun.org"
                            className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#2A535A] font-semibold py-3 px-8 rounded-lg transition-all duration-200"
                        >
                            Ask Questions
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
