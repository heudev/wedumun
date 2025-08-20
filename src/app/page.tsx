'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import organizationData from '@/data/organization.json';
import eventsData from '@/data/events.json';
import { formatDate } from '@/utils/dateUtils';

export default function Home() {
  const { vision } = organizationData;
  const { events } = eventsData;
  const upcomingEvents = events; // Show all upcoming events

  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    if (upcomingEvents.length > 1) {
      const interval = setInterval(() => {
        setCurrentEventIndex((prevIndex) =>
          prevIndex === upcomingEvents.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [upcomingEvents.length]);

  const nextEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === upcomingEvents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevEvent = () => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex === 0 ? upcomingEvents.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2A535A] to-[#23484E] text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-blue-300">WEDUMUN</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Speak now, shape tomorrow
            </p>
            <div className="space-x-4">
              <Link
                href="/events"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                View Events
              </Link>
              <Link
                href="/about"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#2A535A] font-semibold py-3 px-8 rounded-lg transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600">
              Join our upcoming conferences and summits
            </p>
          </div>

          {upcomingEvents.length > 0 && (
            <div className="relative max-w-4xl mx-auto">
              {/* Event Carousel */}
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentEventIndex * 100}%)` }}
                >
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="w-full flex-shrink-0">
                      <div className="bg-white border border-gray-200">
                        <div className="h-64 bg-gradient-to-br from-[#2A535A] to-[#23484E]"></div>
                        <div className="p-8">
                          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">{event.title}</h3>
                          <p className="text-gray-600 mb-6 text-center">{event.shortDescription}</p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center justify-center text-gray-500">
                              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              {formatDate(event.date)}
                            </div>
                            <div className="flex items-center justify-center text-gray-500">
                              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {event.location}
                            </div>
                          </div>

                          <div className="text-center">
                            <Link
                              href={`/events/${event.id}`}
                              className="inline-block bg-[#2A535A] hover:bg-[#23484E] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              {upcomingEvents.length > 1 && (
                <>
                  <button
                    onClick={prevEvent}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextEvent}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Dots Indicator */}
              {upcomingEvents.length > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                  {upcomingEvents.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentEventIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentEventIndex ? 'bg-[#2A535A]' : 'bg-gray-300'
                        }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/events"
              className="inline-block bg-[#2A535A] hover:bg-[#23484E] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {vision.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
              {vision.content}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#2A535A] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Community</h3>
              <p className="text-gray-600">Connect with delegates from around the world and build lasting international friendships.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#2A535A] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Skill Development</h3>
              <p className="text-gray-600">Enhance your diplomatic, public speaking, and critical thinking abilities through practical experience.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#2A535A] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Issues</h3>
              <p className="text-gray-600">Engage with real-world challenges and develop solutions for pressing international concerns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join WEDUMUN Society Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Join WEDUMUN Society
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Don&apos;t miss the opportunity to gain unforgettable new experiences and make your voice heard across the globe! Sign up as a society volunteer now!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">APPLY AS A VOLUNTEER</h4>
              <p className="text-gray-600 mb-6">Be a part of our organization and step into the world of diplomacy!</p>
              <Link
                href="/contact"
                className="inline-block bg-[#2A535A] hover:bg-[#23484E] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Apply Now
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">APPLY AS A MEMBER</h4>
              <p className="text-gray-600 mb-6">Become a WEDUMUN Member to not miss the latest updates announcements!</p>
              <Link
                href="/contact"
                className="inline-block bg-[#2A535A] hover:bg-[#23484E] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-[#2A535A] to-[#23484E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join WEDUMUN?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of our global community and develop the skills you need to become a future leader in international relations.
          </p>
          <div className="space-x-4 space-y-4">
            <Link
              href="/events"
              className="inline-block bg-white text-[#2A535A] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Register for Events
            </Link>
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
