'use client';

import organizationData from '@/data/organization.json';

export default function Contact() {
    const { contact } = organizationData;

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#2A535A] to-[#23484E] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            Have questions about our events, want to join our team, or need more information? We would love to hear from you!
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {/* Email */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#2A535A] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                            <a href={`mailto:${contact.email}`} className="text-[#2A535A] hover:text-[#23484E] transition-colors text-lg">
                                {contact.email}
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#2A535A] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                            <a href={`tel:${contact.phone}`} className="text-[#2A535A] hover:text-[#23484E] transition-colors text-lg">
                                {contact.phone}
                            </a>
                        </div>

                        {/* Address */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#2A535A] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                            <p className="text-gray-600 text-lg">
                                {contact.address.street}<br />
                                {contact.address.city}, {contact.address.postal}<br />
                                {contact.address.country}
                            </p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Follow Us</h3>
                        <div className="flex justify-center space-x-6">
                            <a
                                href={contact.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-[#2A535A] text-white rounded-full flex items-center justify-center hover:bg-[#23484E] transition-colors"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href={contact.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-[#2A535A] text-white rounded-full flex items-center justify-center hover:bg-[#23484E] transition-colors"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                            <a
                                href={contact.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-[#2A535A] text-white rounded-full flex items-center justify-center hover:bg-[#23484E] transition-colors"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.33-1.297C4.198 14.794 3.708 13.643 3.708 12.346s.49-2.448 1.297-3.33C5.902 8.135 7.053 7.645 8.35 7.645s2.448.49 3.33 1.297c.881.881 1.371 2.032 1.371 3.329s-.49 2.448-1.371 3.33c-.882.881-2.033 1.371-3.33 1.371zm7.598 0c-1.297 0-2.448-.49-3.33-1.297-.881-.881-1.371-2.032-1.371-3.33s.49-2.448 1.371-3.33c.882-.881 2.033-1.371 3.33-1.371s2.448.49 3.33 1.371c.881.882 1.371 2.033 1.371 3.33s-.49 2.448-1.371 3.33c-.882.881-2.033 1.371-3.33 1.371z" />
                                </svg>
                            </a>
                            <a
                                href={contact.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-[#2A535A] text-white rounded-full flex items-center justify-center hover:bg-[#23484E] transition-colors"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600">Quick answers to common questions</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">How do I register for an event?</h3>
                            <p className="text-gray-600">You can register for our events by visiting the specific event page and clicking the registration button. Early registration is recommended as spaces are limited.</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">What experience do I need for MUN?</h3>
                            <p className="text-gray-600">We welcome delegates of all experience levels! Our conferences are designed to accommodate both beginners and experienced participants with different committee levels.</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Are there scholarships available?</h3>
                            <p className="text-gray-600">Yes, we offer limited scholarships for outstanding students who demonstrate financial need. Contact us for more information about scholarship opportunities.</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">How can I join the WEDUMUN team?</h3>
                            <p className="text-gray-600">We are always looking for passionate individuals to join our team. Send us your CV and a cover letter explaining your interest in Model UN and international relations.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
