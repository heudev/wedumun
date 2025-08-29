'use client';

import organizationData from '@/data/organization.json';
import { useState } from 'react';

interface TeamMember {
    name: string;
    position: string;
    image: string;
    linkedin: string;
    email?: string;
    letter?: string;
}

export default function Team() {
    const { teamStructure } = organizationData;
    const [activeTab, setActiveTab] = useState('executive');

    const tabs = [
        { id: 'executive', label: 'Executive', data: teamStructure.executive },
        { id: 'organizationStaff', label: 'Organization Staff', data: teamStructure.organizationStaff },
        { id: 'academicTeam', label: 'Academic Team', data: teamStructure.academicTeam }
    ];

    const currentTabData = tabs.find(tab => tab.id === activeTab)?.data || [];
    const presidentData = teamStructure.executive.find(member => member.position === 'President');
    const showPresidentLetter = (activeTab === 'executive' || activeTab === 'academicTeam') && presidentData;

    const TeamMemberCard = ({ member }: { member: TeamMember }) => (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Portrait Photo - Rectangle format like iumun.org */}
            <div className="h-80 bg-gradient-to-br from-[#2A535A] to-[#23484E] flex items-center justify-center relative overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    {/* Placeholder for actual photo */}
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-4xl font-bold text-[#2A535A]">
                            {member.name.split(' ').map((n: string) => n[0]).join('')}
                        </span>
                    </div>
                </div>
            </div>

            <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#2A535A] font-semibold text-lg">{member.position}</p>

                <div className="flex justify-center items-center space-x-4 mt-4">
                    {member.email && (
                        <a
                            href={`mailto:${member.email}`}
                            className="text-[#2A535A] hover:text-[#23484E] transition-colors"
                            title="Email"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </a>
                    )}
                    {member.linkedin && (
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#2A535A] hover:text-[#23484E] transition-colors"
                            title="LinkedIn"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#2A535A] to-[#23484E] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
                        <p className="text-xl max-w-3xl mx-auto">
                            Meet the dedicated individuals who make WEDUMUN possible. Our diverse team brings together expertise in diplomacy, education, and international relations.
                        </p>
                    </div>
                </div>
            </section>

            {/* President's Letter Section - Only for Executive and Academic Team tabs */}
            {showPresidentLetter && presidentData && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="flex items-center mb-8">
                                <div className="w-24 h-24 bg-gradient-to-br from-[#2A535A] to-[#23484E] rounded-full flex items-center justify-center mr-6">
                                    <span className="text-2xl font-bold text-white">
                                        {presidentData.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">{presidentData.name}</h2>
                                    <p className="text-[#2A535A] font-semibold text-lg">{presidentData.position}</p>
                                </div>
                            </div>
                            <div className="prose prose-lg max-w-none">
                                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                    {presidentData.letter}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Team Tabs */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-gray-100 rounded-lg p-1 flex">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setActiveTab(tab.id);
                                    }}
                                    type="button"
                                    className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${activeTab === tab.id
                                        ? 'bg-[#2A535A] text-white shadow-md'
                                        : 'text-gray-600 hover:text-[#2A535A] hover:bg-gray-200'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {currentTabData.map((member, index) => (
                            <TeamMemberCard key={index} member={member} />
                        ))}
                    </div>

                    {/* Section Description */}
                    <div className="mt-16 text-center">
                        <div className="max-w-3xl mx-auto">
                            {activeTab === 'executive' && (
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Executive Leadership</h3>
                                    <p className="text-lg text-gray-600">
                                        Our executive team provides strategic direction and overall leadership for WEDUMUN.
                                        They are responsible for setting organizational goals, maintaining partnerships,
                                        and ensuring the highest standards of diplomatic education.
                                    </p>
                                </div>
                            )}
                            {activeTab === 'organizationStaff' && (
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Organization Staff</h3>
                                    <p className="text-lg text-gray-600">
                                        Our operational staff handles the day-to-day management of WEDUMUN activities.
                                        From event coordination to technology management, they ensure smooth operations
                                        and exceptional experiences for all participants.
                                    </p>
                                </div>
                            )}
                            {activeTab === 'academicTeam' && (
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Team</h3>
                                    <p className="text-lg text-gray-600">
                                        Our academic team is responsible for the educational content and quality of our programs.
                                        They develop curricula, provide training, and ensure that our conferences meet
                                        the highest academic standards in diplomatic education.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Our Team Section */}
            <section className="py-16 bg-gradient-to-r from-[#2A535A] to-[#23484E] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Interested in Joining Our Team?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        We&apos;re always looking for passionate individuals who share our vision of empowering young leaders through Model UN experiences.
                    </p>
                    <div className="space-x-4">
                        <a
                            href="/contact"
                            className="inline-block bg-white text-[#2A535A] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                        >
                            Get in Touch
                        </a>
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
