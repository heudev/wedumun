import { notFound } from 'next/navigation';
import Link from 'next/link';
import eventsData from '@/data/events.json';

interface EventPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EventPage({ params }: EventPageProps) {
    const { id } = await params;
    const { events } = eventsData;
    const event = events.find(e => e.id === id);

    if (!event) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#2A535A] to-[#23484E] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{event.title}</h1>
                        <p className="text-xl max-w-3xl mx-auto mb-8">
                            {event.longDescription}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <div className="flex items-center text-lg">
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {new Date(event.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })} - {new Date(event.endDate).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                            <div className="flex items-center text-lg">
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {event.location}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Overview */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Event Overview</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                {event.longDescription}
                            </p>

                            {event.registrationOpen && (
                                <div id="register" className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                                    <h3 className="text-xl font-semibold text-green-800 mb-4">Registration is Open!</h3>
                                    <p className="text-green-700 mb-4">
                                        Secure your spot at {event.title}. Early registration is recommended as spaces are limited.
                                    </p>
                                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                                        Register Now
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-3 mt-0.5 text-[#2A535A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <div>
                                            <strong>Duration:</strong><br />
                                            {new Date(event.date).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-3 mt-0.5 text-[#2A535A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div>
                                            <strong>Location:</strong><br />
                                            {event.location}
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-3 mt-0.5 text-[#2A535A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <div>
                                            <strong>Committees:</strong><br />
                                            {event.committees.length} committees
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 mr-3 mt-0.5 text-[#2A535A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div>
                                            <strong>Registration:</strong><br />
                                            {event.registrationOpen ? 'Open' : 'Closed'}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Committees Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Committees</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {event.committees.map((committee, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{committee.name}</h3>
                                <p className="text-gray-600 mb-4">{committee.topic}</p>
                                <div className="flex items-center text-sm text-[#2A535A]">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Chair: {committee.chair}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Schedule Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Event Schedule</h2>
                    <div className="space-y-8">
                        {event.schedule.map((day, dayIndex) => (
                            <div key={dayIndex} className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{day.day} - {day.date}</h3>
                                <div className="space-y-4">
                                    {day.events.map((scheduleEvent, eventIndex) => (
                                        <div key={eventIndex} className="flex items-start bg-white p-4 rounded border-l-4 border-[#2A535A]">
                                            <div className="text-[#2A535A] font-semibold text-sm mr-4 min-w-[4rem]">
                                                {scheduleEvent.time}
                                            </div>
                                            <div className="text-gray-700">{scheduleEvent.activity}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact & Registration Section */}
            <section className="py-16 bg-gradient-to-r from-[#2A535A] to-[#23484E] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Interested in Participating?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Have questions about {event.title}? Contact us for more information or assistance with registration.
                    </p>
                    <div className="space-x-4">
                        {event.registrationOpen ? (
                            <button className="inline-block bg-white text-[#2A535A] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                                Register Now
                            </button>
                        ) : (
                            <Link
                                href="/events"
                                className="inline-block bg-white text-[#2A535A] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                            >
                                View Other Events
                            </Link>
                        )}
                        <Link
                            href="/contact"
                            className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#2A535A] font-semibold py-3 px-8 rounded-lg transition-all duration-200"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export async function generateStaticParams() {
    const { events } = eventsData;
    return events.map((event) => ({
        id: event.id,
    }));
}
