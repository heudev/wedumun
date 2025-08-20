import organizationData from '@/data/organization.json';
import Link from 'next/link';

export default function Staff() {
    const { teamStructure } = organizationData;

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#2A535A] to-[#23484E] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Staff</h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            Meet the dedicated individuals who make WEDUMUN possible. Our diverse staff brings together expertise in diplomacy, education, and international relations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Staff Sections Overview */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Executive Team */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="h-48 bg-gradient-to-br from-[#2A535A] to-[#23484E] flex items-center justify-center">
                                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Executive Team</h3>
                                <p className="text-gray-600 mb-6">
                                    Strategic leadership providing direction and overall guidance for WEDUMUN&apos;s mission and vision.
                                </p>
                                <p className="text-sm text-gray-500 mb-4">
                                    {teamStructure.executive.length} Members
                                </p>
                                <Link
                                    href="/staff/executive"
                                    className="inline-block bg-[#2A535A] text-white hover:bg-[#23484E] font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                                >
                                    View Team
                                </Link>
                            </div>
                        </div>

                        {/* Organization Staff */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="h-48 bg-gradient-to-br from-[#2A535A] to-[#23484E] flex items-center justify-center">
                                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Organization Staff</h3>
                                <p className="text-gray-600 mb-6">
                                    Operational team managing day-to-day activities, events, and organizational functions.
                                </p>
                                <p className="text-sm text-gray-500 mb-4">
                                    {teamStructure.organizationStaff.length} Members
                                </p>
                                <Link
                                    href="/staff/organization"
                                    className="inline-block bg-[#2A535A] text-white hover:bg-[#23484E] font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                                >
                                    View Team
                                </Link>
                            </div>
                        </div>

                        {/* Academic Team */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="h-48 bg-gradient-to-br from-[#2A535A] to-[#23484E] flex items-center justify-center">
                                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Team</h3>
                                <p className="text-gray-600 mb-6">
                                    Educational specialists ensuring the highest quality of academic content and training programs.
                                </p>
                                <p className="text-sm text-gray-500 mb-4">
                                    {teamStructure.academicTeam.length} Members
                                </p>
                                <Link
                                    href="/staff/academic"
                                    className="inline-block bg-[#2A535A] text-white hover:bg-[#23484E] font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                                >
                                    View Team
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Qualities Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What Makes Our Staff Special
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our staff combines diverse backgrounds, extensive experience, and a shared passion for international diplomacy and youth empowerment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#2A535A] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Experienced Leadership</h3>
                            <p className="text-gray-600">Our staff leaders have extensive experience in Model UN, international relations, and youth development.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#2A535A] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Perspective</h3>
                            <p className="text-gray-600">We bring together diverse cultural backgrounds and international perspectives to enrich our programs.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#2A535A] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Passionate Commitment</h3>
                            <p className="text-gray-600">Every staff member is deeply committed to empowering young people and fostering international understanding.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Our Staff Section */}
            <section className="py-16 bg-gradient-to-r from-[#2A535A] to-[#23484E] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Interested in Joining Our Staff?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        We&apos;re always looking for passionate individuals who share our vision of empowering young leaders through Model UN experiences.
                    </p>
                    <div className="space-x-4">
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-[#2A535A] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                        >
                            Get in Touch
                        </Link>
                        <a
                            href="mailto:info@wedumun.org"
                            className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#2A535A] font-semibold py-3 px-8 rounded-lg transition-all duration-200"
                        >
                            Send Your CV
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
